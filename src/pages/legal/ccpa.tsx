import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { PageTitle } from 'components/page-title';
import { LegalNav } from 'components/legal-nav';
import { LegalMessage } from 'components/legal-message';
import { LegalContainer } from 'components/legal-container';
import { Divider } from 'components/divider';
import { ServerSideProps, getServerSideProps } from 'lib/auth';

const Ccpa: NextPage<ServerSideProps> = () => (
  <>
    <Head>
      <title>Squeaky | CCPA</title> 
    </Head>

    <PageTitle
      title='Legal &amp; Compliance'
      subtitle=''
      nav={<LegalNav page='ccpa' />}
    />

    <LegalContainer>
      <h2>CCPA</h2>
      <p className='last-updated'>Last Updated: <b>January 13th 2021</b></p>

      <LegalMessage>
        <p>The following document is intended to provide you with information on how the workings of CCPA with regards to your own customers or visitors.</p>
        <p>To learn how we comply with CCPA with regards to Squeaky&apos;s own visitor and customer data, please see our privacy policy.</p>
      </LegalMessage>

      <h4>What is the CCPA?</h4>
      <p>The California Consumer Privacy Act, also referred to as CCPA, is a privacy-centric bill aimed at protecting the privacy of California consumers that became effective on January the 1st, 2020.</p>

      <h4>Do I need to comply with CCPA?</h4> 
      <p>Many people mistakenly believe that the CCPA doesn&apos;t apply to them e.g. because they are not based in Californiao, but this is not always true - so please make sure you&apos;re clear if CCPA applies to you.</p>
      <p>You will need to comply with the CCPA if you do business in California and meet any of the following requirements:</p>
      <ul>
        <li className='tight'>Have $25 million or more in annual revenue</li>
        <li className='tight'>Buy, receive, or sell the personal information of 50,000 or more California residents, households, or devices</li>
        <li>Earn more than half of your annual revenue selling California residents&apos; personal data</li>
      </ul>
      <p>Keep in mind that the CCPA might apply to you even though you&apos;re not based in California or intentionally target California residents, as long as you have at least 50,000 Californians using your service.</p>

      <h4>How does the CCPA affect Squeaky?</h4>
      <p>If you are a Squeaky customer, under the CCPA you&apos;re considered the &apos;business&apos; and Squeaky is the &apos;service provider&apos;. As such, we as Squeaky are responsible for processing the data our service captures on your website or web app and is stored on our servers. As noted in our Privacy Policy, we will never sell personal data to third parties.</p>

      <h4>As a Squeaky customer, do I meet the basic requirements of the CCPA?</h4>
      <p>The CCPA is a large piece of legislation and covers many topics that have no direct impact or tie with your use of Squeaky. However, there are areas of the CCPA where your customers might have rights that relate to your use of Squeaky. We&apos;ve included a brief explanation of their rights and how Squeaky can be used in a manner that supports you in servicing them below.</p>
      <p><b>1. Privacy notice</b></p>
      <p>Under the CCPA, businesses must update privacy notices to specifically state what data is collected, categorize the data collected, explain the purpose for the data&apos;s use, identify third parties with which that data is shared, and communicate the rights available to an individual.</p>
      <p>We recommend that you perform a full review of your company&apos;s terms of service and privacy policy to ensure you meet the CCPA&apos;s requirements and, if necessary, disclose the use of Squeaky. </p>
      <p>You can include the following text in your Privacy Policy when you mention which tools you are using to collect and analyse visitor data:</p>

      <div className='consent-card'>
        <p><b>Squeaky</b></p>
        <p>We want to process as little personal information as possible when you use our website or service, that&apos;s why we&apos;ve chosen Squeaky for our web analytics. Squeaky doesn&apos;t use cookies and complies fully with the GDPR, and CCPA data privacy regulations - ensuring all usage is tracked anonymously unless otherwise defined or requested. Whilst using this privacy-friendly website analytics software, your IP address is briefly processed for screening purposes and never stored. As per the CCPA, your personal information is no identifiable without your express consent. You can read more about this on Squeaky website.</p>
        <p>The purpose of us using this software is to understand our website traffic in the most privacy-friendly way possible so that we can continually improve our website and business. The lawful basis as per the GDPR is &quot;f); where our legitimate interests are to improve our website and business continually.&quot; As per the explanation, no personal data is stored over time.</p>
        <p><b>Address</b>: Squeaky B.V., Debussystraat 43, 2324KH Leiden, The Netherlands</p>
        <p><b>Usage data</b>: locale, device width and height, browser width and height, referrer, useragent, timezone, session start and end time, click coordinates, clicked elements, scroll position, mouse position, page views, user feedback (if submitted).</p>
        <p><b>Data storage</b>: AWS eu-west-1 region (The Repblic of Ireland).</p>
        <p>To learn more about Squeaky, you can visit <a href='https://squeaky.ai/legal/gdpr' target='_blank' rel='noreferrer'>https://squeaky.ai/legal/gdpr</a>.</p>
      </div>

      <p><b>2. Personal information requests (right of access and deletion)</b></p>
      <p>Under the CCPA, California consumers may have the right to request and receive a list of personal information and additional details a business collects (or has collected), as well as the intended business use for collecting this data.</p>
      <p>The consumer may al so be able to request that any specific personal information be deleted. With the exception of specific types of data (e.g. billing or other regulatory required information), these deletion requests must be fulfilled by you, the business.</p>
      <p>You can easily delete individual users with the click of a button in your Squeaky visitors table. If you&apos;d like to provide an artifact of all personal data to your customer, you can download a .JSON file of all the raw events we have recorded for any visitor by clicking on the button on their visitor profile.</p>

      <p><b>3. IP addresses</b></p>
      <p>Under CCPA, an IP address may be considered personal data if it can identify a household. Squeaky does not store your customer&apos;s IP addresses, however you could technically pass the IP address of a customer to Squeaky from your own database using our Linked Data feature. If you decide to do this you must determine whether you feel this consistutes personal data, and inform your customers if it is being processed by Squeaky in such a manner.</p>

      <Divider />

      <p><b>Disclaimer</b>: we&apos;re here to help, but we can&apos;t give you legal advice. The information on this page is only intended to summarize the main points of the CCPA and inform you, our customers, about how Squeaky can be used in a compliant manner. We recommend that you work with a trusted legal partner to fully understand your obligations under the CCPA.</p>
    </LegalContainer>
  </>
);

export default Ccpa;
export { getServerSideProps };
