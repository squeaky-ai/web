import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import classnames from 'classnames';
import { debounce, findLast } from 'lodash';
import { Button } from 'components/button';
import { Container } from 'components/container';
import { PageTitle, PageTitleNav } from 'components/page-title';
import { Cta } from 'components/cta';
import { Icon } from 'components/icon';

type Tab = 'privacy' | 'dashboard' | 'visitors' | 'recordings' | 'analytics' | 'feedback' | 'heatmaps' | 'team' | 'ease-of-use';

type Tabs = { name: string; tab: Tab }[];

const tabs: Tabs = [
  {
    name: 'Privacy',
    tab: 'privacy',
  },
  {
    name: 'Dashboard',
    tab: 'dashboard',
  },
  {
    name: 'Visitors',
    tab: 'visitors',
  },
  {
    name: 'Recordings',
    tab: 'recordings',
  },
  {
    name: 'Analytics',
    tab: 'analytics',
  },
  {
    name: 'Feedback',
    tab: 'feedback',
  },
  {
    name: 'Heatmaps',
    tab: 'heatmaps',
  },
  {
    name: 'Team',
    tab: 'team',
  },
  {
    name: 'Ease of use',
    tab: 'ease-of-use',
  },
];

const Features: NextPage = () => {
  const [tab, setTab] = React.useState<Tab>('privacy');

  const handleTabClick = (tab: Tab) => () => {
    setTab(tab);

    const section = document.getElementById(tab);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = debounce(() => {
    const scroll = window.scrollY;

    const match = findLast(tabs, t => {
      const element = document.getElementById(t.tab);
      return element?.offsetTop <= scroll;
    });

    setTab(match?.tab || 'privacy');
  }, 50);

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Squeaky - Features</title> 
      </Head>

      <PageTitle
        title='Features'
        subtitle={<>Picking the right tool is vital, which is why we provide a detailed overview of all our core features.</>}
        nav={
          <PageTitleNav>
            {tabs.map(t => (
              <Button key={t.tab} className={classnames('item', { active: t.tab === tab })} onClick={handleTabClick(t.tab)}>
                {t.name}
              </Button>
            ))}
          </PageTitleNav>
        }
      />

      <section id='privacy'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Privacy</h3>
            <p>At Squeaky, privacy is not just a buzzword, it&apos;s a core feature of our offering. We&apos;re private by default, and offer a full range of options to help you protect your customer&apos;s data.</p>
          </Container>
          <div className='items'>
            <div className='item'>
              <Icon name='ghost-line' />
              <p><b>Anoymous by default</b></p>
              <p>Squeaky maintains your users privacy by avoiding cookie-based tracking, and never storing IP addresses or undertaking digital fingerprinting.</p>
            </div>
            <div className='item'>
              <Icon name='input-cursor-move' />
              <p><b>Form masking</b></p>
              <p>Our script automatically anonymises all data entered in forms and we ensure you never have to transfer customer data from their device.</p>
            </div>
            <div className='item'>
              <Icon name='fullscreen-exit-line' />
              <p><b>Hide anything</b></p>
              <p>Add our privacy tags to elements of your site or web app`&apos;s html to anonymise any elements you like, ensuring that even logged in users can stay anonymous.</p>
            </div>
            <div className='item'>
              <Icon name='database-2-line' />
              <p><b>Self-hosted</b></p>
              <p>For our enterprise customers we can offer on-premise hosting, enabling you to store all Squeaky data directly on your own servers.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id='dashboard'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Dashboard</h3>
            <p>Landing in a data-driven app can be confusing. That`&apos;s why we pull some of the key datapoints onto the first page of our application, helping you get to the information that matters the moment you arrive.</p>
          </Container>
          <div className='items'>
            <div className='item'>
              <Icon name='dashboard-3-line' />
              <p><b>Data at a glance</b></p>
              <p>The moment you land in Squeaky we provide you with a snapshot of you total visitors, recordings and pageviews, highlighting how many new items you have to review.</p>
            </div>
            <div className='item'>
              <Icon name='vidicon-line' />
              <p><b>Latest recording</b></p>
              <p>Jump straight in to your very latest recording right from the homescreen. Once it`&apos;s finished playing you can jump straight to the next recording in your feed.</p>
            </div>
            <div className='item'>
              <Icon name='sticky-note-line' />
              <p><b>Global notes</b></p>
              <p>Take a quick look at the latest notes that have been added to recordings, and quickly jump into any recording with important notes assigned.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id='visitors'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Visitors</h3>
            <p>One of the best ways to make sense of your user data is to view it on a per-visitor basis. Our privacy-first profiles group recordings and analytics data per-visitor, so you can see exactly what their experience has been.</p>
          </Container>
          <div className='items'>
            <div className='item'>
              <Icon name='group-line' />
              <p><b>Visitors overview</b></p>
              <p>View a quick run-down of all your website or web app&apos;s visitors. You can easily filter the data to find the visitors that are most relevant to your current needs.</p>
            </div>
            <div className='item'>
              <Icon name='alarm-warning-line' />
              <p><b>Visitor status</b></p>
              <p>Squeaky automatically hightlights any visitors you&apos;ve never viewed before, helping you to better support and learn from new visitors.</p>
            </div>
            <div className='item'>
              <Icon name='star-line' />
              <p><b>Starring</b></p>
              <p>Keep track of the most interesting or important visitors by starring your favourites. You can access these quickly later on by using the filters provided.</p>
            </div>
            <div className='item'>
              <Icon name='pages-line' />
              <p><b>Detailed anonymity</b></p>
              <p>We capture non-private information, like visitor device, browser and language, along with a host of other important data points that enrich your understanding of your visitors.</p>
            </div>
            <div className='item'>
              <Icon name='link' />
              <p><b>Data linking</b></p>
              <p>For some companies it&apos;s vitally important to be able to link your Squeaky visitors to your existing user database. With our Linked Data feature you can seemlessly make that connection, and still keep their data private if you need.</p>
            </div>
            <div className='item'>
              <Icon name='pie-chart-line' />
              <p><b>Analytics built-in</b></p>
              <p>See your users in a new light, with high-level stats about their site or web app usage, including average session duration, number of pages visited, average pages per session, and more.</p>
            </div>
            <div className='item'>
              <Icon name='layout-column-line' />
              <p><b>Custom columns</b></p>
              <p>Squeaky captures an enormous amount of data, but sometimes you&apos;ll want to cut out the noise and focus on the data points that matter to your business. We made that effortless, with our custom column management.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id='recordings'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Recordings</h3>
            <p>Understanding what your users have been up to has never been easier, thanks to our seemless session recording and playback.</p>
          </Container>
          <div className='items'>
            <div className='item'>
              <Icon name='video-line' />
              <p><b>Recordings overview</b></p>
              <p>View all your website or web app&apos;s visitors in one place. You can easily filter the data to find the recordings that are most relevant to the task at hand.</p>
            </div>
            <div className='item'>
              <Icon name='film-line' />
              <p><b>Perfect playback</b></p>
              <p>Our script captures a perfect copy of your website, exactly as your visitor saw it. That way, when you play back a visitors session you can see exactly what they saw.</p>
            </div>
            <div className='item'>
              <Icon name='sound-module-line' />
              <p><b>Playback controls</b></p>
              <p>Pause, and scrub recordings to quickly navigate the playback, view the recording at faster or slower speeds to go through the sessions at your preferred pace.</p>
            </div>
            <div className='item'>
              <Icon name='zoom-in-line' />
              <p><b>Zoom</b></p>
              <p>Zoom in and out of your session playback to take in the whole picture, or focus on the tiniest details.</p>
            </div>
            <div className='item'>
              <Icon name='information-line' />
              <p><b>Session info</b></p>
              <p>Anonymous session information, such as the user&apos;s device, browser and language, help you understand the context of their visit, use data linking to add additional fields form your own database.</p>
            </div>
            <div className='item'>
              <Icon name='time-line' />
              <p><b>Activity and pages feed</b></p>
              <p>Easily navigate your recording using a timestamped list of the pages visited or the activity feed (e.g. clicks, scrolls, hovers etc).</p>
            </div>
            <div className='item'>
              <Icon name='sticky-note-line' />
              <p><b>Notes and tags</b></p>
              <p>Use notes and tags to document visitor behaviour, site issues, and activity, so you have a clear record of the moments that need addressing later.</p>
            </div>
            <div className='item'>
              <Icon name='user-voice-line' />
              <p><b>Feedback</b></p>
              <p>If you&apos;re using our NPS® or Sentiment survey tools then we&apos;ll pull feedback data directly in the recordings overview and the recording playback.</p>
            </div>
            <div className='item'>
              <Icon name='checkbox-multiple-line' />
              <p><b>Bulk actions</b></p>
              <p>Sometimes you&apos;ll want to quickly update the properties of multiple recordings at once. We&apos;ve made that effortless, by providing bulk actions you can access from the recordings overview</p>
            </div>
            <div className='item'>
              <Icon name='link' />
              <p><b>Data linking</b></p>
              <p>For some companies it&apos;s vitally important to be able to link your Squeaky visitors to your existing user database. With our Linked Data feature you can seemlessly make that connection, and still keep their data private if you need.</p>
            </div>
            <div className='item'>
              <Icon name='layout-column-line' />
              <p><b>Custom columns</b></p>
              <p>Squeaky captures an enormous amount of data, but sometimes you&apos;ll want to cut out the noise and focus on the data points that matter to your business. We made that effortless, with our custom column management.</p>
            </div>
            <div className='item'>
              <Icon name='bookmark-3-line' />
              <p><b>Bookmarking</b></p>
              <p>Keep track of the most interesting or important recordings by bookmarking your favourites. You can access these quickly later on by using the filters provided, or from within the visitor&apos;s individual profile.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id='analytics'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Analytics</h3>
            <p>Our analytics tool turns your data into actionable insights, enabling you to quickly understand the trends and behaviours that matter most to your business.</p>
          </Container>
          <div className='items'>
            <div className='item'>
              <Icon name='line-chart-line' />
              <p><b>Visitor numbers</b></p>
              <p>Knowing what times and days your traffic is peaking provides vital signals that help you measure success and learn when to post content, release changes or start new marketing campaigns.</p>
            </div>
            <div className='item'>
              <Icon name='user-line' />
              <p><b>Page visits</b></p>
              <p>Understanding when your pages are proving most popular will help your discover the content that matters most to your visitors.</p>
            </div>
            <div className='item'>
              <Icon name='calendar-line' />
              <p><b>Filter by date</b></p>
              <p>Viewing your data over the right time period is vital, so Squeakily lets you quickly apply pre-defined date ranges.</p>
            </div>
            <div className='item'>
              <Icon name='timer-line' />
              <p><b>Average session duration</b></p>
              <p>Squeaky highlights how long people are spending on your website or app, helping to provide important insights into how engaging your content is.</p>
            </div>
            <div className='item'>
              <Icon name='pages-line' />
              <p><b>Pages per session</b></p>
              <p>Quickly discover how efffective your site is by seeing whether your visitors are regularly browsing the entirety of your site, or sticking to a narrow selection of pages then leaving.</p>
            </div>
            <div className='item'>
              <Icon name='route-line' />
              <p><b>Traffic sources</b></p>
              <p>Knowing where your visitors are arriving from can help you to better understand your audience and the effectiveness of your marketing campaigns.</p>
            </div>
            <div className='item'>
              <Icon name='map-pin-2-line' />
              <p><b>Location and language</b></p>
              <p>Find out which regions and languages are bring you the most visitors, so you can make sure you content and marketing is targeted at the right people.</p>
            </div>
            <div className='item'>
              <Icon name='thumb-up-line' />
              <p><b>Popular pages</b></p>
              <p>Most visitors are going to visit your homepage, but where do they go next, and for how long? Squeaky surfaces this data to help you rapidly improve your site or app.</p>
            </div>
            <div className='item'>
              <Icon name='device-line' />
              <p><b>Browser and device types</b></p>
              <p>Target your website improvements based on precise knowledge of the technology your customer are using data on browser, device type</p>
            </div>
            <div className='item'>
              <Icon name='arrow-left-right-line' />
              <p><b>Device widths</b></p>
              <p>Quickly discover how efffective your site is by seeing whether your visitors are regularly browsing the entirety of your site, or sticking to a narrow selection of pages then leaving.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id='feedback'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Feedback</h3>
            <p>We offer industry standard feedback surveys to help you enrich your visitor data by pairing it with direct feedback.</p>
          </Container>
          <div className='items'>
            <div className='item'>
              <Icon name='user-voice-line' />
              <p><b>Net Promoter Score®</b></p>
              <p>Squeaky offers built in NPS® survey functionality enabling you to add the widely used market research metric directly on your website or in your web app.</p>
            </div>
            <div className='item'>
              <Icon name='emotion-happy-line' />
              <p><b>Sentiment analysis</b></p>
              <p>Our sentiment survey offers a straightforward and relatable way to let your customers tell you how they&apos;re feeling about using your services. </p>
            </div>
            <div className='item'>
              <Icon name='paint-brush-line' />
              <p><b>Appearance customisation</b></p>
              <p>Style your feedback widgets to match your brand, and choose the layout or positioning that works best for your website or web app.</p>
            </div>
            <div className='item'>
              <Icon name='eye-line' />
              <p><b>Display options</b></p>
              <p>Depending on which type of feedback you&apos;re using, you can choose which pages it&apos;s displayed on and how often, ensuring you only connect with your visitors when the time is right.</p>
            </div>
            <div className='item'>
              <Icon name='line-chart-line' />
              <p><b>Analysis</b></p>
              <p>Use detailed charts and analysis to detect trends in your customer feedback that you can use to determine targeted improvements to their experience.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id='heatmaps'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Heatmaps</h3>
            <p>Use aggregated user interaction data to better understand the performance of your site, what areas of your interface are being interacted with most, and which content matters.</p>
          </Container>
          <div className='items'>
            <div className='item'>
              <Icon name='cursor-line' />
              <p><b>Clickmaps</b></p>
              <p>Squeaky tracks every click on any element of your site or web app. We then aggregate this based on device size so that we can show you which elements are being clicked most and least often.</p>
            </div>
            <div className='item'>
              <Icon name='mouse-line' />
              <p><b>Scrollmaps</b></p>
              <p>Scrollmaps help you understand how far down the page your users are scrolling so that you know whether your most important content is high enough on the page or going to waste.</p>
            </div>
            <div className='item'>
              <Icon name='sun-line' />
              <p><b>Continuous collection</b></p>
              <p>From the moment the Squeaky tracking code is installed, you&apos;re continuously collecting heatmap data for any page that your users have visited. This gives you a wealth of data to analyse at any time you choose</p>
            </div>
            <div className='item'>
              <Icon name='device-line' />
              <p><b>Compare devices</b></p>
              <p>Use our simple toggles to quickly see differences in how your visitors are interacting with your website or web app depending on which device they are visiting on.</p>
            </div>
            <div className='item'>
              <Icon name='database-2-line' />
              <p><b>365 storage</b></p>
              <p>There are no time limits on the data you can access, any recording you&apos;ve captured under your subscription will be available until it is deleted after 365 days. Please contact us if you require data storage beyound the standard 365 limit.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id='team'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Team</h3>
            <p>At Squeaky we believe that every member of the your team should care about the experience of your customers, so we&apos;ve created a flexible team management system to enable anyone and everyone to be involved.</p>
          </Container>
          <div className='items'>
            <div className='item'>
              <Icon name='mail-send-line' />
              <p><b>Unlimited members</b></p>
              <p>Add unlimited team members to your Squeaky site, by simply entering their email address(es) and clicking send.</p>
            </div>
            <div className='item'>
              <Icon name='user-2-line' />
              <p><b>Easily manage roles</b></p>
              <p>Squeaky offers 3 distinct roles: Owner, Admin, and Member, allowing you to provide only the relevant level of access to each team member.</p>
            </div>
            <div className='item'>
              <Icon name='user-settings-line' />
              <p><b>Quickly update members</b></p>
              <p>If you need to change someone&apos;s role, resend an invitation, or remove a team member, we make it effortless and fast. </p>
            </div>
            <div className='item'>
              <Icon name='share-line' />
              <p><b>Sharing</b></p>
              <p>We&apos;ve just the click of a button you can share interesting recordings with anyone else in your Squeaky team.</p>
            </div>
            <div className='item'>
              <Icon name='eye-line' />
              <p><b>Screening</b></p>
              <p>Whilst you&apos;ll want your team in Squeaky with you, you won&apos;t want their visits impacting your data, that why we let you screen out visits from specific email domains/address or IP addresses.</p>
            </div>
            <div className='item'>
              <Icon name='lock-password-line' />
              <p><b>SSO</b></p>
              <p>For enterprise customers we offer Single Sign-On so your teams can have authentication streamlined with the rest of your business.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id='ease-of-use'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Ease of use</h3>
            <p>We&apos;ve paired our incredible array of features with a world class user experience, offering effortless access to insights that can fundamentally change your business.</p>
          </Container>
          <div className='items'>
            <div className='item'>
              <Icon name='magic-line' />
              <p><b>Simple installation</b></p>
              <p>Installating the Squeaky tracking code is effortless, just copy it into the head HTML of any page on your website you wish to track, or use our installation guides for your CMS platform.</p>
            </div>
            <div className='item'>
              <Icon name='emotion-happy-line' />
              <p><b>Fast and intuitive</b></p>
              <p>We&apos;ve made Squeaky insanely fast and created an elegant and deceptively simple interface to ensure you get results quickly.</p>
            </div>
            <div className='item'>
              <Icon name='customer-service-2-line' />
              <p><b>Reliable customer support</b></p>
              <p>We&apos;re available via email, video call, or telephone (Enterprise only), and we always aim to reply within 2 hours during our working day.</p>
            </div>
            <div className='item'>
              <Icon name='terminal-box-line' />
              <p><b>Developer documentation</b></p>
              <p>There&apos;s little-to-no technical expertise required, but if you want to make use of our most advanced privacy functionality we&apos;ve got developer documentation to guide you.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className='insight'>
        <Cta type='cross' title={<h2>Give your business the insights it deserves</h2>} />
      </section>
    </>
  );
};

export default Features;
