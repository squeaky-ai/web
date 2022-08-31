import React from 'react';
import Link from 'next/link';
import * as Yup from 'yup';
import { NextPage } from 'next';
import { Formik } from 'formik';
import { PageTitle } from 'components/page-title';
import { ContactForm } from 'components/contact-form';
import { Input } from 'components/input';
import { Label } from 'components/label';
import { TextArea } from 'components/textarea';
import { Button } from 'components/button';
import { contactForm } from 'lib/api/graphql';
import { useToasts } from 'hooks/use-toasts';
import type { SqueakyPage } from 'types/page';

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Please enter a valid email address').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const ContactUs: SqueakyPage<NextPage> = () => {
  const toasts = useToasts();
  const [submitted, setSubmitted] = React.useState<boolean>(false);

  return (
    <>
      <PageTitle
        title='How can we help?'
        subtitle={<>For general enquiries or support please use the form below, to book a demo, <Link href='/book-demo'><a>click here</a></Link>.</>}
      />

      <ContactForm
        submitted={submitted}
        submittedTitle='Message sent'
        submittedMessage='One of our team will get back to you as soon as possible.'
        aside={
          <>
            <h3>Contact us</h3>
            <p>For all enquiries please contact our team using the form provided, or via the email address <a href='mailto:hello@squeaky.ai'>hello@squeaky.ai</a>.</p>
            <p>
              <b>Office</b><br />
              Squeaky B.V.<br />
              Debussystraat 43<br />
              2324 KH, Leiden<br />
              Zuid Holland<br />
              Nederland
            </p>
          </>
        }
        form={
          <Formik
            initialValues={{ firstName: '', lastName: '', email: '', subject: '', message: '' }}
            validationSchema={ContactSchema}
            enableReinitialize
            onSubmit={(values, { setSubmitting }) => {
              (async () => {
                try {
                  await contactForm(values);
                  setSubmitted(true);
                } catch(error) {
                  console.error(error);
                  toasts.add({ type: 'error', body: 'There was an error sending the contact form' });
                } finally {
                  setSubmitting(false);
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

              <Label htmlFor='email'>Email address*</Label>
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
              
              <Label htmlFor='subject'>Subject*</Label>
              <Input 
                type='text' 
                name='subject' 
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.subject}
                invalid={touched.subject && !!errors.subject}
              />
              <span className='validation'>{errors.subject}</span>

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

              <Button type='submit' className='primary' disabled={isSubmitting} >
                Submit
              </Button>
            </form>
            )}
          </Formik>
        }
      />
    </>
  );
};

ContactUs.getMetaData = () => ({
  title: 'Squeaky | Contact Us',
  description: 'Find out which Squeaky subscription is right for your business. We have a wide range of pricing plans, including free and enterprise options.',
  index: true,
});

export default ContactUs;
