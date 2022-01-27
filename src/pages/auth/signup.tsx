import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import * as Yup from 'yup';
import { gql, useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { Formik } from 'formik';
import { Icon } from 'components/icon';
import { Logo } from 'components/logo';
import { Container } from 'components/container';
import { Card } from 'components/card';
import { Label } from 'components/label';
import { Input } from 'components/input';
import { Button, DelayedButton } from 'components/button';
import { Checkbox } from 'components/checkbox';
import { Message } from 'components/message';
import { Password } from 'components/password';
import { PASSWORD_REGEX } from 'data/users/constants';
import { signup, reconfirmAccount } from 'lib/api/auth';
import { useToasts } from 'hooks/use-toasts';

enum PageView {
  EMAIL,
  PASSWORD,
  EMAIL_TAKEN,
  VERIFY
}

const USER_EXISTS = gql`
  query UserExists($email: String!) {
    userExists(email: $email)
  }
`;

const EmailSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email address').required('Email is required'),
  terms: Yup.boolean().oneOf([true], 'You must agree to the terms')
});

const PasswordSchema = Yup.object().shape({
  password: Yup.string().matches(PASSWORD_REGEX, 'Password must match the criteria defined below').required('Password is required')
});

const Signup: NextPage = () => {
  const toasts = useToasts();
  const router = useRouter();
  const [pageView, setPageView] = React.useState(PageView.EMAIL);
  const [email, setEmail] = React.useState<string>(null);

  const [checkEmailExists] = useLazyQuery(USER_EXISTS);

  const resendConfirmation = async () => {
    const { error } = await reconfirmAccount(email);

    error
      ? toasts.add({ type: 'error', body: 'There was an issue resending the verification email' })
      : toasts.add({ type: 'success', body: 'Verification email send successfully' });
  };

  return (
    <>
      <Head>
        <title>Squeaky | Sign up</title>
      </Head>

      <Link href='/'>
        <a className='logo'>
          <Logo logo='main' height={48} width={156} alt='Squeaky logo' />
        </a>
      </Link>

      <div className='center'>
        <Container className='lg'>
          <main>
            <Card>
              {pageView === PageView.EMAIL && (
                <>
                  <h2>Sign Up</h2>
                  <Formik
                    initialValues={{ email: (router.query.email || '') as string, terms: false }}
                    validationSchema={EmailSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      (async () => {
                        const { data } = await checkEmailExists({ variables: { email: values.email } });
                        setSubmitting(false);
                        setEmail(values.email);
                        setPageView(data.userExists ? PageView.EMAIL_TAKEN : PageView.PASSWORD);
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
                      <form onSubmit={handleSubmit}>
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

                        <Checkbox name='terms' onChange={handleChange} checked={values.terms} invalid={touched.terms && !!errors.terms}>
                          I have read and accept the <Link href='/legal/terms-of-use/'><a target='_blank'>Terms Of Use</a></Link>
                        </Checkbox>
                        <span className='validation'>{errors.terms}</span>

                        <Button type='submit' disabled={isSubmitting || !(dirty && isValid)} className='primary-app'>
                          Continue
                        </Button>
                      </form>
                    )}
                  </Formik>
                </>
              )}

              {pageView === PageView.PASSWORD && (
                <>
                  <h2>Sign Up</h2>
                  <Formik
                    initialValues={{ email, password: '' }}
                    validationSchema={PasswordSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      (async () => {
                        const { body } = await signup({ email: values.email, password: values.password });
                        setSubmitting(false);

                        if (body) {
                          setPageView(PageView.VERIFY);
                        }
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
                      <form onSubmit={handleSubmit}>
                        <Label htmlFor='email'>Email</Label>
                        <p>{values.email}</p>

                        <Label htmlFor='password'>Create password</Label>
                        <Input
                          name='password' 
                          type='password' 
                          onBlur={handleBlur}
                          onChange={handleChange}
                          autoComplete='new-password'
                          value={values.password}
                          invalid={touched.password && !!errors.password}
                        />
                        <span className='validation'>{errors.password}</span>

                        <Password password={values.password} />

                        <Button type='submit' disabled={isSubmitting || !(dirty && isValid)} className='primary-app'>
                          Sign up
                        </Button>
                      </form>
                    )}
                  </Formik>
                </>
              )}

              {pageView === PageView.EMAIL_TAKEN && (
                <div className='email-taken'>
                  <Message type='info' message={`A user with the email address ${email || ''} already exists. Please choose from the options below.`} />
                  <Link href='/auth/login'>
                    <a className='button primary-app'>Go To Login Page</a>
                  </Link>
                  <Button className='secondary-app' onClick={() => setPageView(PageView.EMAIL)}>
                    Sign Up With A Different Email
                  </Button>
                </div>
              )}

              {pageView === PageView.VERIFY && (
                <div className='verify'>
                  <div className='check'>
                    <Icon name='check-line' />
                  </div>
                  <h4>Sign Up Complete</h4>
                  <p>To log in to your account, please open the verification email sent to <b>{email}</b> and click the link provided.</p>
                  <DelayedButton delay={10} initialDelayed={false} className='secondary-app' onClick={resendConfirmation}>
                    Resend Verification Email
                  </DelayedButton>
                </div>
              )}
            </Card>
          </main>

          <aside>
            <h2>Meaningful insights in minutes</h2>
            <ol>
              <li><span>1</span>Unlock your customer experience data</li>
              <li><span>2</span>Discover opportunities to improve your user journeys</li>
              <li><span>3</span>Find new ways to improve conversion and retention</li>
              <li><span>4</span>Walk in your customers footsteps</li>
            </ol>
            <div className='highlight'>
              <Icon name='check-line' />
              <p>No credit card or technical skills required</p>
            </div>
          </aside>
        </Container>
      </div>

      <div className='footer-link'>
        <p>Already have an account? <Link href='/auth/login'><a>Log in</a></Link></p>
      </div>
    </>
  ); 
};

export default Signup;
