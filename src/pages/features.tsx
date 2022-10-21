import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { NextPage } from 'next';
import { Button } from 'components/button';
import { Container } from 'components/container';
import { PageTitle, PageTitleNav } from 'components/page-title';
import { FeaturesGrid, FeaturesGridItem } from 'components/features-grid';
import { Cta } from 'components/cta';
import { debounce } from 'lib/utils';
import type { SqueakyPage } from 'types/page';

type Tab = 'privacy' | 'dashboard' | 'visitors' | 'analytics' |  'recordings' | 'events' | 'feedback' | 'events' | 'heatmaps' | 'journeys' | 'team' | 'ease-of-use';

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
    name: 'Analytics',
    tab: 'analytics',
  },
  {
    name: 'Recordings',
    tab: 'recordings',
  },
  {
    name: 'Event Tracking',
    tab: 'events',
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
    name: 'Journeys',
    tab: 'journeys',
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

const Features: SqueakyPage<NextPage> = () => {
  const [tab, setTab] = React.useState<Tab>('privacy');

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
            <p>At Squeaky, privacy is not just a buzzword, it&apos;s a core feature of our offering. We&apos;re private by default, and offer a full range of options to help you protect your customers&apos; data.</p>
          </Container>
          <FeaturesGrid>
            <FeaturesGridItem
              icon='ghost-line'
              title='Anonymous by default'
              body='Squeaky maintains your visitors&apos; privacy by avoiding cookie-based tracking, and never storing IP addresses or undertaking digital fingerprinting.'
            />
            <FeaturesGridItem
              icon='input-cursor-move'
              title='Form masking'
              body='Our script automatically anonymises all data entered in forms and we ensure you never have to transfer customer data from their device.'
            />
            <FeaturesGridItem
              icon='fullscreen-exit-line'
              title='Hide anything'
              body='Add our privacy tags to elements of your site or web app&apos;s html to anonymise any elements you like, ensuring that even logged in users can stay anonymous.'
            />
            <FeaturesGridItem
              icon='eraser-line'
              title='Magic Erasure™'
              body={<span>Quickly prevent data being captured for any element on your site, without having to write a single line of code. <Link href='/blog/privacy/a-magic-erasure-that-protects-your-visitors-privacy'><a>Learn more</a></Link></span>}
            />
            <FeaturesGridItem
              icon='database-2-line'
              title='Self-hosted'
              body='For our enterprise customers we can offer on-premise hosting, enabling you to store all Squeaky data directly on your own servers.'
              enterprise
            />
          </FeaturesGrid>
        </Container>
      </section>

      <section id='dashboard'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Dashboard</h3>
            <p>Landing in a data-driven app can be confusing. That&apos;s why we pull some of the key datapoints onto the first page of our application, helping you get to the information that matters the moment you arrive.</p>
          </Container>
          <FeaturesGrid>
            <FeaturesGridItem
              icon='dashboard-3-line'
              title='Data at a glance'
              body='The moment you land in Squeaky we provide you with a snapshot of you total visitors, recordings and pageviews, highlighting how many new items you have to review.'
            />
            <FeaturesGridItem
              icon='vidicon-line'
              title='Latest recording'
              body='Jump straight in to your very latest recording right from the homescreen. Once it&apos;s finished playing you can jump straight to the next recording in your feed.'
            />
            <FeaturesGridItem
              icon='sticky-note-line'
              title='Global notes'
              body='Take a quick look at the latest notes that have been added to recordings, and quickly jump into any recording with important notes assigned.'
            />
          </FeaturesGrid>
        </Container>
      </section>

      <section id='visitors'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Visitors</h3>
            <p>One of the best ways to make sense of your user data is to view it on a per-visitor basis. Our privacy-first profiles group recordings and analytics data per-visitor, so you can see exactly what their experience has been.</p>
          </Container>
          <FeaturesGrid>
            <FeaturesGridItem
              icon='group-line'
              title='Visitors overview'
              body='View a quick run-down of all your website or web app&apos;s visitors. You can easily filter the data to find the visitors that are most relevant to your current needs.'
            />
            <FeaturesGridItem
              icon='alarm-warning-line'
              title='Visitor status'
              body='Squeaky automatically highlights any visitors you&apos;ve never viewed before, helping you to better support and learn from new visitors.'
            />
            <FeaturesGridItem
              icon='star-line'
              title='Starring'
              body='Keep track of the most interesting or important visitors by starring your favourites. You can access these quickly later on by using the filters provided.'
            />
            <FeaturesGridItem
              icon='pages-line'
              title='Detailed anonymity'
              body='We capture non-private information, like the visitors&apos; device, browser, and language, along with a host of other important data points that enrich your understanding of your visitors.'
            />
            <FeaturesGridItem
              icon='link'
              title='Data linking'
              body='For some companies it&apos;s vitally important to be able to link your Squeaky visitors to your existing user database. With our Linked Data feature you can make that connection, and still keep their data private if you need.'
            />
            <FeaturesGridItem
              icon='pie-chart-line'
              title='Analytics built-in'
              body='See your users in a new light, with high-level stats about their site or web app usage, including average session duration, number of pages visited, average pages per session, and more.'
            />
            <FeaturesGridItem
              icon='layout-column-line'
              title='Custom columns'
              body='Squeaky captures an enormous amount of data, but sometimes you&apos;ll want to cut out the noise and focus on the data points that matter to your business. We made that effortless, with our custom column management.'
            />
          </FeaturesGrid>
        </Container>
      </section>

      <section id='analytics'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Analytics</h3>
            <p>Our analytics tool turns your data into actionable insights, enabling you to quickly understand the trends and behaviours that matter most to your business.</p>
          </Container>
          <FeaturesGrid>
            <FeaturesGridItem
              icon='line-chart-line'
              title='Visitor numbers'
              body='Knowing what times and days your traffic is peaking provides vital signals that help you measure success and learn when to post content, release changes or start new marketing campaigns.'
            />
            <FeaturesGridItem
              icon='user-line'
              title='Page visits'
              body='Understanding when your pages are proving most popular will help your discover the content that matters most to your visitors.'
            />
            <FeaturesGridItem
              icon='calendar-line'
              title='Filter by date'
              body='Viewing your data over the right time period is vital, so Squeaky lets you quickly apply pre-defined date ranges.'
            />
            <FeaturesGridItem
              icon='timer-line'
              title='Average session duration'
              body='Squeaky highlights how long people are spending on your website or app, providing important insights into how engaging your content is.'
            />
            <FeaturesGridItem
              icon='pages-line'
              title='Pages per session'
              body='Quickly discover how effective your site is by seeing whether your visitors are regularly browsing the entirety of your site, or sticking to a narrow selection of pages and then leaving.'
            />
            <FeaturesGridItem
              icon='route-line'
              title='Traffic sources'
              body='Knowing where your visitors are arriving from can help you to better understand your audience and the effectiveness of your marketing campaigns.'
            />
            <FeaturesGridItem
              icon='map-pin-2-line'
              title='Location and language'
              body='Find out which regions and languages bring you the most visitors, so you can make sure your content and marketing is targeted at the right people.'
            />
            <FeaturesGridItem
              icon='thumb-up-line'
              title='Popular pages'
              body='Most visitors are going to visit your homepage, but where do they go next, and for how long? Squeaky surfaces this data to help you rapidly improve your site or app.'
            />
            <FeaturesGridItem
              icon='device-line'
              title='Browser and device types'
              body='Deliver targeted improvements to your website, using precise knowledge of the devices and browsers your visitors are using.'
            />
            <FeaturesGridItem
              icon='arrow-left-right-line'
              title='Device widths'
              body='Use our device-width graph to see which screen sizes are most commonly used to view your website or web app, ensuring you only spend time designing for the right scenarios.'
            />
            <FeaturesGridItem
              icon='logout-box-line'
              title='Exit and bounce rates'
              body='See which pages are keeping visitors on your site longest, and which are causing them to quickly turnaround and leave.'
            />
          </FeaturesGrid>
        </Container>
      </section>

      <section id='recordings'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Recordings</h3>
            <p>Understanding what your users have been up to has never been easier, thanks to our seemless session recording and playback.</p>
          </Container>
          <FeaturesGrid>
            <FeaturesGridItem
              icon='video-line'
              title='Recordings overview'
              body='View all your website or web app&apos;s visitors in one place. You can easily filter the data to find the recordings that are most relevant to the task at hand.'
            />
            <FeaturesGridItem
              icon='film-line'
              title='Amazing playback'
              body='Our script captures an exact copy of your website, as your visitor saw it. That way, when you play back a visitors session you can see exactly what they saw.'
            />
            <FeaturesGridItem
              icon='sound-module-line'
              title='Playback controls'
              body='Pause and scrub recordings to quickly navigate the playback, and view the recording at faster or slower speeds to go through the sessions at your preferred pace.'
            />
            <FeaturesGridItem
              icon='zoom-in-line'
              title='Zoom'
              body='Zoom in and out of your session playback to take in the whole picture, or focus on the tiniest details.'
            />
            <FeaturesGridItem
              icon='information-line'
              title='Session info'
              body='Anonymous session information, such as the user&apos;s device, browser and language, help you understand the context of their visit, use data linking to add additional fields from your own database.'
            />
            <FeaturesGridItem
              icon='time-line'
              title='Activity and pages feed'
              body='Easily navigate your recording using a timestamped list of the pages visited or the activity feed (e.g. clicks, scrolls, hovers etc).'
            />
            <FeaturesGridItem
              icon='sticky-note-line'
              title='Notes and tags'
              body='Use notes and tags to document visitor behaviour, site issues, and activity, so you have a clear record of the moments that need addressing later.'
            />
            <FeaturesGridItem
              icon='user-voice-line'
              title='Feedback'
              body='If you&apos;re using our NPS® or Sentiment survey tools then we&apos;ll pull feedback data directly in the recordings overview and the recording playback.'
            />
            <FeaturesGridItem
              icon='checkbox-multiple-line'
              title='Bulk actions'
              body='Sometimes you&apos;ll want to quickly update the properties of multiple recordings at once. We&apos;ve made that effortless, by providing bulk actions you can access from the recordings overview'
            />
            <FeaturesGridItem
              icon='link'
              title='Data linking'
              body='For some companies it&apos;s vitally important to be able to link your Squeaky visitors to your existing user database. With our Linked Data feature you can make that connection, and still keep their data private if you need.'
            />
            <FeaturesGridItem
              icon='layout-column-line'
              title='Custom columns'
              body='Squeaky captures an enormous amount of data, but sometimes you&apos;ll want to cut out the noise and focus on the data points that matter to your business. We made that effortless, with our custom column management.'
            />
            <FeaturesGridItem
              icon='bookmark-3-line'
              title='Bookmarking'
              body='Keep track of the most interesting or important recordings by bookmarking your favourites. You can access these quickly later on by using the filters provided, or from within the visitor&apos;s individual profile.'
            />
          </FeaturesGrid>
        </Container>
      </section>

      <section id='events'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Event tracking</h3>
            <p>Our event tracking functionality allows you to easily track and compare any visitor action on your site, so you can monitor everything from site-wide trends to important micro-interactions.</p>
          </Container>
          <FeaturesGrid>
            <FeaturesGridItem
              icon='magic-line'
              title='Autocapture events'
              body='Squeaky automatically captures several pre-defined visitor actions such as page views, clicks or javascript errors. Autocapture of event data provides you with historical data that you can interrogate at any time in the future.'
            />
            <FeaturesGridItem
              icon='settings-3-line'
              title='Custom events'
              body='Add custom tracking for any user activity you can think of e.g. every time a user updated their shopping cart, or tried out a new feature. Custom events are incredibly powerful, though they&apos;re one of the few areas of Squeaky that require technical expertise.'
            />
            <FeaturesGridItem
              icon='file-copy-line'
              title='Event groups'
              body='Groups allow you to bundle particular events that are related to one another, making it easy to quickly compare an array of similar events with just a few clicks.'
            />
            <FeaturesGridItem
              icon='line-chart-line'
              title='Comparisons'
              body='The event history view allows you to track all instances of an event over time, but you can also pull additional events to the same charts and see, side-by-side, how events compare with one another.'
            />
            <FeaturesGridItem
              icon='time-line'
              title='Event feed'
              body='From within the events history page, you have access to a feed showing whenever an event took place, allowing you to quickly find the visitors or recordings that contain a particular event.'
            />
          </FeaturesGrid>
        </Container>
      </section>

      <section id='feedback'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Feedback</h3>
            <p>We offer industry standard feedback surveys to help you enrich your visitor data by pairing it with direct feedback.</p>
          </Container>
          <FeaturesGrid>
            <FeaturesGridItem
              icon='user-voice-line'
              title='Net Promoter Score®'
              body='Squeaky offers built in NPS® survey functionality enabling you to add the widely used market research metric directly on your website or in your web app.'
            />
            <FeaturesGridItem
              icon='emotion-happy-line'
              title='Sentiment analysis'
              body='Our sentiment survey offers a straightforward and relatable way to let your customers tell you how they&apos;re feeling about using your services. '
            />
            <FeaturesGridItem
              icon='paint-brush-line'
              title='Appearance customisation'
              body='Style your feedback widgets to match your brand, and choose the layout or positioning that works best for your website or web app.'
            />
            <FeaturesGridItem
              icon='eye-line'
              title='Display options'
              body='Depending on which type of feedback you&apos;re using, you can choose which pages it&apos;s displayed on and how often, ensuring you only connect with your visitors when the time is right.'
            />
            <FeaturesGridItem
              icon='line-chart-line'
              title='Analysis'
              body='Use detailed charts and analysis to detect trends in your customer feedback that you can use to determine targeted improvements to their experience.'
            />
            <FeaturesGridItem
              icon='sound-module-line'
              title='Filtering'
              body='Apply feedback filters throughout the Squeaky application so you can easily focus on visitors and recordings with feedback.'
            />
          </FeaturesGrid>
        </Container>
      </section>

      <section id='heatmaps'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Heatmaps</h3>
            <p>Use aggregated user interaction data to better understand the performance of your site, what areas of your interface are being interacted with most, and which content matters.</p>
          </Container>
          <FeaturesGrid>
            <FeaturesGridItem
              icon='cursor-line'
              title='Clickmaps'
              body='Squeaky tracks every click on any element of your site or web app. We then aggregate this based on device size so that we can show you which elements are being clicked most and least often.'
            />
            <FeaturesGridItem
              icon='mouse-line'
              title='Scrollmaps'
              body='Scrollmaps help you understand how far down the page your users are scrolling so that you know whether your most important content is high enough on the page or going to waste.'
            />
            <FeaturesGridItem
              icon='sun-line'
              title='Continuous collection'
              body='From the moment the Squeaky tracking code is installed, you&apos;re continuously collecting heatmap data for any page that your users have visited. This gives you a wealth of data to analyse at any time you choose'
            />
            <FeaturesGridItem
              icon='device-line'
              title='Compare devices'
              body='Use our simple toggles to quickly see differences in how your visitors are interacting with your website or web app depending on which device they are visiting on.'
            />
          </FeaturesGrid>
        </Container>
      </section>

      <section id='journeys'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Journeys</h3>
            <p>We help you uncover the journeys your visitors are taking through your site, enabling you to discover unexpected patterns and user behaviour so that you can improve the customer experience you&apos;re offering.</p>
          </Container>
          <FeaturesGrid>
            <FeaturesGridItem
              icon='route-line'
              title='Start and end points'
              body='Set the exact starting point of a customer journey and you&apos;ll see exactly where your visitors when from there. Alternatively, set an end point to see the routes your visitors took to get there.'
            />
            <FeaturesGridItem
              icon='arrow-right-down-line'
              title='Drop-off rates'
              body='View drop off rates that show you how many users are leaving your site from any given page in their journey. This will help you improve and optimise the journeys to keep your visitors from leaving too soon.'
            />
            <FeaturesGridItem
              icon='vidicon-line'
              title='View recordings'
              body='If you&apos;ve spotted some user journeys that you&apos;d like to watch back, you can quickly jump from the journeys view to a filtered list or recordings that match that journey.'
            />
            <FeaturesGridItem
              icon='magic-line'
              title='Autocapture'
              body='From the moment the Squeaky tracking code is installed, you&apos;re continuously collecting journeys data for any page that your users have visited. This gives you a wealth of data to analyse at any time you choose'
            />
            <FeaturesGridItem
              icon='calendar-line'
              title='Filter by date'
              body='Viewing your data over the right time period is vital, so Squeakily lets you quickly apply pre-defined date ranges.'
            />
          </FeaturesGrid>
        </Container>
      </section>

      <section id='team'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Team</h3>
            <p>At Squeaky we believe that every member of your team should care about the experience of your customers, so we&apos;ve created a flexible team management system to enable anyone and everyone to be involved.</p>
          </Container>
          <FeaturesGrid>
            <FeaturesGridItem
              icon='mail-send-line'
              title='Unlimited members'
              body='Add unlimited team members to your Squeaky site, by simply entering their email address(es) and clicking send.'
            />
            <FeaturesGridItem
              icon='user-2-line'
              title='Easily manage roles'
              body='Squeaky offers 3 distinct roles: Owner, Admin, and Member, allowing you to provide only the relevant level of access to each team member.'
            />
            <FeaturesGridItem
              icon='user-settings-line'
              title='Quickly update members'
              body='If you need to change someone&apos;s role, resend an invitation, or remove a team member, we make it effortless and fast. '
            />
            <FeaturesGridItem
              icon='share-line'
              title='Sharing'
              body='With just the click of a button you can share interesting recordings with anyone else in your Squeaky team.'
            />
            <FeaturesGridItem
              icon='eye-line'
              title='Screening'
              body='While you&apos;ll want your team in Squeaky with you, you won&apos;t want their visits impacting your data. That&apos;s why we let you screen out visits from specific email domains/address or IP addresses.'
            />
            <FeaturesGridItem
              icon='lock-password-line'
              title='SSO'
              body='For enterprise customers we offer Single Sign-On so your teams can have authentication streamlined with the rest of your business.'
              enterprise
            />
          </FeaturesGrid>
        </Container>
      </section>

      <section id='ease-of-use'>
        <Container className='lg centered'>
          <Container className='md'>
            <h3>Ease of use</h3>
            <p>We&apos;ve paired our incredible array of features with a world-class user experience, offering effortless access to insights that can fundamentally change your business.</p>
          </Container>
          <FeaturesGrid>
            <FeaturesGridItem
              icon='magic-line'
              title='Simple installation'
              body='Installating the Squeaky tracking code is effortless, just copy it into the head HTML of any page on your website you wish to track, or use our installation guides for your CMS platform.'
            />
            <FeaturesGridItem
              icon='emotion-happy-line'
              title='Fast and intuitive'
              body='We&apos;ve made Squeaky incredibly fast and created an elegant and deceptively simple interface to ensure you get results quickly.'
            />
            <FeaturesGridItem
              icon='customer-service-2-line'
              title='Reliable customer support'
              body='We&apos;re available via email, video call, or telephone (Enterprise only), and we always aim to reply within 2 hours during our working day.'
            />
            <FeaturesGridItem
              icon='terminal-box-line'
              title='Developer documentation'
              body='There&apos;s little-to-no technical expertise required, but if you want to make use of our most advanced privacy functionality we&apos;ve got developer documentation to guide you.'
            />
          </FeaturesGrid>
        </Container>
      </section>

      <section className='insight'>
        <Cta type='cross-mauve' title={<h2>Give your business the insights it deserves</h2>} />
      </section>
    </>
  );
};

Features.getMetaData = () => ({
  title: 'Squeaky | Features',
  description: 'We\'ve collected all of Squeaky\'s most important features onto one page, making it easy for you to understand exactly how our platform can help your business.',
  index: true,
});

export default Features;
