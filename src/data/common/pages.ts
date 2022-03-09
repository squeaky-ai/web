type PageMeta = {
  href: string;
  title: string;
  description: string | null;
  index: boolean;
}

export const pages = (args: string[]): PageMeta[] => [
  {
    href: '/',
    title: 'Squeaky | The privacy-first customer experience platform',
    description: 'Squeaky\'s customer insights platform helps you understand exactly how customers are using your website or web app, without invading their privacy.',
    index: true,
  },
  {
    href: '/about-us',
    title: 'Squeaky | About Us',
    description: 'Learn about Squeaky\'s mission to create a better web, and why we started a privacy-first customer analytics company in the first place.',
    index: true,
  },
  {
    href: '/auth/accept',
    title: 'Squeaky | Accept Invitation',
    description: null,
    index: false,
  },
  {
    href: '/auth/reset',
    title: 'Squeaky | Reset Password',
    description: 'Have you forgotten your Squeaky password? Don\'t worry! Simply visit our password reset page and we\'ll help you log back in.',
    index: true,
  },
  {
    href: '/auth/signup',
    title: 'Squeaky | Sign up',
    description: 'Sign up for a free Squeaky account today! You\'ll finally be able to get the most out of your visitor data, while respecting their privacy too.',
    index: true,
  },
  {
    href: '/auth/login',
    title: 'Squeaky | Log in',
    description: 'Log in to your Squeaky account to access your latest customer experience insights. Don\'t have an account yet? Sign up free today!',
    index: true,
  },
  {
    href: '/blog',
    title: 'Squeaky | Blog',
    description: 'Read the Squeaky blog to discover our insights and ideas on how to build great products, make marketing more human, and build better customer experiences.',
    index: true,
  },
  {
    href: '/blog/[[...category]]',
    title: 'Squeaky | Blog',
    description: `We\'ve grouped all our blog posts about ${args[0]} in one place, so you can read the content that matters to you.`,
    index: true,
  },
  {
    href: '/blog/[category]/[post]',
    title: `Squeaky | Blog | ${args[0]}`,
    description: args[1],
    index: true,
  },
  {
    href: '/book-demo',
    title: 'Squeaky | Book Demo',
    description: 'Would you like to discover how customer experience analytics can help your business, or be provided with a custom quote? Book a demo and we\'ll be happy to help.',
    index: true,
  },
  {
    href: '/contact-us',
    title: 'Squeaky | Contact Us',
    description: 'To find out more about Squeaky, and how we can help you and your business succeed, contact us using the form provided.',
    index: true,
  },
  {
    href: '/developers',
    title: 'Squeaky | Developers',
    description: 'If you\'d like help installing Squeaky, or getting the most out of our privacy features, read our developer documentation and you\'ll hit the ground running.',
    index: true,
  },
  {
    href: '/features',
    title: 'Squeaky | Features',
    description: 'We\'ve collected all of Squeaky\'s most important features onto one page, making it easy for you to understand exactly how our platform can help your business.',
    index: true,
  },
  {
    href: '/legal/ccpa',
    title: 'Squeaky | CCPA',
    description: 'Learn about how Squeaky\'s customer insights software uses privacy-first technology to ensure your business can stay CCPA compliant.',
    index: true,
  },
  {
    href: '/legal/gdpr',
    title: 'Squeaky | GDPR',
    description: 'Thanks to Squeaky, you can stop worrying about whether you can use customer analytics tools and remain GDPR compliant. Read our GDPR page to learn more.',
    index: true,
  },
  {
    href: '/legal/privacy-policy',
    title: 'Squeaky | Privacy Policy',
    description: 'Read our privacy policy to see how we collect, safeguard, and disclose information that results from your use of our customer insights software.',
    index: true,
  },
  {
    href: '/legal/security',
    title: 'Squeaky | Security',
    description: 'The security of your data, and the data we process on your behalf, are of paramount importance. Read our security page to understand our practices and policies.',
    index: true,
  },
  {
    href: '/legal/terms-of-service',
    title: 'Squeaky | Terms Of Service',
    description: 'Review our terms of service page for a clear and concise picture of the terms we provide to people visiting our site or using our web app.',
    index: true,
  },
  {
    href: '/pricing',
    title: 'Squeaky | Pricing',
    description: 'Find out which Squeaky subscription is right for your business. We have a wide range of pricing plans, including free and enterprise options.',
    index: true,
  },
  {
    href: '/product/analytics',
    title: 'Squeaky | Analytics',
    description: 'Use our analytics tool to better understand your audience, know your traffic, generate leads, and grow your revenue. It\'s simple and 100% privacy friendly.',
    index: true,
  },
  {
    href: '/product/feedback',
    title: 'Squeaky | Feedback',
    description: 'Use feedback widgets to find out what your visitors think of your site. You can easily customise when and where to show NPS or Sentiment surveys to visitors.',
    index: true,
  },
  {
    href: '/product/heatmaps',
    title: 'Squeaky | Heatmaps',
    description: 'Use our heatmap tool to visualise where visitors are clicking and scrolling on your site. You\'ll quickly discover which content, interfaces, and layouts work.',
    index: true,
  },
  {
    href: '/product/recordings',
    title: 'Squeaky | Recordings',
    description: 'Use session recording to capture each visit to your site. Playback recordings to help you improve your site, convert more leads, and provide great support.',
    index: true,
  },
  {
    href: '/use-cases/customer-success',
    title: 'Squeaky | Customer Success',
    description: 'See how Squeaky can help you improve your customer support by collecting customer feedback, viewing session recordings, and capturing useful analytics data.',
    index: true,
  },
  {
    href: '/use-cases/marketing-and-conversion',
    title: 'Squeaky | Marketing & Conversion',
    description: 'Find out how Squeaky can help you engage with your audience, and convert more visitors to customers, with our analytics, heatmaps, and session recording tools.',
    index: true,
  },
  {
    href: '/use-cases/product-and-ux',
    title: 'Squeaky | Product & UX',
    description: 'See how Squeaky helps product and UX teams to improve their customer experience, using session recordings, analytics, heatmaps, and direct user feedback.',
    index: true,
  },
];

export const getPageData = (
  page: string,
  path: string,
  args: string[] = [],
): Pick<PageMeta, 'title' | 'description' | 'index'> => {
  const match = pages(args).find(p => p.href === path || p.href === page);

  console.log(match);
  
  return match || {
    title: 'Squeaky.ai | The privacy-first customer insights platform',
    description: 'Understand exactly how customers are using your website or web app, without invading their privacy.',
    index: true,
  };
};
