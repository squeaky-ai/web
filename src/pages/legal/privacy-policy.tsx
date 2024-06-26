import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { PageTitle } from 'components/page-title';
import { LegalNav } from 'components/legal-nav';
import { LegalContainer } from 'components/legal-container';
import type { SqueakyPage } from 'types/page';

const LegalPrivacyPolicy: SqueakyPage<NextPage> = () => (
  <>
    <PageTitle
      title='Legal &amp; Compliance'
      subtitle=''
      nav={<LegalNav page='privacy-policy' />}
    />

    <LegalContainer>
      <h2>Privacy Policy</h2>
      <p className='last-updated'>Last Updated: <b>January 13th 2021</b></p>

      <h4>1. Introduction</h4>
      <p>Squeaky B.V. (“<b>us</b>”, “<b>we</b>”, or “<b>our</b>”) operates <Link href='/'>https://squeaky.ai</Link> (hereinafter referred to as “Service”).</p>
      <p>Our Privacy Policy governs your visit to our website and web app available on <Link href='/'>https://squeaky.ai</Link>, and explains how we collect, safeguard and disclose information that results from your use of our Service.</p>
      <p>We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our <Link href='/legal/terms-of-service'>Terms or Service</Link>.</p>
      <p>Our Terms and Conditions (“<b>Terms</b>”) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (“<b>agreement</b>”).</p>

      <h4>2. Definitions</h4>
      <p><b>SERVICE</b> means the website and web app operated by Squeaky B.V. on <Link href='/'>https://squeaky.ai</Link>.</p>
      <p><b>PERSONAL DATA</b> means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</p>
      <p><b>USAGE DATA</b> is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).</p>
      <p><b>COOKIES</b> are small files stored on your device (computer or mobile device).</p>
      <p><b>DATA CONTROLLER</b> means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.</p>
      <p><b>DATA PROCESSORS (OR SERVICE PROVIDERS)</b> means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.</p>
      <p><b>DATA SUBJECT</b> is any living individual who is the subject of Personal Data.</p>
      <p><b>THE USER</b> is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.</p>

      <h4>3. Information Collection and Uses</h4>
      <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

      <h4>4. Types of Data Collected</h4>
      <p><b>Personal Data</b></p>
      <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to:</p>
      <ol type='a'>
        <li className='tight'>Email address</li>
        <li>First name and last name</li>
      </ol>
      <p>If you have a user account then we may use your Personal Data to contact you with onboarding emails, newsletters, marketing or other promotional materials and information. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by visit your user account preferences (we&apos;ve made it extremely easy!)</p>
      <p><b>Usage Data</b></p>
      <p>We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through a mobile device (&quot;<b>Usage Data</b>&quot;).</p>
      <p>This Usage Data may include information such as locale, device width and height, browser width and height, referrer, useragent, timezone, session start and end time, click coordinates, clicked elements, scroll position, mouse position, page views, user feedback (if submitted), and other diagnostic data.</p>
      <p>When you access Service with a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.</p>
      <p><b>Tracking Cookies Data</b></p>
      <p>We never use cookies when helping you to track your own visitors, but we do use one simple, anonymous cookie on our Squeaky web app, and this it to allow us to validate your user session i.e. so we know whether you are logged in or not.</p>
      <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>

      <h4>5. Use of Data</h4>
      <p>Squeaky B.V. uses the collected data for various purposes:</p>
      <ol type='a'>
        <li>to provide and maintain our Service;</li>
        <li>to notify you about changes to our Service; </li>
        <li>to allow you to participate in interactive features of our Service when you choose to do so; </li>
        <li>to provide customer support; </li>
        <li>to gather analysis or valuable information so that we can improve our Service; </li>
        <li>to monitor the usage of our Service;</li>
        <li>to detect, prevent and address technical issues;</li>
        <li>to fulfill any other purpose for which you provide it;</li>
        <li>to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;</li>
        <li>to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.;</li>
        <li>to provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;</li>
        <li>in any other way we may describe when you provide the information;</li>
        <li>for any other purpose with your consent.</li>
      </ol>

      <h4>6. Retention of Data</h4>
      <p>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
      <p>We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.</p>

      <h4>7. Transfer of Data</h4>
      <p>Your information, including Personal Data, may be transferred to - and maintained on - computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
      <p>We currently store all data in the Republic of Ireland, but please note that if you are located outside United States and choose to provide information to us, in the future we may transfer the data, including Personal Data, to United States and process it there.</p>
      <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
      <p>Squeaky B.V. will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.</p>


      <h4>8. Disclosure of Data</h4>
      <p>We may disclose personal information that we collect, or you provide:</p>
      <p><b>(a) Disclosure for Law Enforcement.</b></p>
      <p>Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities.</p>
      <p><b>(b) Business Transaction.</b></p>
      <p>If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be transferred.</p>
      <p><b>(c) Other cases. We may disclose your information also:</b></p>
      <p>(i) to fulfill the purpose for which you provide it;</p>
      <p>(ii) for the purpose of including your company&apos;s logo on our website;</p>
      <p>(iii) for any other purpose disclosed by us when you provide the information;</p>
      <p>(iv) with your consent in any other cases;</p>
      <p>(v) if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others.</p>

      <h4>9. Security of Data</h4>
      <p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

      <h4>10. Your Data Protection Rights Under General Data Protection Regulation (GDPR)</h4>
      <p>If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR. - See more at <a href='https://eur-lex.europa.eu/eli/reg/2016/679/oj' rel='noreferrer' target='_blank'>https://eur-lex.europa.eu/eli/reg/2016/679/oj</a></p>
      <p>We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
      <p>If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at <a href='mailto:hello@squeaky.ai'>hello@squeaky.ai</a>.</p>
      <p>In certain circumstances, you have the following data protection rights:</p>
      <ol type='a'>
        <li>the right to access, update or to delete the information we have on you;</li>
        <li>the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;</li>
        <li>the right to object. You have the right to object to our processing of your Personal Data;</li>
        <li>the right of restriction. You have the right to request that we restrict the processing of your personal information;</li>
        <li>the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;</li>
        <li>the right to withdraw consent. You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;</li>
      </ol>
      <p>Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data.</p>
      <p>You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).</p>

      <h4>11. Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)</h4>
      <p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law&apos;s reach stretches well beyond California to require a person or company in the United States (and conceivable the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy. - See more at: <a href='https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/' target='_blank' rel='noreferrer'>https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/</a>.</p>
      <p>According to CalOPPA we agree to the following:</p>
      <ol type='a'>
        <li>users can visit our site anonymously;</li>
        <li>our Privacy Policy link includes the word “Privacy”, and can easily be found on the page specified above on the home page of our website;</li>
        <li>users will be notified of any privacy policy changes on our Privacy Policy Page;</li>
        <li>users are able to change their personal information by emailing us at <a href='mailto:hello@squeaky.ai'>hello@squeaky.ai</a>.</li>
      </ol>
      <p>Our Policy on “Do Not Track” Signals:</p>
      <p>We honor Do Not Track signals. Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked. </p>
      <p>You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p>

      <h4>12. Service Providers</h4>
      <p>We may employ third party companies and individuals to facilitate our Service (“Service Providers”), provide Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.</p>
      <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

      <h4>13. Payments</h4>
      <p>We may provide paid products and/or services within Service. In that case, we use third-party services for payment processing (e.g. payment processors).</p>
      <p>We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.</p>
      <p>The payment processor we work with is:</p>
      <p><b>Stripe</b></p>
      <p>Their Privacy Policy can be viewed at: <a href='https://stripe.com/us/privacy' target='_blank' rel='noreferrer'>https://stripe.com/us/privacy</a></p>

      <h4>15. Links to Other Sites</h4>
      <p>Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
      <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

      <h4>16. Children&apos;s Privacy</h4>
      <p>Our Services are not intended for use by children under the age of 13 (“<b>Children</b>”).</p>
      <p>We do not knowingly collect personally identifiable information from Children under 13. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.</p>

      <h4>17. Changes to This Privacy Policy</h4>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update “effective date” at the top of this Privacy Policy.</p>
      <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

      <h4>18. Contact Us</h4>
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <p><b>By email</b>: <a href='mailto:hello@squeaky.ai'>hello@squeaky.ai</a>.</p>
      <p>
        <b>By post</b>:<br />
        Squeaky B.V.<br />
        Debussystraat 43<br />
        2324KH Leiden<br />
        The Netherlands
      </p>
    </LegalContainer>
  </>
);

LegalPrivacyPolicy.getMetaData = () => ({
  title: 'Squeaky | Privacy Policy',
  description: 'Read our privacy policy to see how we collect, safeguard, and disclose information that results from your use of our customer insights software.',
  index: true,
});

export default LegalPrivacyPolicy;
