import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Container } from 'components/container';
import { Card } from 'components/card';
import { Label } from 'components/label';
import { Logo } from 'components/logo';
import { Input } from 'components/input';
import { Button, DelayedButton } from 'components/button';
import { Message } from 'components/message';
import { login } from 'lib/api/auth';
import { useLoginAttemps, MAX_ATTEMPTS } from 'hooks/use-login-attempts';
import { useToasts } from 'hooks/use-toasts';
import { authConfirm, authReconfirm } from 'lib/api/graphql';
import type { SqueakyPage } from 'types/page';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

enum PageView {
  LOGIN,
  UNCONFIRMED
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email address').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const AuthLogin: SqueakyPage<NextPage> = () => {
  const router = useRouter();
  const toasts = useToasts();
  const [email, setEmail] = React.useState<string>('');
  const [failed, setFailed] = React.useState<boolean>(false);
  const [pageView, setPageView] = React.useState(PageView.LOGIN);

  const { 
    attempts, 
    exceeded, 
    incr, 
    clear 
  } = useLoginAttemps();

  const resendConfirmation = async () => {
    try {
      await authReconfirm({ email });
      toasts.add({ type: 'success', body: 'Verification email send successfully' });
      setPageView(PageView.LOGIN);
    } catch(error) {
      console.error(error);
      toasts.add({ type: 'error', body: 'There was an issue resending the verification email' });
    }
  };

  React.useEffect(() => {
    (async () => {
      const token = router.query.token as string;
      if (!token) return;

      try {
        const { email } = await authConfirm({ token });
        setEmail(email);
        router.push({ pathname: '/auth/login', query: {} });
      } catch(error) {
        console.error(error);
        toasts.add({ type: 'error', body: 'There was an error with your sign in token' });
      }
    })();
  }, [router.isReady]);

  return (
    <>
      <Link href='/' className='logo'>
        <Logo logo='main' height={48} width={156} alt='Squeaky logo' />
      </Link>

      <div className='center'>
        <Container className='sm'>
          <main>
            <Card>
              {pageView === PageView.LOGIN && ( 
                <>
                  <h1>Log In</h1>

                  {!!email && (
                    <Message
                      type='success'
                      message='Your email address has been verified.'
                    />
                  )}

                  {(exceeded || failed) && (
                    <Message 
                      type='error' 
                      message={
                        exceeded
                          ? <span>You have made too many failed log in attempts. <b>Please retry in 10 minutes or contact us</b>.</span>
                          : <span>Email and password combination not recognised. <b>{MAX_ATTEMPTS - attempts} attempts remaining</b>.</span>
                      }
                    />
                  )}

                  <Formik
                    initialValues={{ email, password: '' }}
                    validationSchema={LoginSchema}
                    enableReinitialize
                    onSubmit={(values, { setSubmitting }) => {
                      (async () => {
                        if (exceeded) return;

                        const { error } = await login(values);

                        setSubmitting(false);

                        if (!error) {
                          clear();
                          location.href = `${publicRuntimeConfig.appHost}/sites/`;
                          return;
                        }

                        if (/confirm your email/.test(error.error)) {
                          setEmail(values.email);
                          return setPageView(PageView.UNCONFIRMED);
                        }
                      
                        setFailed(true);
                        return incr();
                      })();
                    }}
                  >
                    {({
                      errors,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                      touched,
                      values,
                      isValid,
                      dirty,
                    }) => (
                      <form onSubmit={handleSubmit} data-test='login-form'>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                          name='email' 
                          type='email' 
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder='e.g. jess@email.com'
                          autoComplete='email'
                          value={values.email}
                          invalid={touched.email && !!errors.email}
                        />
                        <span className='validation'>{errors.email}</span>

                        <Label htmlFor='password'>
                          Password
                          <Link href='/auth/reset'>
                            Forgot <span>your</span> password?
                          </Link>
                        </Label>
                        <Input
                          name='password' 
                          type='password' 
                          onBlur={handleBlur}
                          onChange={handleChange}
                          autoComplete='current-password'
                          value={values.password}
                          invalid={touched.password && !!errors.password}
                        />
                        <span className='validation'>{errors.password}</span>

                        <Button type='submit' disabled={isSubmitting || !(dirty && isValid) || exceeded} className='primary'>
                          Log in
                        </Button>
                      </form>
                    )}
                  </Formik>
                </>
              )}

              {pageView === PageView.UNCONFIRMED && (
                <>
                  <Message
                    type='info'
                    message={<span>You have previously attempted to sign up with email address <span className='email'>{email}</span>. To resend the verification email click the button below.</span>}
                    className='reconfirm-message'
                  />

                  <DelayedButton delay={10} initialDelayed={false} className='primary' onClick={resendConfirmation}>
                    Resend Verfication Email
                  </DelayedButton>
                </>
              )}
            </Card>
          </main>
        </Container>
      </div>

      <div className='footer-link'>
        <p>New to Squeaky? <Link href='/blog/company-news/a-very-important-announcement-from-squeaky/'>Sign up</Link></p>
      </div>
    </>
  );
};

AuthLogin.getMetaData = () => ({
  title: 'Squeaky | Log in',
  description: 'Log in to your Squeaky account to access your latest customer experience insights. Don\'t have an account yet? Sign up free today!',
  index: true,
});

export default AuthLogin;
