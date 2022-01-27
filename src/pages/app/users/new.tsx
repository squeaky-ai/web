import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { Icon } from 'components/icon';
import { Container } from 'components/container';
import { Illustration } from 'components/illustration';
import { Label } from 'components/label';
import { Input } from 'components/input';
import { Button } from 'components/button';
import { Main } from 'components/main';
import { signout } from 'lib/api/auth';
import { ServerSideProps, getServerSideProps } from 'lib/auth';
import { updateUser } from 'lib/api/graphql';
import { useToasts } from 'hooks/use-toasts';

const NewSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
});

const UsersNew: NextPage<ServerSideProps> = ({ user }) => {
  const router = useRouter();
  const toast = useToasts();

  const handleSignOut = async () => {
    await signout();
    location.href = '/';
  };

  return (
    <>
      <Head>
        <title>Squeaky | User - New</title>
      </Head>

      <Main>
        <h3 className='title'>
          Account Settings
          <Button className='button signout link' onClick={handleSignOut}>
            <Icon name='logout-box-line' />
            Log out
          </Button>
        </h3>

        <Container className='xsm'>
          <div className='intro'>
            <p>Please enter your name below to set up your user account...</p>
            <div className='image'>
              <Illustration illustration='illustration-11' height={140} width={185} alt='New Account Image' />
            </div>
          </div>

          <Formik
            initialValues={{ email: user.email, firstName: '', lastName: '' }}
            validationSchema={NewSchema}
            onSubmit={(values, { setSubmitting }) => {
              (async () => {
                await updateUser(values);
                setSubmitting(false);
                toast.add({ type: 'success', body: 'Settings saved successfully' });
                await router.push('/app/sites');
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
            }) => (
              <form onSubmit={handleSubmit}>
                <Label htmlFor='firstName'>First name</Label>
                <Input
                  name='firstName' 
                  type='text' 
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='e.g. Jess'
                  autoComplete='given-name'
                  value={values.firstName}
                  invalid={touched.firstName && !!errors.firstName}
                />
                <span className='validation'>{errors.firstName}</span>

                <Label htmlFor='lastName'>Last name</Label>
                <Input
                  name='lastName' 
                  type='text' 
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='e.g. Smith'
                  autoComplete='family-name'
                  value={values.lastName}
                  invalid={touched.lastName && !!errors.lastName}
                />
                <span className='validation'>{errors.lastName}</span>

                <Button  type='submit' disabled={isSubmitting} className='primary-app'>
                  Save Changes
                </Button>
              </form>
            )}
          </Formik>
        </Container>
      </Main>
    </>
  );
};

export default UsersNew;
export { getServerSideProps };
