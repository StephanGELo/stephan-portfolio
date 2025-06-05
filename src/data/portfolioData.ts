// The main data object for dynamic content
import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  name: 'Stephan Lefort',
  title: 'Frontend-Focused Full Stack Developer',
  bio: `Full stack developer with a civil engineering background, passionate about building efficient, user-centric applications. I specialize in React, Node.js, PostgreSQL, and Tailwind CSS. I enjoy bridging the gap between design and development—especially in the construction tech space.`,
  email: 'stephanelluel@gmail.com',
  phone: '',
  location: 'California, USA',
  linkedin: 'https://www.linkedin.com/in/stephan-lefort/',
  github: 'https://github.com/StephanGELo',
  profileImage1: '/images/ghibli-avatar.png',
  profileImage2:'/images/desert-photo.png',
  resume: '/assets/resume.pdf',
  showExperience: true,
  showProjects: true,

  skills: [
    { name: 'React', level: 'Advanced', category: 'Frontend' },
    { name: 'JavaScript', level: 'Advanced', category: 'Frontend' },
    { name: 'Node.js', level: 'Intermediate', category: 'Backend' },
    { name: 'PostgreSQL', level: 'Intermediate', category: 'Database' },
    { name: 'Express.js', level: 'Intermediate', category: 'Backend' },
    { name: 'Tailwind CSS', level: 'Intermediate', category: 'Frontend' },
    { name: 'JWT', level: 'Intermediate', category: 'DevOps' },
    { name: 'Render Deployment', level: 'Intermediate', category: 'DevOps' }
  ],

  experience: [
    {
      title: "Resident Engineer",
      company: "Arup Singapore Pte Ltd",
      period: "2012 - 2016",
      description: "Led a team on a $1.67B project; managed structural workflows and technical troubleshooting."
    },
    {
      title: "Resident Engineer",
      company: "CPG Corporation Pte Ltd",
      period: "2008 - 2012",
      description: "Supervised construction QA and coordinated design changes to optimize project outcomes."
    },
    {
      title: "Project Engineer",
      company: "Hon Industries Pte Ltd",
      period: "2005 - 2008",
      description: "Oversaw services and structural coordination across engineering teams."
    }
  ],
  education: [
    {
      degree: "Advanced Software Engineering Immersive",
      school: "Hack Reactor",
      period: "",
      gpa: ""
    },
    {
      degree: "Bachelor’s Degree in Civil Engineering",
      school: "National University of Singapore",
      period: "",
      gpa: ""
    }
  ],
  projects: [
    {
      title: "InOut QR",
      description: "A full-stack web app for employee attendance and timesheet management with QR check-in, secured routes, and dashboards.",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "JWT"],
      link: "https://inoutqr-frontend.onrender.com/",
      github: "https://github.com/StephanGELo/InOut_QR"
    },
    {
      title: "Task Manager App (Planned)",
      description: "Real-time task collaboration app using React and Firebase.",
      tech: ["React", "Firebase"],
      link: "",
      github: ""
    },
    {
      title: "E-commerce Frontend Clone (Planned)",
      description: "Product catalog with cart and search filtering.",
      tech: ["React", "Tailwind CSS"],
      link: "",
      github: ""
    }
  ]
};