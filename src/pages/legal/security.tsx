import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import { PageTitle } from 'components/page-title';
import { LegalNav } from 'components/legal-nav';
import { LegalMessage } from 'components/legal-message';
import { LegalContainer } from 'components/legal-container';
import type { SqueakyPage } from 'types/page';

import isoLogo from '../../../public/compliance/iso.webp';
import pciDssLogo from '../../../public/compliance/pci-dss.webp';
import socLogo from '../../../public/compliance/soc.webp';

const LegalSecurity: SqueakyPage<NextPage> = () => (
  <>
    <PageTitle
      title='Legal &amp; Compliance'
      subtitle=''
      nav={<LegalNav page='security' />}
    />

    <LegalContainer>
      <h2>Security</h2>
      <p className='last-updated'>Last Updated: <b>January 13th 2021</b></p>

      <h4>Infrastructure and security</h4>
      <p>Internal access to any Squeaky application requires a VPN with 2-factor authentication.</p>
      <p>Squeaky&apos;s infrastructure is provisioned with Terraform, and changes undergo a thorough review process.</p>

      <h4>Data encryption</h4>
      <p>All data ingested into Squeaky is encrypted in transit. All data stored in our databases is encrypted at rest.</p>

      <h4>Failover and disaster recovery</h4>
      <p>Squeaky was designed with redundancy in mind. Where possible, our services run in multiple availability zones in the eu-west-1 AWS region.</p>
      <p>Our databases are automatically backed up and encrypted.</p>

      <h4>Identity and Access Control</h4>
      <p>Passwords are stored in a hashed format, no member of Squeaky is able to read or decrypt customer passwords.</p>
      <p>VPN access requiring 2-factor authentication and elevated privileges is required to access any of Squeaky&apos;s applications.</p>
      <p>By default, nobody at Squeaky can access customer data. A small number of DevOps engineers can access the data for debugging and operational purposes if absolutely required.</p>

      <h4>Monitoring and Logging</h4>
      <p>Squeaky&apos;s performance is automatically monitored 24/7. System logs are stored internally within AWS and require 2-factor authentication.</p>
      <p>All customer&apos;s Personally Identifiable Information is omitted from the logs.</p>

      <h4>Partner Compliance</h4>
      <p>We rely on several third-party resources to deliver our services and we endeavour to ensure we are working with highly compliant and regulated partners.</p>

      <div className='compliance'>
        <div>
          <div className='logo'>
            <Image src={pciDssLogo} alt='PCI DSS Logo' unoptimized priority />
          </div>
          <p>Payments in Squeaky are PCI-compliant as we use Stripe&apos;s hosted payment fields that use a PCI DSS validated server</p>
        </div>
        <div>
          <div className='logo'>
            <Image src={isoLogo} alt='ISO Logo' unoptimized priority />
          </div>
          <p>Our infrastructure is hosted on AWS, which is an ISO27001 certified service.</p>
        </div>
        <div>
          <div className='logo'>
            <Image src={socLogo} alt='SOC Logo' unoptimized priority />
          </div>
          <p>Our infrastructure is hosted on AWS, which is an SOC2 certified service.</p>
        </div>
      </div>

      <LegalMessage>
        <p>If you think you may have found a security vulnerability within Squeaky, please get in touch via <a href='mailto:hello@squeaky.ai'>hello@squeaky.ai</a> as soon as possible.</p>
      </LegalMessage>
    </LegalContainer>
  </>
);

LegalSecurity.getMetaData = () => ({
  title: 'Squeaky | Security',
  description: 'The security of your data, and the data we process on your behalf, are of paramount importance. Read our security page to understand our practices and policies.',
  index: true,
});

export default LegalSecurity;
