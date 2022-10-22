import React from 'react';
import Link from 'next/link';
import * as Yup from 'yup';
import { NextPage } from 'next';
import { Formik } from 'formik';
import { Container } from 'components/container';
import { Accordion } from 'components/accordion';
import { ProgramsHeader } from 'components/programs-header';
import { ProgramsSteps } from 'components/programs-steps';
import { Input } from 'components/input';
import { Label } from 'components/label';
import { TextArea } from 'components/textarea';
import { Carousel, CarouselItem } from 'components/carousel';
import { Screenshot } from 'components/screenshots';
import { Cta } from 'components/cta';
import { Illustration } from 'components/illustration';
import { ContactForm } from 'components/contact-form';
import { Button } from 'components/button';
import { ThreeTextGrid, ThreeTextGridItem } from 'components/three-text-grid';
import { useToasts } from 'hooks/use-toasts';
import { contactPartnersForm } from 'lib/api/graphql';
import type { SqueakyPage } from 'types/page';

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Please enter a valid email address').required('Email is required'),
  name: Yup.string().required('Company name is required'),
  description: Yup.string(),
  clientCount: Yup.string(),
});

const ProgramsPartners: SqueakyPage<NextPage> = () => {
  const toasts = useToasts();
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  
  return (
    <>
      <ProgramsHeader
        title='Partner with Squeaky'
        subtitle='PROGRAMS'
        body={<>Join the Squeaky Partner Program to <b>accelerate your business growth</b>. Each time you introduce a client to Squeaky you&apos;ll <b>earn 20% of any recurring revenue from the referral</b>, for the duration of their contract.</>}
        actions={
          <>
            <Link href='#become-a-partner'>
              <a className='button primary'>
                Become A Partner
              </a>
            </Link>
          </>
        }
        image='partner'
      />

      <section className='get-rewarded'>
        <ProgramsSteps
          title='Get rewarded for the customers you introduce to Squeaky'
          subtitle='In just a few steps you&apos;ll be helping clients to improve their customer experience, while growing recurring revenue for your business too.'
          stepItem1Title='Have your clients start using Squeaky'
          stepItem1Subtitle='Become a partner and you&apos;ll receive a dedicated partner referral link to share with clients.'
          stepItem2Title='See your income grow when referrals convert'
          stepItem2Subtitle='Once your clients starts paying for Squeaky you&apos;ll earn 20% commission for each payment they make.'
          stepItem3Title='Cash out your earnings every month'
          stepItem3Subtitle='Every month, for the duration of the customer contract, you&apos;ll be able to claim your commission.'
        />
      </section>

      <section className='faq'>
        <Container className='centered md-lg'>
          <h2>Frequently asked questions</h2>
          <Accordion
            title='How much could you earn?'
            body={
              <>
                <p>Earnings are dependent on the pricing plans that your clients are on, but here are some examples if you were to have several clients on a paid-monthly premium plan:</p>
                <ul>
                  <li>Refer 10 clients and earn up to €11,880 per year</li>
                  <li>Refer 50 clients and earn up to €59,000 per year</li>
                  <li>Refer 75 clients and earn up to €89,100 per year</li>
                </ul>
              </>
            }
          />
          <Accordion
            title='Who can sign up?'
            body={
              <>
                <p>The Squeaky Partner Program is open to any legally registered businesses that wishes to refer their clients to Squeaky and help them improve their customer experience. Ideally, you have an existing group of clients or an audience who need a solution like Squeaky.</p>
                <p>We reserve the right to reject applications from business that we don&apos;t feel are suitable partners to Squeaky.</p>
              </>
            }
          />
          <Accordion
            title='How long will you earn referral fees for?'
            body={
              <>
                <p>You&apos;ll continue to earn referral fees for the duration of the customers subscription to Squeaky. Even if they are no longer a direct client of yours, you will continue to earn referral fees based on their subscription as long as your legally registered business is still in operation.</p>
              </>
            }
          />
          <Accordion
            title='How do I track my referrals and get paid?'
            body={
              <>
                <p>When one of your clients is going to sign up for a paid Squeaky plan then you should provide them with a copy of your unique referral code and have them email us the code. We&apos;ll provide you with a dashboard to track your clients subscriptions and instructions for when and how to invoice Squeaky for your referral fees.</p>
              </>
            }
          />
        </Container>
      </section>

      <section className='help'>
        <Container className='lg centered'>
          <Container className='md tagline'>
            <h2>Squeaky will help your clients win new business, and create incredible experiences for their customers.</h2>
            <p>Squeaky&apos;s future-proof analytics suite puts data at the heart of how companies understand and improve their customer experience.</p>
          </Container>

          <Carousel>
            <CarouselItem>
              <Screenshot screen='analytics-1' width={1440} height={1024} alt='Screenshot of the Squeaky analytics page' />
            </CarouselItem>
            <CarouselItem>
              <Screenshot screen='session-1' width={1440} height={1024} alt='Screenshot of the Squeaky session page' />
            </CarouselItem>
            <CarouselItem>
              <Screenshot screen='recordings-1' width={1440} height={1024} alt='Screenshot of the Squeaky recordings page' />
            </CarouselItem>
            <CarouselItem>
              <Screenshot screen='nps-1' width={1440} height={1024} alt='Screenshot of the Squeaky NPS page' />
            </CarouselItem>
            <CarouselItem shadowless>
              <Screenshot screen='heatmaps-1' width={1440} height={1024} alt='Screenshot of the Squeaky heatmaps page' />
            </CarouselItem>
          </Carousel>

          <h3>Included in every plan</h3>
          <ThreeTextGrid>
            <ThreeTextGridItem
              icon='line-chart-line'
              title='Analytics'
              body='Turn your data into actionable insights to improve your user experience and convert leads faster than ever.'
              link='/product/analytics'
            />
            <ThreeTextGridItem
              icon='vidicon-line'
              title='Recordings'
              body='It&apos;s never been easier to understand your users, thanks to our seamless session recording and playback.'
              link='/product/recordings'
            />
            <ThreeTextGridItem
              icon='flashlight-line'
              title='Event Tracking'
              body='Monitor every element of your customer experience by tracking any action taking place on your site.'
              link='/product/event-tracking'
            />
            <ThreeTextGridItem
              icon='fire-line'
              title='Heatmaps'
              body='Discover which content matters most to your visitors, and where your business could be performing better.'
              link='/product/heatmaps'
            />
            <ThreeTextGridItem
              icon='user-voice-line'
              title='Feedback'
              body='Learn from your customers by including NPS® and Sentiment surveys anywhere in your website or app.'
              link='/product/feedback'
            />
            <ThreeTextGridItem
              icon='route-line'
              title='Journeys'
              body='Find out where your customers are going or where they came from by mapping their journey through your site.'
              link='/product/journeys'
            />
          </ThreeTextGrid>
        </Container>
      </section>

      <section className='contact' id='become-a-partner'>
        <ContactForm 
          submitted={submitted}
          submittedTitle='Message sent'
          submittedMessage='One of our team will get back to you as soon as possible.'
          aside={
            <>
              <h3>Become a partner</h3>
              <p>If you&apos;d like to apply to become a Squeaky partner then please complete the form opposite and someone from our partnership program will get back to you.</p>
              <div className='egg'>
                <Illustration illustration='illustration-16' height={262} width={230} />
              </div>
            </>
          }
          form={
            <>
              <Formik
                initialValues={{ firstName: '', lastName: '', email: '', name: '', description: '', clientCount: '' }}
                validationSchema={ContactSchema}
                enableReinitialize
                onSubmit={(values, { setSubmitting }) => {
                  (async () => {
                    try {
                      await contactPartnersForm(values);
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

                    <Label htmlFor='name'>Company name*</Label>
                    <Input 
                      type='text' 
                      name='name' 
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      invalid={touched.name && !!errors.name}
                    />
                    <span className='validation'>{errors.name}</span>

                    <Label htmlFor='description'>Tell us about your company</Label>
                    <p>What industry are you in? What services does your company provide?</p>
                    <TextArea 
                      name='description' 
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.description}
                      rows={3}
                    />

                    <Label htmlFor='clientCount'>How many clients do you currently have ready to onboard to Squeaky?</Label>
                    <Input 
                      type='text' 
                      name='clientCount' 
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.clientCount}
                    />

                    <Button className='primary' type='submit' disabled={isSubmitting}>
                      Submit
                    </Button>
                  </form>
                )}
              </Formik>
            </>
          }
        />
      </section>

      <section className='get-in-touch'>
        <Cta 
          type='squiggle' 
          title={<h3>Get in touch if you&apos;d like to learn more about the Partner Programme before applying</h3>} 
          buttonText='Contact Us'
          buttonLink='/contact-us'
        />
      </section>
    </>
  );
};

ProgramsPartners.getMetaData = () => ({
  title: 'Squeaky | Partner with Squeaky',
  description: 'Join the Squeaky Partner Program to accelerate your business growth by earning a 20% share of the recurring revenue from any client you refer.',
  index: true,
});

export default ProgramsPartners;
