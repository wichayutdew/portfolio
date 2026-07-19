const INFO = {
  main: {
    title: "Wichayut's Portfolio",
    name: 'Wichayut (Dew) Phongphanpanya',
    email: 'wichayutdew@gmail.com',
    logo: './images/logo.svg',
  },

  socials: {
    github: 'https://github.com/wichayutdew',
    linkedin: 'https://www.linkedin.com/in/wichayutdew',
  },

  homepage: {
    title: 'Wichayut (Dew) Phongphanpanya',
    description:
      'I am a senior software engineer with 5+ years of experience in building scalable, secure and reliable applications using various frameworks and technologies. Specialized in JVM ecosystem (Java/Scala/Kotlin) and distributed architectures.',
  },

  about: {
    title: 'About Wichayut (Dew) Phongphanpanya.',
    description:
      'I live in Bangkok, Thailand and worked on a variety of projects over the years.',
  },

  articles: {
    title: "I'm passionate about pushing the boundaries of what's possible.",
    description:
      'Chronological collection of my long-form thoughts on programming, leadership, product design, and more.',
  },

  projects: [
    {
      title: 'This Portfolio',
      description:
        'My take on building React with Typescript as a backend engineer',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg',
      linkText: 'View Project',
      link: 'https://github.com/wichayutdew/portfolio',
    },

    {
      title: 'My Arch Linux dotfiles',
      description: 'My go to device configuration for Arch Linux',
      logo: './images/dotfiles.svg',
      linkText: 'View Project',
      link: 'https://github.com/wichayutdew/dotfiles-arch',
    },

    {
      title: 'My MacOS dotfiles',
      description: 'My go to device configuration for MacOS',
      logo: '/images/dotfiles.svg',
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
};

const WORKS: Array<{
  company: string;
  role: string;
  duration: string;
  image: string;
}> = [
  {
    company: 'Agoda',
    role: 'Senior Software Engineer',
    duration: 'Feb 2023 - Present',
    image: '/images/agoda.png',
  },
  {
    company: 'ExxonMobil',
    role: 'Backend Developer',
    duration: 'Apr 2022 - Jan 2023',
    image: '/images/exxonmobil.jpeg',
  },
  {
    company: 'ExxonMobil',
    role: 'System Coordinator',
    duration: 'Aug 2020 - Mar 2022',
    image: '/images/exxonmobil.jpeg',
  },
  {
    company: 'Relifnow (Start up)',
    role: 'Founding Engineer',
    duration: 'Jun 2019 - Sept 2023',
    image: '/images/relifnow.png',
  },
];

export { WORKS };
export default INFO;
