// TODO: Fill in your personal information below
const INFO = {
  main: {
    // TODO: Update with your name and portfolio title
    title: 'Portfolio',
    name: 'Your Name',
    email: 'your.email@example.com',
    // TODO: Replace with path to your logo image (place it in public/)
    logo: '/logo.png',
  },

  socials: {
    // TODO: Replace with your actual social media URLs
    twitter: 'https://twitter.com/',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/',
    stackoverflow: 'https://stackoverflow.com/',
    facebook: 'https://facebook.com/',
  },

  homepage: {
    // TODO: Update with your tagline
    title: 'Full-stack web and mobile app developer.',
    // TODO: Update with a short bio
    description:
      'I am a developer with experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills.',
  },

  about: {
    // TODO: Update with your about headline
    title: "I'm Your Name. I live in Your City, where I design the future.",
    // TODO: Update with your about description
    description:
      "I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind.",
  },

  articles: {
    title: "I'm passionate about pushing the boundaries of what's possible.",
    description:
      'Chronological collection of my long-form thoughts on programming, leadership, product design, and more.',
  },

  // TODO: Replace with your actual projects
  projects: [
    {
      title: 'Project 1',
      description:
        'Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.',
      logo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png',
      linkText: 'View Project',
      link: 'https://github.com',
    },

    {
      title: 'Project 2',
      description:
        'Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.',
      logo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png',
      linkText: 'View Project',
      link: 'https://github.com',
    },

    {
      title: 'Project 3',
      description:
        'Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.',
      logo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png',
      linkText: 'View Project',
      link: 'https://github.com',
    },

    {
      title: 'Project 4',
      description:
        'Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.',
      logo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png',
      linkText: 'View Project',
      link: 'https://github.com',
    },

    {
      title: 'Project 5',
      description:
        'Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.',
      logo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png',
      linkText: 'View Project',
      link: 'https://github.com',
    },
  ] satisfies Array<{
    title: string;
    description: string;
    logo: string;
    linkText: string;
    link: string;
  }>,
};

// TODO: Add your work experience entries here
const WORKS: Array<{
  company: string;
  role: string;
  duration: string;
  image: string;
}> = [
  {
    // TODO: Replace with your work experience
    company: 'Company 1',
    role: 'Software Engineer',
    duration: '2022 - Present',
    // TODO: Replace with company logo URL
    image:
      'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png',
  },
  {
    company: 'Company 2',
    role: 'Software Engineer',
    duration: '2020 - 2022',
    image:
      'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png',
  },
];

export { WORKS };
export default INFO;
