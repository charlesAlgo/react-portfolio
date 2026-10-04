/**
 * portfolioData.js
 * Single source of truth for all personal content shown on the site.
 * Replace the PLACEHOLDER values below with your real details – no other file
 * needs to change for the content to update everywhere.
 *
 * Image paths are relative to the /public folder (e.g. "images/profile.svg").
 */

export const personalInfo = {
  legalName: 'Charles Shalua',
  initials: 'CS',
  jobTitle: 'Web Developer & Computer Science Student', // PLACEHOLDER
  profileImage: 'images/profile.svg', // PLACEHOLDER – swap for a head-and-shoulders photo
  resumeFile: 'resume.pdf', // PLACEHOLDER – swap for your real resume
  welcomeMessage:
    'Welcome! I build clean, accessible and responsive websites and applications.',
  missionStatement:
    'My mission is to use technology to solve real problems for real people – writing code that is simple to use, easy to maintain and built to last.',
  // Short paragraphs shown on the About page
  aboutParagraphs: [
    'I am a Computer Science student with a passion for web development and user-centred design. I enjoy turning ideas into working products, from the first sketch to the final deployment.', // PLACEHOLDER
    'Outside of class I build personal projects, contribute to team assignments and keep learning new tools. I am looking for opportunities where I can grow as a developer and add value to a team.', // PLACEHOLDER
  ],
}

export const contactInfo = {
  email: 'your.email@example.com', // PLACEHOLDER
  phone: '+1 (555) 123-4567', // PLACEHOLDER
  location: 'Your City, Country', // PLACEHOLDER
  githubUrl: 'https://github.com/charlesAlgo',
  linkedinUrl: 'https://www.linkedin.com/', // PLACEHOLDER
}

export const projects = [
  {
    id: 'task-manager',
    title: 'Task Manager App', // PLACEHOLDER
    image: 'images/project-1.svg',
    role: 'Solo developer – design, front end and local storage',
    description:
      'A to-do application that lets users create, edit, filter and complete tasks. Tasks persist in the browser between visits.',
    outcome: 'Delivered on time and used daily by classmates to track coursework.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard', // PLACEHOLDER
    image: 'images/project-2.svg',
    role: 'Front-end developer in a team of three',
    description:
      'A dashboard that fetches live weather data from a public API and shows a five-day forecast for any searched city.',
    outcome: 'Achieved the highest grade in the group project and improved my API skills.',
    technologies: ['React', 'REST API', 'CSS'],
  },
  {
    id: 'restaurant-site',
    title: 'Restaurant Website', // PLACEHOLDER
    image: 'images/project-3.svg',
    role: 'Lead designer and developer',
    description:
      'A responsive multi-page website for a local restaurant with a menu, photo gallery and reservation form.',
    outcome: 'Client reported more online reservations after launch.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
]

export const education = [
  {
    id: 'bsc',
    qualification: 'Bachelor of Science in Computer Science', // PLACEHOLDER
    institution: 'Your University',
    startYear: '2024',
    endYear: '2028 (expected)',
    details: 'Coursework: Web Design, Data Structures, Databases, Software Engineering.',
  },
  {
    id: 'cert-web',
    qualification: 'Responsive Web Design Certification', // PLACEHOLDER
    institution: 'freeCodeCamp',
    startYear: '2023',
    endYear: '2023',
    details: 'HTML, CSS, Flexbox, Grid and accessibility fundamentals.',
  },
  {
    id: 'high-school',
    qualification: 'High School Diploma', // PLACEHOLDER
    institution: 'Your High School',
    startYear: '2020',
    endYear: '2024',
    details: 'Graduated with honours in Mathematics and Computer Studies.',
  },
]

export const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    image: 'images/service-web.svg',
    description: 'Fast, responsive websites built with modern HTML, CSS, JavaScript and React.',
  },
  {
    id: 'ui-design',
    title: 'UI / UX Design',
    image: 'images/service-design.svg',
    description: 'Clean, accessible interfaces designed around how people actually use them.',
  },
  {
    id: 'general-programming',
    title: 'General Programming',
    image: 'images/service-code.svg',
    description: 'Scripts, tools and small applications in JavaScript, Python and Java.',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile-Friendly Apps',
    image: 'images/service-mobile.svg',
    description: 'Web apps that work smoothly on phones, tablets and desktops alike.',
  },
]
