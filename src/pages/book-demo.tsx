import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { PageTitle } from 'components/page-title';
import { ContactForm } from 'components/contact-form';
import { Input } from 'components/input';
import { Label } from 'components/label';
import { TextArea } from 'components/textarea';
import { Button } from 'components/button';
import { Icon } from 'components/icon';
import { Select, Option } from 'components/select';
import { bookDemoForm } from 'lib/api/graphql';
import { ServerSideProps, getServerSideProps } from 'lib/auth';

const BookDemoSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Please enter a valid email address').required('Email is required'),
  telephone: Yup.string().required('Company phone is required'),
  companyName: Yup.string().required('Company name is required'),
  traffic: Yup.string().oneOf(['500', '5000', '25000', '50000', '100000', '250000'], 'Please select monthly traffic'),
  message: Yup.string().required('Reason for demo is required'),
});

const BookDemo: NextPage<ServerSideProps> = () => {
  const [submitted, setSubmitted] = React.useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Squeaky | Book Demo</title> 
      </Head>

      <PageTitle
        title='Let&apos;s talk'
        subtitle={<>Wondering how Squeaky&apos;s all-in-one customer experience analytics platform can help your business succeed? Book a product demo below and we&apos;ll tell you everything.</>}
      />

      <ContactForm
        submitted={submitted}
        submittedTitle='Message sent'
        submittedMessage='Our team will review your request and get in touch to schedule your demo.'
        aside={
          <>
            <h3>Demo request form</h3>
            <p>Demos last approximately 30 minutes, and here&apos;s what we&apos;ll cover:</p>
            <p>
              <ul>
                <li><Icon name='check-line' />How customer experience analytics can help your business.</li>
                <li><Icon name='check-line' />All of Squeaky&apos;s most important features.</li>
                <li><Icon name='check-line' />Your business goals, so we can provide a quote tailored to needs.</li>
              </ul>
            </p>
          </>
        }
        form={
          <Formik
            initialValues={{ firstName: '', lastName: '', email: '', telephone: '', companyName: '', traffic: '500', message: '' }}
            validationSchema={BookDemoSchema}
            enableReinitialize
            onSubmit={(values, { setSubmitting }) => {
              (async () => {
                await bookDemoForm(values);

                setSubmitting(false);
                setSubmitted(true);
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
              <form className='form-contact' onSubmit={handleSubmit}>
                <div className='input-group'>
                  <fieldset>
                    <Label htmlFor='firstName'>First name*</Label>
                    <Input 
                      type='text' 
                      name='firstName' 
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      invalid={touched.firstName && !!errors.firstName}
                    />
                    <span className='validation'>{errors.firstName}</span>
                  </fieldset>
                  <fieldset>
                    <Label htmlFor='lastName'>Last name*</Label>
                    <Input 
                      type='text' 
                      name='lastName' 
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      invalid={touched.lastName && !!errors.lastName}
                    />
                    <span className='validation'>{errors.lastName}</span>
                  </fieldset>
                </div>

                <Label htmlFor='email'>Company Email*</Label>
                <Input 
                  type='email' 
                  name='email' 
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='e.g. jess@squeaky.ai' 
                  autoComplete='email'
                  value={values.email}
                  invalid={touched.email && !!errors.email}
                />
                <span className='validation'>{errors.email}</span>

                <Label htmlFor='telephone'>Phone number*</Label>
                <Input 
                  type='text' 
                  name='telephone' 
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.telephone}
                  invalid={touched.telephone && !!errors.telephone}
                />
                <span className='validation'>{errors.telephone}</span>

                <Label htmlFor='companyName'>Company name*</Label>
                <Input 
                  type='text' 
                  name='companyName' 
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.companyName}
                  invalid={touched.companyName && !!errors.companyName}
                />
                <span className='validation'>{errors.companyName}</span>

                <Label htmlFor='traffic'>Monthly traffic <i>(to your website or app)</i></Label>
                <Select name='traffic' onChange={handleChange} invalid={touched.traffic && !!errors.traffic}>
                  <Option value='500'>0 - 5,000 visits</Option>
                  <Option value='5000'>5,000 - 25,000 visits</Option>
                  <Option value='25000'>25,000 - 50,000 visits</Option>
                  <Option value='50000'>50,000 - 100,000 visits</Option>
                  <Option value='100000'>100,000 - 250,000 visits</Option>
                  <Option value='250000'>250,000+ visits</Option>
                </Select>
                <span className='validation'>{errors.traffic}</span>

                <Label htmlFor='message'>Message*</Label>
                <TextArea 
                  name='message' 
                  placeholder='Tell us everything ...' 
                  rows={8} 
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.message}
                  invalid={touched.message && !!errors.message}
                />
                <span className='validation'>{errors.message}</span>

                <Button type='submit' className='primary' disabled={isSubmitting}>
                  Submit Demo Request
                </Button>
              </form>
            )}
          </Formik>
        }
      />
    </>
  );
};

export default BookDemo;
export { getServerSideProps };
