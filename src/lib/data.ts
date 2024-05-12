export type ProjectProps = {
  title: string;
  projects: {
    name: string;
    description: string;
    liveDemo?: string;
    imageUrl: string;
    tags?: string[];
  }[];
};

export const personalInfo = {
  name: 'Mohammad Ward',
  title: 'Software Engineer',
  contact: {
    phone: '0582246070',
    email: 'mohamadward315@gmail.com',
    linkedin: 'http://www.linkedin.com/in/mohammad-ward-4a5839230',
    github: 'https://github.com/md-ward',
  },
} as const;

export const about = {
  description:
    'Experienced Software Engineer with a passion for full-stack and cross-platform app development. I specialize in React.js, Vite, Node.js, Express.js, MongoDB, SQL, and Flutter. With a strong track record of delivering high-quality software solutions, I have successfully completed multiple side projects that showcase my independent development skills.',
} as const;

export const experience: ProjectProps[] = [
  {
    title: 'Web Developer (Full-Stack Developer)',
    projects: [
      {
        name: 'Social Network App (Sigma)',
        description:
          'Developed user registration, authentication, account/profile creation, and updating functionality. Implemented features for setting a default image, generating usernames, handling friend requests, and creating/updating/deleting posts. Demonstrated proficiency in full-stack web development using a consistent set of technologies.',

        tags: [
          'MongoDb',
          'ReactJs',
          'ExpressJs',
          'NodeJs',
          'TailwindCss',
          'Framer Motion',
          'Css Animation',
          'AntDesign UI',
          'Socket.Io',
          'Zustand State management',
          'Responsive Design',
        ],
        imageUrl: '/assets/projetcs/sigma/login.jpg',
      },
      {
        name: 'E-Commerce Store (Shopy)',
        description:
          'Implemented user pages including Home, Shop, About, Contact Us, Shopping Cart, Checkout, User Logs, products filtering, and search functionality. Created an admin interface for login, statistics, product management, and order fulfillment. Handled product image upload and storage in both backend and frontend.',
        tags: [
          'MongoDb',
          'ReactJs',
          'ExpressJs',
          'NodeJs',
          'TailwindCss',
          'GSAP',
          'Css Animation',
        ],
        imageUrl: '/assets/projetcs/shoppy/Home page.jpeg',
      },
      {
        name: 'Notes and Task Manager App',
        description:
          'Comprehensive platform for managing notes and tasks collaboratively within a group of registered users. Incorporated features such as user invitations and real-time task updates using web sockets.',
        tags: [
          'MongoDb',
          'ReactJs',
          'ExpressJs',
          'NodeJs',
          'TailwindCss',
          'GSAP',
          'Css Animation',
        ],
        imageUrl: '/assets/projetcs/ay_analysis/home .png',
      },
      {
        name: 'Front-End Landing Page Site (Ocean Vibes)',
        description:
          'Developed an image gallery with responsive design for a landing page.',
        liveDemo: 'https://md-ward.github.io/ocean_vibes/',
        tags: [
          'MongoDb',
          'ReactJs',
          'ExpressJs',
          'NodeJs',
          'TailwindCss',
          'GSAP',
          'Css Animation',
        ],
        imageUrl: '/assets/projetcs/oceanvibes/homepage.png',
      },
      {
        name: 'Front-End Landing Page Site (Ya Analysis)',
        description:
          "Designed and implemented a landing page site to showcase a company's work. Implemented dark mode, smooth scrolling, and responsive design.",
        liveDemo: 'https://md-ward.github.io/ya_analysis/',
        tags: [
          'MongoDb',
          'ReactJs',
          'ExpressJs',
          'NodeJs',
          'TailwindCss',
          'GSAP',
          'Css Animation',
        ],
        imageUrl: '/assets/projetcs/ay_analysis/home .png',
      },
    ],
  },
  {
    title: 'Flutter Developer',
    projects: [
      {
        name: 'University Graduation Project',
        description:
          'Evaluated medical students during practical stages, incorporating specific standards from an English university. Created a comprehensive evaluation process to enhance the educational experience for students and provide valuable insights for instructors.',

        tags: ['SQFLit', 'Flutter', 'SharedPrefrenced', 'Http Lib'],
        imageUrl: '/assets/projetcs/4th-y/تسجيل دخول استاذ-مدير.png',
      },
      {
        name: 'University 4th Year Project',
        description:
          'Developed a Flutter-based Android app to improve parent-teacher communication in education. Provided a feedback and progress tracking system, along with a school-wide announcements page for important updates and events.',
        imageUrl: '',
      },
      {
        name: 'Reich-Text Editor',
        description:
          'Built a feature-rich text editor app that enables users to create advanced notes with various formatting options. Implemented SQLite database integration for secure note storage. Added functionalities like font customization and a dedicated section to save user/email and password for media apps.',
        imageUrl: '',
      },
    ],
  },
] as const;
export const education = {
  degree: 'Bachelor of Software Engineering',
  university: 'Al-Baath University',
  location: 'Homs, Syria',
  duration: '2018-2023',
} as const;

const _assets_dir = '/assets/language-logos/';

export const skills = {
  FullStack: [
    { title: 'React.js', img: _assets_dir + 'react.png' },
    { title: 'Vite', img: _assets_dir + 'vite.svg' },
    { title: 'Node.js', img: _assets_dir + 'nodejs.svg' },
    { title: 'Express.js', img: _assets_dir + 'express.svg' },
    { title: 'MongoDB', img: _assets_dir + 'mongodb.svg' },
    { title: 'SQL', img: _assets_dir + 'sqlite.svg' },
  ],
  'Cross Platform': [{ title: 'Flutter', img: _assets_dir + 'flutter.svg' }],
  'Data Analysis': [
    {
      title: 'Python (NumPy, Pandas, Matplotlib)',
      img: _assets_dir + 'python.svg',
    },
  ],
  Frontend: [
    { title: 'Tailwind CSS', img: _assets_dir + 'tailwind.png' },
    { title: 'Framer Motion', img: _assets_dir + 'framer-motion.svg' },
    { title: 'CSS', img: _assets_dir + 'css.png' },
    { title: 'HTML', img: _assets_dir + 'html.svg' },
  ],
  'Programming Languages': [
    { title: 'Python', img: _assets_dir + 'python.svg' },
    { title: 'JavaScript', img: _assets_dir + 'javascript.svg' },
    { title: 'TypeScript', img: _assets_dir + 'typescript.svg' },
    { title: 'Dart', img: _assets_dir + 'dart.svg' },
    { title: 'C++', img: _assets_dir + 'cpp.svg' },
  ],
  Languages: [
    { title: 'Arabic (Native)', img: _assets_dir + 'ar.svg' },
    { title: 'English (Intermediate)', img: _assets_dir + 'en.svg' },
  ],
} as const;
