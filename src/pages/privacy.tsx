import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { NextPage } from 'next';
import { Card } from 'components/card';
import { Container } from 'components/container';
import { Illustration } from 'components/illustration';
import { Icon } from 'components/icon';
import { Button } from 'components/button';
import { Screen } from 'components/screen';
import { Cta } from 'components/cta';
import { SideBySide } from 'components/side-by-side';
import { PageTitleNav } from 'components/page-title';
import { ThreeTextGrid, ThreeTextGridItem } from 'components/three-text-grid';
import { debounce } from 'lib/utils';
import type { SqueakyPage } from 'types/page';

type Tab = 'tracking-and-data-capture' | 'consent' | 'legal' | 'customer-support';

type Tabs = { name: string; tab: Tab }[];

const tabs: Tabs = [
  {
    name: 'Tracking & Data Capture',
    tab: 'tracking-and-data-capture',
  },
  {
    name: 'Consent',
    tab: 'consent',
  },
  {
    name: 'Legal & Compliance',
    tab: 'legal',
  },
  {
    name: 'Customer Support',
    tab: 'customer-support',
  },
];

const Privacy: SqueakyPage<NextPage> = () => {
  const [tab, setTab] = React.useState<Tab>('tracking-and-data-capture');

  const handleTabClick = (tab: Tab) => () => {
    setTab(tab);

    const section = document.getElementById(tab);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = debounce(() => {
    const scroll = window.scrollY;

    const match = [...tabs].reverse().find(t => {
      const element = document.getElementById(t.tab);
      return element?.offsetTop <= scroll;
    });

    setTab(match?.tab || 'tracking-and-data-capture');
  }, 50);

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <>
      <section className='hero'>
        <Container className='centered md'>
          <h1>Putting people and privacy first</h1>
          <div className='illustration'>
            <Illustration illustration='illustration-19' width={540} height={357} />
          </div>
          <p>We <Link href='#'>founded Squeaky</Link> to provide <b>the first truly comprehensive, privacy-friendly product and web analytics suite</b>. However, at the heart of that mission lies a contradiction, as great <b>product analytics tools inherently capture a lot data</b>. So, how exactly does Squeaky provide an incredible turnkey analytics tool, whilst also protecting end users from arbitrary or invasive data capture?</p>
          <p>There are <b>three pillars of privacy-first product development</b> that form the foundation of our product, and inform every decision we make:</p>
        </Container>
        <Container className='centered lg steps'>
          <Card>
            <span className='number'>1</span>
            <h4>The highest privacy protections by default</h4>
            <p>From the moment a customer starts using Squeaky, our privacy controls are set to provide the highest possible level of protection for their users.</p>
            <p>The default settings can be fine-tuned to meet the exact privacy standards expected by their users and required of their business.</p>
          </Card>
          <Card>
            <span className='number'>2</span>
            <h4>Choice and control for everyone</h4>
            <p>Squeaky includes an array of tools that ensure businesses only capture the data that they need, and that their customers consent to provide.</p>
            <p>Both our customers, and their users, can easily understand the data being collected, and remove it at will.</p>
          </Card>
          <Card>
            <span className='number'>3</span>
            <h4>100% of the value with 100% of the privacy</h4>
            <p>Conventional analytics companies compromise user privacy to deliver value to their customers.</p>
            <p>We&apos;re taking a new approach, creating an entire suite of analytics tools that uses the <i>least sensitive</i> data to power the <i>most important</i> features for our customers.</p>
          </Card>
        </Container>
        <Container className='centered md'>
          <p>These guiding principles have led us to take a new and innovative approach to how we build our product, leading to an <b>amazingly broad array of privacy features and functionality throughout our application</b>.</p>
          <a href='#tracking-and-data-capture' className='skip'>
            <Icon name='arrow-down-line' />
          </a>
          <h2>Privacy protection in practice</h2>
        </Container>
      </section>
      <PageTitleNav>
        {tabs.map(t => (
          <Button key={t.tab} className={classnames('item', { active: t.tab === tab })} onClick={handleTabClick(t.tab)}>
            {t.name}
          </Button>
        ))}
      </PageTitleNav>
      <section className='tracking' id='tracking-and-data-capture'>
        <Container className='centered lg'>
          <h3>Tracking & Data Capture</h3>
          <SideBySide
            title='No cookies or IP-based tracking'
            image={<Screen screen='privacy-4' height={374} width={512} />}
            body={<p>Unlike conventional analytics tools we never use cookies, third party or first party, to track your visitors. Likewise, we don&apos;t store your visitors&apos; IP addresses, or undertake digital fingerprinting of any kind.</p>}
            flip
          />
          <SideBySide
            title='Text and form anonymisation'
            image={<Screen screen='privacy-5' height={400} width={500} />}
            body={
              <>
                <p>Our tracking code anonymise all text across your site by default - your visitors will still see it, but our tracking code won&apos;t capture it.</p>
                <p>Depending on the needs of your business, you can easily turn this off, or choose to anonymise only the information your visitors enter in forms.</p>
              </>
            }
          />
          <SideBySide
            title='No-code data suppression'
            image={<Screen screen='privacy-6' height={339} width={540} />}
            body={
              <>
                <p>Squeaky&apos;s Magic Erasure is a code-free solutions that helps you to prevent data being captured for any specific element on your site, with just one click.</p>
                <p>This is a privacy feature unique to Squeaky, if you&apos;d like to learn more please <Link href='/blog/privacy/a-magic-erasure-that-protects-your-visitors-privacy'>click here</Link>.</p>
              </>
            }
            flip
          />
          <SideBySide
            title='Full control via privacy classes for your HTML'
            image={<Screen screen='privacy-7' height={389} width={512} />}
            body={
              <>
                <p>If you&apos;re looking for maximum control over the data capture of any element on your site, you can make use of Squeaky&apos;s privacy tags for your HTML.</p>
                <p>Visit our <Link href='/developers'>developer documentation</Link> to learn more.</p>
              </>
            }
          />
        </Container>
      </section>
      <section className='consent' id='consent'>
        <Container className='centered lg'>
          <h3>Consent</h3>
          <SideBySide
            title='The Squeaky consent widget'
            image={<Screen screen='privacy-8' height={400} width={512} />}
            body={<p>If your businesses needs visitor consent prior to capturing data you can make use of Squeaky&apos;s built-in consent widget and we&apos;ll never capture any data until your visitor has consented.</p>}
            flip
          />
          <SideBySide
            title='Consent management via API'
            image={<Screen screen='privacy-9' height={394} width={509} />}
            body={
              <>
                <p>Some business will only need to request user consent at very specific points in their customer journey. For granular control you can manage consent and tracking code activation using our API.</p>
                <p>See our <Link href='/developers'>developer documentation</Link> to learn more.</p>
              </>
            }
          />
          <div className='message'>
            <div>
              <h4>Already using a tool to manage consent or third party scripts?</h4>
              <p>All existing third-party consent tools, or a tag management solutions like Google Tag Manager, can be used to manage the display and activation of Squeaky&apos;s tracking code.</p>
            </div>
            <div className='image'>
              <Illustration illustration='illustration-20' height={270} width={181} />
            </div>
          </div>
        </Container>
      </section>
      <section className='legal' id='legal'>
        <Container className='centered lg'>
          <h3>Legal &amp; Compliance</h3>
          <ThreeTextGrid>
            <ThreeTextGridItem
              title='Maintain your GDPR & CCPA compliance'
              body={
                <>
                  <p>Squeaky offers a fully compliant, GDPR & CCPA ready, solution out of the box. If you&apos;d like to learn more we&apos;ve answered all your questions on the pages below:</p>
                  <ul>
                    <li><Link href='/legal/gdpr'>General Data Protection Regulation</Link></li>
                    <li><Link href='/legal/ccpa'>California Consumer Privacy Act</Link></li>
                  </ul>
                </>
              }
            />
            <ThreeTextGridItem
              title='Sign our Data Processing Agreement (DPA)'
              body={
                <>
                  <p>If Squeaky will be processing personal data on your behalf we can <b>provide you with a copy of our Data Processing Agreement</b> that you can review and sign.</p>
                  <p>The DPA outlines how we perform data processing on your behalf, what our obligations are, as well as the obligations of our users/customers.</p>
                </>
              }
            />
            <ThreeTextGridItem
              title='Access straightforward Terms and Privacy policies'
              body={
                <>
                  <p>Our legal documents are written with humans in mind, no complex legal jargon, just the information you need to to make an informed decision about which tool is right for your business.</p>
                  <ul>
                    <li><Link href='/legal/privacy-policy'>Privacy Policy</Link></li>
                    <li><Link href='/legal/terms-of-service'>Terms of Use</Link></li>
                  </ul>
                </>
              }
            />
          </ThreeTextGrid>
        </Container>
      </section>
      <section className='customer-support' id='customer-support'>
        <Container className='centered lg'>
          <h3>Customer Support Access</h3>
          <SideBySide
            title='You decide when we can access your account'
            image={<Illustration illustration='illustration-21' height={336} width={512} />}
            body={<p>By default, our team have no access to the analytics interface for your site. If you&apos;d like help troubleshooting and issue you can optionally choose to provide access to our customer support team with one click.</p>}
            flip
          />
        </Container>
      </section>
      <section className='get-started'>
        <Cta 
          type='cross-white'
          title={<h3>Book a demo to see Squeaky&apos;s privacy-first analytics in action</h3>}
          buttonLink='/book-demo'
          buttonText='Book Demo'
        />
      </section>
    </>
  );
};

Privacy.getMetaData = () => ({
  title: 'Squeaky | Privacy',
  description: 'Find out how Squeaky offers the most privacy-friendly, turnkey product analytics suite on the market.',
  index: true,
  image: 'https://squeaky.ai/meta/privacy.jpg',
});

export default Privacy;
