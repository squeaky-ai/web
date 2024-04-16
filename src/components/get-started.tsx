import React from 'react';
import type { FC } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { Input } from 'components/input';
import { Button } from 'components/button';

const GetStartedSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email address').required('Email is required'),
});

export const GetStarted: FC = () => {
  const router = useRouter();

  return (
    <div className='get-started-form'>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={GetStartedSchema}
        onSubmit={(_values, { setSubmitting }) => {
          (async () => {
            setSubmitting(false);
            await router.push(`/blog/company-news/a-very-important-announcement-from-squeaky/`);
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
        }) => {
          const invalid = values.email.length && touched.email && !!errors.email;

          return (
            <form onSubmit={handleSubmit}>
              <div className='sign-up'>
                <Input
                  type='email'
                  name='email'
                  autoComplete='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  placeholder='Email address ...'
                  invalid={invalid}
                />
                <Button className='primary' type='submit' disabled={isSubmitting || invalid}>
                  Get Started
                </Button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
