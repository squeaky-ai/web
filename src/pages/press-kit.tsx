import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import { PageTitle } from 'components/page-title';
import { PressKitNav } from 'components/press-kit-nav';
import { Container } from 'components/container';
import { Icon } from 'components/icon';
import type { SqueakyPage } from 'types/page';

import logoDark from '../../public/press-kit/logo-dark.png';
import logoLight from '../../public/press-kit/logo-light.png';

const PressKit: SqueakyPage<NextPage> = () => (
  <>    
    <PageTitle
      title='Press kit'
      subtitle={
        <>Squeaky offers an powerful, privacy-first alternative to legacy analytics tools like Google Analytics and Hotjar. You can learn more about our vision and mission on the <Link href='/about-us'>About Us</Link> page, and if you&apos;re writing or talking about Squeaky then feel free to make use of the assets and guidelines outlined below.</>
      }
      nav={<PressKitNav />}
    />
    <Container className='md centered press-kit-container'>
      <h3 id='name'>Our name</h3>
      <p className='name'><b>Our company is called Squeaky</b> /&apos;skwi:ki/</p>
      <p>We prefer to simply referred to by the single-word Squeaky, but occasionally we are referred to as Squeaky Analytics, and that&apos;s fine too.</p>
      <p>So, why are we called Squeaky? Well, when we first decided we wanted to create a more private, and less-invasive analytics tool, we liked the idea of being &apos;as quiet as a mouse&apos;, having the smallest possible footprint on our customers sites, but likewise allowing users to browse websites and web apps in privacy/secrecy. But we all know mice do make a bit of noise, it&apos;s just a little squeak - hence Squeaky. We also liked that a &apos;mouse&apos; is the tool you use to navigate a website, which is why our logo contains a cursor that is styled as a cheese (AKA &apos;The Big Cheese&apos;).</p>

      <h3 id='logo'>The Squeaky logo</h3>
      <p>We prefer that you use our full logo, including both the typography and the logo mark, AKA &apos;The Big Cheese&apos;. For instances where the Squeaky brand is being represented in a square tile e.g. a comparison website profile tile, you may use the square logo mark that is just The Big Cheese.</p>
      <div className='collections'>
        <div className='collection'>
          <div className='image logo-light'>
            <Image src={logoDark} alt='Squeaky dark logo' unoptimized priority />
          </div>
          <div className='details'>
            <p><Icon name='download-cloud-2-line' /> <a href='https://cdn.squeaky.ai/press-kit/dark-logo.zip' download>Squeaky Logo</a> <span>(Dark)</span></p>
            <p className='formats'>Logo in .svg, .png, and .jpeg format.</p>
          </div>
        </div>
        <div className='collection'>
          <div className='image logo-dark'>
            <Image src={logoLight} alt='Squeaky light logo' unoptimized priority />
          </div>
          <div className='details'>
            <p><Icon name='download-cloud-2-line' /> <a href='https://cdn.squeaky.ai/press-kit/light-logo.zip' download>Squeaky Logo</a> <span>(Light)</span></p>
            <p className='formats'>Logo in .svg, .png, and .jpeg format.</p>
          </div>
        </div>
      </div>

      <h3 id='colors'>Brand colours</h3>
      <p>To distinguish Squeaky from the endless sea of blue-coloured SaaS brands, we&apos;ve chosen quite an unusual colour palette - a mixture of earth tones and primary colours.</p>
      <h4>Earth tones</h4>
      <div className='colors'>
        <div className='color gray-blue-800'>
          <div className='swatch' />
          <div className='details'>
            <p>Grey Blue 800</p>
            <p><b>#001A39</b></p>
          </div>
        </div>
        <div className='color mauve-800'>
          <div className='swatch' />
          <div className='details'>
            <p>Mauve 800</p>
            <p><b>#572638</b></p>
          </div>
        </div>
        <div className='color peach-500'>
          <div className='swatch' />
          <div className='details'>
            <p>Peach 500</p>
            <p><b>#FFA574</b></p>
          </div>
        </div>
        <div className='color gray-blue-700'>
          <div className='swatch' />
          <div className='details'>
            <p>Grey Blue 700</p>
            <p><b>#032349</b></p>
          </div>
        </div>
        <div className='color mauve-700'>
          <div className='swatch' />
          <div className='details'>
            <p>Mauve 700</p>
            <p><b>#742A40</b></p>
          </div>
        </div>
        <div className='color peach-400'>
          <div className='swatch' />
          <div className='details'>
            <p>Peach 400</p>
            <p><b>#FDC4A</b></p>
          </div>
        </div>
      </div>
      <h4>Primary colours</h4>
      <div className='colors'>
        <div className='color rose-500'>
          <div className='swatch' />
          <div className='details'>
            <p>Rose 500</p>
            <p><b>#F96155</b></p>
          </div>
        </div>
        <div className='color yellow-500'>
          <div className='swatch' />
          <div className='details'>
            <p>Yellow 500</p>
            <p><b>#FBC73B</b></p>
          </div>
        </div>
        <div className='color blue-500'>
          <div className='swatch' />
          <div className='details'>
            <p>Blue 500</p>
            <p><b>#005EB6</b></p>
          </div>
        </div>
      </div>

      <h3 id='screenshots'>Product screenshots</h3>
      <p>If you&apos;d like device mock-ups or screenshots of the Squeaky application, you can download one of the following bundles:</p>
      <div className='collections'>
        <div className='collection'>
          <div className='image device' />
          <div className='details'>
            <p><Icon name='download-cloud-2-line' /> <a href='https://cdn.squeaky.ai/press-kit/device-mockups.zip' download>Device Mockups</a></p>
            <p className='formats'>.jpeg format.</p>
          </div>
        </div>
        <div className='collection'>
          <div className='image screenshots' />
          <div className='details'>
            <p><Icon name='download-cloud-2-line' /> <a href='https://cdn.squeaky.ai/press-kit/app-screenshots.zip' download>App Screenshots</a></p>
            <p className='formats'>.png and .jpeg format.</p>
          </div>
        </div>
      </div>

      <h3 id='contact'>Contact details</h3>
      <p>For any press or media enquiries, please get in touch via <a href='mailto:press@squeaky.ai'>press@squeaky.ai</a>.</p>
    </Container>
  </>
);

PressKit.getMetaData = () => ({
  title: 'Squeaky | Press Kit',
  description: 'The Squeaky press kit page contains brand assets and guidelines that you can use when writing or talking about Squeaky in third party publications or platforms.',
  index: true,
});

export default PressKit;
