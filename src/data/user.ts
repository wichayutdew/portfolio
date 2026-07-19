import logoUrl from '@/assets/logo.png';
import profileImage from '@/assets/profile.jpg';
import cvPdf from '@/assets/cv.pdf';
import agodaLogo from '@/assets/agoda.png';
import exxonMobilLogo from '@/assets/exxonmobil.jpeg';
import relifnowLogo from '@/assets/relifnow.png';
import dotfilesLogo from '@/assets/dotfiles.svg';

const INFO = {
  main: {
    title: "Wichayut's Portfolio",
    name: 'Wichayut (Dew) Phongphanpanya',
    email: 'wichayutdew@gmail.com',
    phone: '+66851194999',
    logo: logoUrl,
    profile: profileImage,
    cv: cvPdf,
  },

  socials: {
    github: 'https://github.com/wichayutdew',
    linkedin: 'https://www.linkedin.com/in/wichayutdew',
  },

  homepage: {
    title: 'Wichayut (Dew) Phongphanpanya',
    description:
      'Senior software engineer with 5+ years of experience in building scalable, secure and reliable applications using various frameworks and technologies. Specialized in JVM ecosystem (Java/Scala/Kotlin) and distributed architectures.',
  },

  about: {
    title: 'About me',
    description:
      'Currently based in Bangkok, Thailand. Worked on a variety of projects over the years.',
  },

  projects: {
    title: "Things I've made trying to put my dent in the universe.",
    description:
      "I've worked on a variety of projects over the years and I'm proud of the progress I've made. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind.",
    list: [
      {
        title: 'My Portfolio (This website!)',
        description:
          'My take on building React with Typescript as a backend engineer',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg',
        linkText: 'View Project',
        link: 'https://github.com/wichayutdew/portfolio',
      },

      {
        title: 'My Arch Linux dotfiles',
        description: 'My go to device configuration for Arch Linux',
        logo: dotfilesLogo,
        linkText: 'View Project',
        link: 'https://github.com/wichayutdew/dotfiles-arch',
      },

      {
        title: 'My MacOS dotfiles',
        description: 'My go to device configuration for MacOS',
        logo: dotfilesLogo,
        linkText: 'View Project',
        link: 'https://github.com/wichayutdew/dotfiles-macos',
      },
    ] satisfies Array<{
      title: string;
      description: string;
      logo: string;
      linkText: string;
      link: string;
    }>,
  },

  articles: {
    title: "I'm passionate about pushing the boundaries of what's possible.",
    description:
      'Chronological collection of my long-form thoughts on programming, leadership, product design, and more.',
  },

  contact: {
    title: "Let's Get in Touch!",
    description: `
      Thank you for your interest in getting in touch with me.
			I welcome your feedback, questions, and suggestions.
			If you have a specific inquiry, please feel free to email or LinkedIn dm me.
  		Thanks again for your interest, and I look forward to hearing from you!
		`,
  },
};

const WORKS: Array<{
  company: string;
  role: string;
  duration: string;
  image: string;
  achievements?: string[];
}> = [
  {
    company: 'Agoda',
    role: 'Senior Software Engineer',
    duration: 'Feb 2023 - Present',
    image: agodaLogo,
    achievements: [
      'Delivered cross-product marketing systems (Hotels, Flights, Activities), including segmented discount engine and promotion code platform, driving extra $50,000/day incremental bookings.',
      'Built cross-sell platform bundling hotels and activities; integrated external inventory and Ads system (Google Things To Do, TikTok Go, Meta Pixel) via Apache Spark pipelines, generating $20,000/day additional revenue from daily bookings.',
      'Leveraged LLMs to optimize SEO product content, increasing organic traffic and contributing $10,000/day incremental bookings.',
      'Led development of a one-click GitLab CI/CD pipeline with Kubernetes and internal IaC, eliminating 3 manual steps by automating tests and release process, enabling canary deployments. Reducing deployment failures by 70%.',
      'Designed and implemented core backend services for Agoda Activities (inventory, booking workflows, customer service portal) supporting a $500,000/day revenue product.',
      'Automated booking status updates and escalation email workflows in customer service portal, reducing manual intervention, human error and lowering operational costs by 40%',
    ],
  },
  {
    company: 'ExxonMobil',
    role: 'Backend Developer',
    duration: 'Apr 2022 - Jan 2023',
    image: exxonMobilLogo,
    achievements: [
      'Developed secure API and data pipelines integrating legacy SAP systems supporting $5 billion fuel supply operations.',
      'Automated Azure CI/CD pipelines using Terraform and Liquibase for Spring Boot microservices',
    ],
  },
  {
    company: 'ExxonMobil',
    role: 'System Coordinator',
    duration: 'Aug 2020 - Mar 2022',
    image: exxonMobilLogo,
    achievements: [
      'Coordinated Mobile/Web/POS development for Esso/Mobil stations across 5 APAC countries (Thailand, Singapore, Hongkong, Macau, New Zealand)',
    ],
  },
  {
    company: 'Relifnow',
    role: 'Founding Engineer',
    duration: 'Jun 2019 - Sept 2023',
    image: relifnowLogo,
    achievements: [
      'Built telehealth cross platform application connecting 10,000 customers with doctors and pharmacies. Enabling cheap online health consultation and medicine purchasing systems.',
      'Managed backend logic and cloud infrastructure using ExpressJS/Java Springboot on GCP Kubernetes/Cloud SQL with automated GitHub Actions CI/CD; Contribute on building cross-platform application using Flutter framework to publish to both IOS App store and Android play store.',
    ],
  },
];

export { WORKS };
export default INFO;
