import React from 'react';
import Link from 'next/link';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Tag } from 'components/tag';
import { Container } from 'components/container';
import { Accordion } from 'components/accordion';
import { ProgramsHeader } from 'components/programs-header';
import { Carousel, CarouselItem } from 'components/carousel';
import { ProgramsSteps } from 'components/programs-steps';
import { Button } from 'components/button';
import { Select, Option } from 'components/select';
import { Input } from 'components/input';
import { Label } from 'components/label';
import { Screenshot } from 'components/screenshots';
import { Cta } from 'components/cta';
import { Illustration } from 'components/illustration';
import { ContactForm } from 'components/contact-form';
import { FourIconGrid, FourItemGridItem } from 'components/four-icon-grid';
import { ServerSideProps, getServerSideProps } from 'lib/auth';
import { useToasts } from 'hooks/use-toasts';
import { contactStartupsForm } from 'lib/api/graphql';
import type { SqueakyPage } from 'types/page';

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Please enter a valid email address').required('Email is required'),
  name: Yup.string().required('Company name is required'),
  yearsActive: Yup.string(),
  trafficCount: Yup.string(),
});

const ProgramsStartups: SqueakyPage<ServerSideProps> = () => {
  const toasts = useToasts();
  const [submitted, setSubmitted] = React.useState<boolean>(false);

  return (
    <>
      <ProgramsHeader
        title='Squeaky for startups'
        subtitle={<Tag>50% OFF</Tag>}
        body={<>At Squeaky we know how it feels to be <b>a new startup that&apos;s locked out of great tools</b> because of prohibitively expensive pricing, that&apos;s why we created a <b>discount program just for new businesses</b>!</>}
        actions={
          <>
            <Link href='#apply-now'>
              <a className='button primary'>
                Apply Now
              </a>
            </Link>
            <Link href='#learn-more'>
              <a className='button secondary'>
                Learn More
              </a>
            </Link>
          </>
        }
        image='startup'
      />

      <section className='help' id='learn-more'>
        <Container className='lg centered'>
          <Container className='md tagline'>
            <h2>Squeaky helps startups to create market leading customer experiences.</h2>
            <p>Other companies will overcharge you and still leave you wanting more. By choosing Squeaky&apos;s comprehensive analytics suite you&apos;ve got customer experience analytics fully covered.</p>
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
            <CarouselItem>
              <Screenshot screen='heatmaps-1' width={1440} height={1024} alt='Screenshot of the Squeaky heatmaps page' />
            </CarouselItem>
          </Carousel>

          <h3>Included in every plan</h3>
          <FourIconGrid>
            <FourItemGridItem
              icon='vidicon-line'
              title='Recordings'
              body='It&apos;s never been easier to understand your users, thanks to our seamless session recording and playback.'
            />
            <FourItemGridItem
              icon='line-chart-line'
              title='Analytics'
              body='Turn your data into actionable insights to improve your user experience and convert leads faster than ever.'
            />
            <FourItemGridItem
              icon='user-voice-line'
              title='Feedback'
              body='Learn from your customers by including NPS® and Sentiment surveys anywhere in your website or app.'
            />
            <FourItemGridItem
              icon='fire-line'
              title='Heatmaps'
              body='Discover which content matters most to your visitors, and where your business could be performing better.'
            />
          </FourIconGrid>
        </Container>
      </section>

      <section className='how-it-works'>
        <ProgramsSteps
          title='How Squeaky for startups works'
          subtitle='To join our startup programme you just have to have been active for less than 2 years and follow the steps below:'
          stepItem1Title='Sign up and install your tracking code'
          stepItem1Subtitle='It takes just a couple of minutes to sign up and set up your tracking code.'
          stepItem2Title='Apply to access our startup program'
          stepItem2Subtitle='Apply by filling out the form at the bottom of this page, we&apos;ll get back to you within 2 days.'
          stepItem3Title='Get 50% off any self-service plan for 2 years'
          stepItem3Subtitle='Pay monthly or annually for whichever plan best suits you and your team.'
        />
      </section>

      <section className='faq'>
        <Container className='centered md-lg'>
          <h2>Frequently asked questions</h2>
          <Accordion
            title='Who is eligible?'
            body={
              <>
                <p>Any business that has been active for less than 2 years can access our startup program.</p>
                <p>We perform basic due diligence upon receiving your application, and you will have the opportunity to raise a dispute if we reject your application.</p>
                <p>We reserve the right to reject applications for any reason we see fit, most often this will be if we feel your operating model risks conflicting with our <Link href='/legal/terms-of-service'><a>Terms of Service</a></Link>.</p>
              </>
            }
          />
          <Accordion
            title='How much could I save?'
            body={
              <>
                <p>Potential savings depend upon the pricing plan that you have chosen. Below are few examples</p>
                <ul>
                  <li>If you were paying annually for our <b>Plus</b> self-service plan then over 2 years you would have paid €58 per month instead of €145, <span className='rose'>saving €1392</span>.</li>
                  <li>If you were paying annually for our <b>Premium</b> self-service plan then over 2 years you would have paid €198 per month instead of €492, <span className='rose'>saving €4752</span></li>
                </ul>
              </>
            }
          />
          <Accordion
            title='What happens when my discount period ends?'
            body={
              <>
                <p>When your discount period ends your next bill (that corresponds with your preferred billing cycle) will no longer include your 50% discount. As with all customers, you will be able to cancel at any time and receive a pro rata refund for any months you didn&apos;t use.</p>
              </>
            }
          />
          <Accordion
            title='Does it include all features?'
            body={
              <>
                <p>Yes, all plans include access to all Squeaky features.</p>
              </>
            }
          />
        </Container>
      </section>

      <section className='contact' id='apply-now'>
        <ContactForm 
          submitted={submitted}
          submittedTitle='Message sent'
          submittedMessage='One of our team will get back to you as soon as possible.'
          aside={
            <>
              <h3>Apply to our startup program for 50% off</h3>
              <p>If you&apos;d like to apply to Squeaky&apos;s startup program then please complete the form opposite and someone from our team will get back to you with 2 days.</p>
              <div className='egg'>
                <Illustration illustration='illustration-16' height={262} width={230} />
              </div>
            </>
          }
          form={
            <>
              <Formik
                initialValues={{ firstName: '', lastName: '', email: '', name: '', yearsActive: '', trafficCount: '1,000 - 10,000 visits' }}
                validationSchema={ContactSchema}
                enableReinitialize
                onSubmit={(values, { setSubmitting }) => {
                  (async () => {
                    try {
                      await contactStartupsForm(values);
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

                    <Label htmlFor='yearsActive'>How many years have you been active?</Label>
                    <Input 
                      type='text'
                      name='yearsActive' 
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.yearsActive}
                    />

                    <Label htmlFor='trafficCount'>Monthly traffic <i>(to your website or app)</i></Label>
                    <p>What industry are you in? What services does your company provide?</p>
                    <Select name='trafficCount' onBlur={handleBlur} onChange={handleChange} value={values.trafficCount}>
                      <Option value='1,000 - 10,000 visits'>1,000 - 10,000 visits</Option>
                      <Option value='10,000 - 50,000 visits'>10,000 - 50,000 visits</Option>
                      <Option value='50,000 - 100,000 visits'>50,000 - 100,000 visits</Option>
                      <Option value='100,000 - 200,000 visits'>100,000 - 200,000 visits</Option>
                      <Option value='200,000 - 250,000 visits'>200,000 - 250,000 visits</Option>
                      <Option value='250,000+ visits'>250,000+ visits</Option>
                    </Select>

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
          title={<h3>Get in touch if you&apos;d like to learn more about the Startup Programme before applying</h3>} 
          buttonText='Contact Us'
          buttonLink='/contact-us'
        />
      </section>
    </>
  );
};

ProgramsStartups.getMetaData = () => ({
  title: 'Squeaky | Squeaky for startups',
  description: 'At Squeaky we know how it feels to be a new startup that\'s locked out of great tools because of prohibitively expensive pricing, that\'s why we created a discount program just for new businesses!',
  index: true,
});

export default ProgramsStartups;
export { getServerSideProps };

