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

export const experience = [
  {
    title: 'Web Developer (Full-Stack Developer)',
    projects: [
      {
        name: 'Social Network App (Sigma)',
        description:
          'Developed user registration, authentication, account/profile creation, and updating functionality. Implemented features for setting a default image, generating usernames, handling friend requests, and creating/updating/deleting posts. Demonstrated proficiency in full-stack web development using a consistent set of technologies.',
      },
      {
        name: 'E-Commerce Store (Shopy)',
        description:
          'Implemented user pages including Home, Shop, About, Contact Us, Shopping Cart, Checkout, User Logs, products filtering, and search functionality. Created an admin interface for login, statistics, product management, and order fulfillment. Handled product image upload and storage in both backend and frontend.',
      },
      {
        name: 'Notes and Task Manager App',
        description:
          'Comprehensive platform for managing notes and tasks collaboratively within a group of registered users. Incorporated features such as user invitations and real-time task updates using web sockets.',
      },
      {
        name: 'Front-End Landing Page Site (Ya Analysis)',
        description:
          "Designed and implemented a landing page site to showcase a company's work. Implemented dark mode, smooth scrolling, and responsive design.",
        liveDemo: 'https://md-ward.github.io/ya_analysis/',
      },
      {
        name: 'Front-End Landing Page Site (Ocean Vibes)',
        description:
          'Developed an image gallery with responsive design for a landing page.',
        liveDemo: 'https://md-ward.github.io/ocean_vibes/',
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
      },
      {
        name: 'University 4th Year Project',
        description:
          'Developed a Flutter-based Android app to improve parent-teacher communication in education. Provided a feedback and progress tracking system, along with a school-wide announcements page for important updates and events.',
      },
      {
        name: 'Reich-Text Editor',
        description:
          'Built a feature-rich text editor app that enables users to create advanced notes with various formatting options. Implemented SQLite database integration for secure note storage. Added functionalities like font customization and a dedicated section to save user/email and password for media apps.',
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

export const skills = {
  fullStack: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'SQL'],
  crossPlatform: ['Flutter'],
  dataAnalysis: ['Python (NumPy, Pandas, Matplotlib)'],
  frontend: [
    'Tailwind CSS',
    'GSAP (GreenSock Animation Platform)',
    'CSS',
    'HTML',
  ],
  programmingLanguages: ['Python', 'JavaScript', 'Dart', 'C++'],
  languages: ['Arabic (Native)', 'English (Intermediate)'],
} as const;
