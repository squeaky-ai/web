import React from 'react';
import Link from 'next/link';
import { Divider } from 'components/divider';
import { LegalMessage } from 'components/legal-message';
import { PageTitle } from 'components/page-title';
import { LegalNav } from 'components/legal-nav';
import { LegalContainer } from 'components/legal-container';
import { ServerSideProps, getServerSideProps } from 'lib/auth';
import type { SqueakyPage } from 'types/page';

const LegalGdpr: SqueakyPage<ServerSideProps> = () => (
  <>
    <PageTitle
      title='Legal &amp; Compliance'
      subtitle=''
      nav={<LegalNav page='gdpr' />}
    />

    <LegalContainer>
      <h2>GDPR</h2>
      <p className='last-updated'>Last Updated: <b>January 13th 2021</b></p>

      <LegalMessage>
        <p>The following document is intended to provide you with information on how Squeaky supports GDPR compliance in relation to how you, as our customer, can control your website or web app&apos;s visitor data, of which we are a considered a data processor.</p>
        <p>To learn how we comply with GDPR with regards to Squeaky&apos;s own visitor and customer data, please see our privacy policy.</p>
      </LegalMessage>

      <h3>Can I use Squeaky?</h3>
      
      <h4>Is using Squeaky GDPR compliant?</h4>
      <p>Yes, and as the data controller of your website or web app&apos;s visitor data you can feel confident that whilst using Squeaky you can easily fulfill your obligations under GDPR.</p>

      <h4>Can I still use Squeaky if I have customers in the EU?</h4>
      <p>Of course! The main purpose and spirit of the GDPR is to grant data subjects <a href='https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/' target='_blank' rel='noreferrer'>specific rights</a> to their personal data. Understanding these rights and how to comply with them as a Data Controller is paramount to your ability to comply with GDPR.</p>
      <p>Squeaky will be acting as a Data Processor for your customer&apos;s data and will provide ways to comply with all of your data subject &apos;s rights under the <a href='https://www.whitecase.com/publications/article/chapter-11-obligations-processors-unlocking-eu-general-data-protection' target='_blank' rel='noreferrer'>obligations of a data processor</a>. You will need to decide which data you are recording that may be considered personal, take steps to exclude the data that you do not want Squeaky to process, and understand how you will use consent or other lawful basis when Squeaky will be processing personal data.</p>
      <p>We have some amazing tools within our application that help you to avoid catching any personal data from your customer&apos;s.</p>

      <h4>If I&apos;m in a country outside of the EU, do I need to be concerned about GDPR?</h4>
      <p>Yes, because the GDPR is concerned with the rights of individuals, and it is hard to be sure that you will never process the data of an EU citizen due to the prevalence of international travel, remote work, etc. At Squeaky, we&apos;re strong advocates of treating all customer&apos;s data as private and sacred, regardless of where they are located, and we encourage you to do so too.</p>

      <h4>Where is my data stored? Should I be concerned about the data of my customers in the EU being stored outside of the EU?</h4>
      <p>Squeaky production data is both processed and stored within AWS data centers located in the Republic of Ireland, ensuring GDPR compliance. AWS provide independent documentation on their GDPR compliance, available <a href='https://d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf' target='_blank' rel='noreferrer'>here</a>.</p>

      <h3>Explaining GDPR and Squeaky to your visitors or customers</h3>

      <h4>Do you have any resources we can include in our consent flows or Privacy Policy?</h4>
      <p>Yes, you can include the following text in your Privacy Policy when you mention which tools you are using to collect and analyse visitor data:</p>

      <div className='consent-card'>
        <p><b>Squeaky</b></p>
        <p>We want to process as little personal information as possible when you use our website or service, that&apos;s why we&apos;ve chosen Squeaky for our web analytics. Squeaky doesn&apos;t use cookies and complies fully with the GDPR, and CCPA data privacy regulations - ensuring all usage is tracked anonymously unless otherwise defined or requested. Whilst using this privacy-friendly website analytics software, your IP address is briefly processed for screening purposes and never stored. As per the CCPA, your personal information is not identifiable without your express consent. You can read more about this on Squeaky&apos;s website.</p>
        <p>The purpose of us using this software is to understand our website traffic in the most privacy-friendly way possible so that we can continually improve our website and business. The lawful basis as per the GDPR is &quot;f); where our legitimate interests are to improve our website and business continually.&quot; As per the explanation, no personal data is stored over time.</p>
        <p>To learn more about Squeaky, you can visit <a href='https://squeaky.ai/legal/gdpr' target='_blank' rel='noreferrer'>https://squeaky.ai/legal/gdpr</a>.</p>
      </div>

      <h4>Additional information</h4>
      <p>Depending on your business, you may also wish to include the following information in your Terms of Service or Privacy Policy when mentioning your use of Squeaky:</p>

      <div className='consent-card'>
        <p><b>Address</b>: Squeaky B.V., Debussystraat 43, 2324KH Leiden, The Netherlands</p>
        <p><b>Usage data</b>: locale, device width and height, browser width and height, referrer, useragent, timezone, session start and end time, click coordinates, clicked elements, scroll position, mouse position, page views, user feedback (if submitted).</p>
        <p><b>Data storage</b>: AWS eu-west-1 region (The Repblic of Ireland).</p>
      </div>

      <h4>Does Squeaky use any first, or third-party cookies?</h4>
      <p>Although this is not GDPR specific, you can rest assured that Squeaky does not use any cookie-based tracking when helping our customer&apos;s analyse visitors/visits to their website or web app.</p>

      <h3>Complying with Data Subjects Rights with Squeaky</h3>

      <h4>Do I need to obtain consent before I do any session recording at all with Squeaky?</h4>
      <p>Not necessarily. The GDPR is primarily concerned with personal data and defining the rights that an EU citizen has to their own data. Visits tracked by Squeaky are largely anonymous and may not include personal data, so recording a session without consent can be okay. </p>
      <p>That said, it is possible to capture personal or sensitive data passively e.g. when personal data is inputed or displayed on your website or application. Squeaky anonymises all form fields by default, and we provide tools (described below) to enable you to anonymise absolutely everything on your website or app. If you feel you may be collecting personal data it is your responsibility to ensure GDPR compliance is adhered to and we recommend that you audit your own site and ensure all appropriate form fields or elements are excluded before you start recording (or that you&apos;re recording only after you have consent).</p>

      <h4>How do I make sure personal data isn&apos;t being captured by Squeaky? </h4>
      <p>There are two types of personal data you can send to Squeaky:</p>
      <ol type='a'>
        <li className='tight'>You can actively send linked data from your database e.g. name, email address etc to Squeaky using our data linking service.</li>
        <li>You can passively send personal information that your users input (unlikely, as we anonymise form fields by default) or that might get displayed on pages of your website or app that Squeaky captures simply because we are recording the page.</li>
      </ol>
      <p>In the case of passively captured information, you have full control over which fields or elements are excluded and it is important that you exclude the personal data that you do not want Squeaky to capture. We provide documentation on how to do this in the privacy section of your site&apos;s settings in Squeaky, as well as in our <Link href='/developers'><a>developer documentation</a></Link>.</p>
    
      <h4>Can I delete Squeaky data for specific customers when they ask to be forgotten?</h4>
      <p>Yes, you can easily delete individual users with the click of a button in your Squeaky visitors table.</p>

      <h4>Is it possible to bulk delete visitors or sessions from Squeaky?</h4>
      <p>Yes, Squeaky offers bulk actions or deletion of both visitors (and their respective recordings) and for recordings individually. You can even apply filters to find specific segments of your users and bulk delete just that group.</p>

      <h4>When I delete my account, is my data deleted right away?</h4>
      <p>Squeaky will automatically erase all your data the moment you delete your site.</p>
      <p>If you wish for some for of time-limited data retention beyond the point of deleting your account, please contact us via <a href='mailto:hello@squeaky.ai'>hello@squeaky.ai</a>.</p>

      <h4>What can I provide an EU citizen if they request a copy of data being processed by Squeaky?</h4>
      <p>EU citizens may request a copy of their personal data. Depending on what information you&apos;ve chosen to send Squeaky for processing, you may or may not have any data in Squeaky that is considered &quot;personal.&quot;</p>
      <p>Either way, if you&apos;d like to provide an artifact of all personal data to your customer, you can download a .JSON file of all the raw events we have recorded for any visitor by clicking on the button on their visitor profile.</p>

      <Divider />

      <p><b>Disclaimer</b>: we&apos;re here to help, but we can&apos;t give you legal advice. The information on this page is only intended to summarize the main points of the GDPR and inform you, our customers, about how Squeaky can be used in a compliant manner. We recommend that you work with a trusted legal partner to fully understand your obligations under the GDPR.</p>
    </LegalContainer>
  </>
);

LegalGdpr.getMetaData = () => ({
  title: 'Squeaky | GDPR',
  description: 'Thanks to Squeaky, you can stop worrying about whether you can use customer analytics tools and remain GDPR compliant. Read our GDPR page to learn more.',
  index: true,
});

export default LegalGdpr;
export { getServerSideProps };
