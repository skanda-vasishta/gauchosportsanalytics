import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Gaucho Sports",
  lastName: "Analytics",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Bridging the gap between tech and sports at UCSB",
  avatar: "/images/logo.png",
  location: "Santa Barbara, CA",
  languages: ["English", "Spanish"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to Gaucho Analytics Updates</>,
  description: (
    <>
      Stay updated with the latest sports analytics insights, game statistics, and UCSB Athletics performance metrics.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/gaucho-sports-analytics",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/gaucho-sports-analytics",
  },
  {
    name: "X",
    icon: "x",
    link: "https://twitter.com/UCSBAthletics",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:analytics@athletics.ucsb.edu",
  },
];

const home = {
  label: "Home",
  title: "Gaucho Sports Analytics",
  description: "Advanced sports analytics platform for UCSB Athletics",
  headline: <>Empowering UCSB Athletics with Data-Driven Insights</>,
  subline: (
    <>
      A comprehensive analytics platform for <InlineCode>UCSB Athletics</InlineCode>, delivering
      <br /> real-time statistics, performance tracking, and strategic insights.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Us",
  description: "Discover how Gaucho Sports Analytics is transforming UCSB Athletics",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com/gaucho-analytics",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        We unite tech and sports enthusiasts to innovate both fields collaboratively! Through collaborative projects, workshops, and networking opportunities, we seek to foster a deeper understanding of sports analytics, encourage innovation, and develop skills that prepare members for future careers in industry.

      </>
    ),
  },
  work: {
    display: true,
    title: "What We Do",
    experiences: [
      {
        company: "Workshops",
        // timeframe: "Core Feature",
        // role: "Learn ML and Data Science through sports",
        achievements: [
          <>
            Learn the fundamentals of industry-relevant data science/analytics and machine learning skills with real-world sports data.
          </>,
          <>
            Become familiar with data analysis tools like Numpy, Pandas, MatplotLib, and Seaborn, as well as machine learning frameworks like PyTorch and Scikit-Learn.
          </>,
        ],
        images: [
          {
            src: "/images/python-logo-1.png",
            alt: "Analytics Dashboard",
            width: 16,
            height: 9,
          },
          {
            src: "/images/python-logo-1.png",
            alt: "Analytics Dashboard",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Team Insights",
        timeframe: "Advanced Analytics",
        role: "Strategic Analysis",
        achievements: [
          <>
            Created detailed visualization tools for analyzing team formations, player movements,
            and game strategies across different sports.
          </>,
          <>
            Integrated advanced statistical models to identify performance patterns and provide
            actionable insights for coaching staff.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
  },
  technical: {
    display: false,
    title: "Technical Capabilities",
    skills: [
      {
        title: "Real-time Processing",
        description: <>Advanced data processing pipeline handling live game statistics and player tracking data.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Real-time Processing",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Data Visualization",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Machine Learning",
        description: <>Sophisticated ML models for player performance prediction and strategy optimization.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Machine Learning Models",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Sports Analytics Insights",
  description: "Latest updates and insights from Gaucho Sports Analytics",
};

const work = {
  label: "Work",
  title: "Our Projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
