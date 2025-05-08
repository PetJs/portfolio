export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Peter was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Peter’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Peter. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Peter was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];
  
export const myProjects = [
    {
      title: 'Movy - Movie Streaming Platform',
      desc: 'Movy is a next-gen movie streaming platform that brings your favorite films and shows to life with a sleek, user-friendly interface and seamless playback experience.',
      subdesc: 'Developed using Next.js 14, Tailwind CSS, TypeScript, Framer Motion, and NodeJs, Movy is built for high performance, scalability, and a smooth streaming experience across all devices.',
      href: 'https://movy-frontend.vercel.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/favicon.ico',
      logoStyle: {
        backgroundColor: '#F3E8FF',
        border: '0.2px solid #D8B4FE',
        boxShadow: '0px 0px 60px 0px #C084FC4D',
      },

      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Save our Food ',
      desc: 'An innovative platform designed to help users minimizes the amount of ingredient wastage after food has been prepared. It simplifies ingrdients amount and uses in food making, providing a seamless experience for users',
      subdesc:
        'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using React, TypeScript ,and Tailwind that enhance operational workflows.',
      href: 'https://sof.vercel.app/',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Recipi - Online Recipe Platform',
      desc: 'Recipi is a modern recipe discovery platform that helps users explore and manage their favorite meals with ease. It offers curated recipes, a random recipe generator, and detailed nutritional insights.',
      subdesc: 'Built with React, TypeScript, React Query, and the Spoonacular API, Recipi delivers a fast and interactive cooking experience for food lovers of all kinds.' ,
      href: 'https://recipi-puce.vercel.app/',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/ramen.png', 
      logoStyle: {
        backgroundColor: '#FFEDD5', 
        border: '1px solid #FF7A00', 
        boxShadow: '0px 0px 40px 0px rgba(255, 122, 0, 0.4)', 
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
];
  
export const calculateSizes = (isSmall: any, isMobile: any, isTablet: any) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 10, 0] : isMobile ? [-12, 10, 0] : isTablet ? [-12, 10, 0] : [-12, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};
  
export const workExperiences = [
    {
      id: 1,
      name: 'NitHub',
      pos: 'FullStack Developer',
      duration: 'April - Dec, 2024',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/nithub.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'GCE-Github Campus Expert',
      pos: 'FrontEnd Developer',
      duration: 'Sept - Oct 2024',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/GCE.jpg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Rise Academy',
      pos: 'Frontend Engineer Intern',
      duration: '2025 - Present',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/rise.png',
      animation: 'salute',
    },
];