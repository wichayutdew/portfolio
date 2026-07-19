import logoUrl from '@/assets/logo.svg';
import profileImage from '@/assets/profile.jpg';
import agodaLogo from '@/assets/agoda.png';
import exxonMobilLogo from '@/assets/exxonmobil.jpeg';
import relifnowLogo from '@/assets/relifnow.png';
import dotfilesLogo from '@/assets/dotfiles.svg';

const INFO = {
  main: {
    title: "Wichayut's Portfolio",
    name: 'Wichayut (Dew) Phongphanpanya',
    email: 'wichayutdew@gmail.com',
    logo: logoUrl,
    profile: profileImage,
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
    title: 'About me',
    description:
      'Currently based in Bangkok, Thailand. Worked on a variety of projects over the years.',
  },

  projects: {
    title: "Things I've made trying to put my dent in the universe.",
    description:
      "I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind.",
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
    title: "Let's Get in Touch: Ways to Connect with Me",
    description: `
      Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions.
			If you have a specific question or comment, please feel free to email or LinkedIn dm me.
  		Thanks again for your interest, and I look forward to hearing from you!
		`,
  },
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
    image: agodaLogo,
  },
  {
    company: 'ExxonMobil',
    role: 'Backend Developer',
    duration: 'Apr 2022 - Jan 2023',
    image: exxonMobilLogo,
  },
  {
    company: 'ExxonMobil',
    role: 'System Coordinator',
    duration: 'Aug 2020 - Mar 2022',
    image: exxonMobilLogo,
  },
  {
    company: 'Relifnow (Start up)',
    role: 'Founding Engineer',
    duration: 'Jun 2019 - Sept 2023',
    image: relifnowLogo,
  },
];

export { WORKS };
export default INFO;
