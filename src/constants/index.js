import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  megascale,
  wictronix,
  acm,
  google,
  designwithspark,
  leaseposh,
  sas,
  svnitresume,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SDE Intern",
    company_name: "WictroniX",
    icon: wictronix,
    iconBg: "#fff",
    date: "April 2024 - June 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Megascale",
    icon: megascale,
    iconBg: "#fff",
    date: "July 2024 - Aug 2024",
    points: [
      "Led a team of 5 developers to deliver a fully-functional Flutter app for NEC in just 4 weeks.",
      "Designed and implemented a cross-platform mobile solution using Flutter and Firebase, optimizing data efficiency by 40%.",
      "Developed a scalable backend with Node.js and MongoDB, supporting over 100,000 concurrent users with AWS hosting.",
      "Achieved a 95% user satisfaction rate for the NEC app, enhancing management processes for over 500 council members.",
    ],
  },
  {
    title: "Contributor",
    company_name: "Alaska, Google Summer of Code",
    icon: google,
    iconBg: "#fff",
    date: "May 2025 - Sep 2025",
    points: [
      "Built a ZeroMQ-based communication layer in Python, reducing IPC latency by 40% and improving runtime efficiency.",
      "Replaced legacy file-sharing and shared-memory systems to enhance scalability and modularity in distributed setups.",
      "Designed a unified communication protocol to enable seamless distributed control studies across 10+ nodes, improving coordination and system reliability.",
      "Standardized ZeroMQ edge labels (e.g., 0x1234_Y), significantly improving hypergraph accuracy and consistency.",
      "Integrated native ZeroMQ edge support into the Concore visual editor, enabling the execution of fully connected hypergraphs and eliminating disjoint structures."
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SAS",
    subtitle: "Fat to Slim",
    description:
      "I developed a website for SAS Fat To Slim, a company that pitched their business on Shark Tank India, during the prestigious hackathon Hack the Tank. This project involved not only creating a dynamic website but also building an advanced admin dashboard. The dashboard enables administrators to view page analytics, manage users, and send messages to users via WhatsApp. This experience was thrilling as it allowed me to deliver a comprehensive, real-world solution for a high-profile client, demonstrating my technical prowess and ability to meet the sophisticated needs of an innovative business.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "yellow-text-gradient",
      },
    ],
    image: sas,
    source_code_link: "https://github.com/saksham-gera/SAS-FatToSlim",
    live_link: "https://htt-2-0.vercel.app"
  },
  {
    name: "MyTee3D",
    subtitle: "3D T-Shirt Customisation System",
    description:
      "• Developed a System using HuggingFace API and ThreeJS for AI-Generated Designs on 3D models. • Integrated Gemini Pro API, providing design suggestions and enhancing User Engagement by 15%. • Blended an Editor for Modifying AI-created Designs, enhancing Customisation Options and flexibility. • Enabled Real-time Rendering of design modifications on 3D models, providing Instant Feedback to users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      }
    ],
    image: designwithspark,
    source_code_link: "https://github.com/saksham-gera/MyTee3D",
    live_link: "https://MyTee3D.vercel.app/"
  },
  {
    name: "LeasePosh",
    subtitle: "A Rental Wear Platform",
    description:
      "• A Rental Wear E-Commerce Platform Where one Can Rent Their Favourites. • Applied Axios, leading to 30% faster response times for API requests. • Implemented JWT for secure user Authentication and Authorization. • Enacted Context API for State Management, reducing code clutter by 20%.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "yellow-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
    ],
    image: leaseposh,
    source_code_link: "https://github.com/saksham-gera/leaseposh-website",
    live_link: "https://leaseposh.vercel.app/"
  },
  {
    name: "SVNIT Resume Builder",
    subtitle: "Streamlined Resume Generation Platform",
    description:
      "• Streamlined resume creation for 400+ SVNIT students by eliminating LaTeX-related hassles and formatting errors. • Applied Axios for API requests, improving response times by 30% and reducing latency. • Implemented JWT for secure user Authentication and Authorization, ensuring robust Data Protection. • Enacted Context API for efficient State Management, reducing code clutter by 20% and simplifying maintenance.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "orange-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "purple-text-gradient",
      },
    ],
    image: svnitresume,
    source_code_link: "https://github.com/saksham-gera/SVNIT-Resume-Builder",
    live_link: "https://svnit.make-it.ro/"
  },
];

export { services, technologies, experiences, testimonials, projects };
