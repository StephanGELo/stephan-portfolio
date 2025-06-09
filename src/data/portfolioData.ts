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
  twitter:'https://x.com/lefortsge',
  instagram:'https://instagram.com/stephanlefort',
  profileImage1: '/images/ghibli-avatar.png',
  profileImage2:'/images/desert-photo.png',
  resume: '/assets/resume.pdf',
  showExperience: true,
  showProjects: true,

  // skills: [
  //   { name: 'React', level: 'Advanced', category: 'Frontend' },
  //   { name: 'JavaScript', level: 'Advanced', category: 'Frontend' },
  //   { name: 'Node.js', level: 'Intermediate', category: 'Backend' },
  //   { name: 'PostgreSQL', level: 'Intermediate', category: 'Database' },
  //   { name: 'Express.js', level: 'Intermediate', category: 'Backend' },
  //   { name: 'Tailwind CSS', level: 'Intermediate', category: 'Frontend' },
  //   { name: 'JWT', level: 'Intermediate', category: 'DevOps' },
  //   { name: 'Render Deployment', level: 'Intermediate', category: 'DevOps' }
  // ],
  skills : [
    { name: 'React', level: 'Advanced', category: 'Frontend' },
    { name: 'JavaScript', level: 'Advanced', category: 'Frontend' },
    { name: 'TypeScript', level: 'Intermediate', category: 'Frontend' },
    { name: 'Tailwind CSS', level: 'Intermediate', category: 'Frontend' },
    { name: 'Angular', level: 'Intermediate', category: 'Frontend' },
    { name: 'SmartAdmin', level: 'Intermediate', category: 'Frontend' },
    { name: 'Node.js', level: 'Intermediate', category: 'Backend' },
    { name: 'Express.js', level: 'Intermediate', category: 'Backend' },
    { name: 'Koa', level: 'Intermediate', category: 'Backend' },
    { name: 'Python', level: 'Intermediate', category: 'Backend' },
    { name: 'MongoDB', level: 'Intermediate', category: 'Database' },
    { name: 'PostgreSQL', level: 'Intermediate', category: 'Database' },
    { name: 'Redis', level: 'Intermediate', category: 'DevOps' },
    { name: 'Cassandra', level: 'Beginner', category: 'Database' },
    { name: 'BlueST SDK', level: 'Beginner', category: 'Backend' },
    { name: 'Raspberry Pi', level: 'Beginner', category: 'Hardware' },
    { name: 'New Relic', level: 'Beginner', category: 'DevOps' },
    { name: 'Artillery', level: 'Beginner', category: 'DevOps' },
    { name: 'Material-UI', level: 'Intermediate', category: 'Frontend' },
    { name: 'Axios', level: 'Intermediate', category: 'Frontend' }
  ],
  softwareExperience : [
    {
      title: 'Software Engineer',
      company: 'Track and Trace Platform',
      period: '2019',
      tech: ['Angular', 'SmartAdmin', 'ngx-datatable'],
      link: "",
      github: "",
      description: 'A web-based frontend platform with track and trace functionality for products. Built using SmartAdmin Plugins and Angular for a seamless UX. Integrated ngx-datatable to handle and present large datasets in responsive tables. Navigated between features using Angular Router for a fluid application experience.'
    },
    {
      title: 'Software Engineer',
      company: 'BlueST SDK Data Logger',
      period: '2019',
      tech: ['Python', 'BlueST SDK', 'Raspberry Pi'],
      link: "",
      github: "",
      description: 'A backend application to log data from BLE sensors attached to a Bart Car. Developed using Python and the BlueST SDK to record timestamped data to log files. Deployed and tested with Raspberry Pi for uninterrupted data collection — even with offline sensors.'
    },
    {
      title: 'Software Engineer',
      company: 'D.R.I.V.E',
      period: '2018',
      tech: ['Koa', 'Redis', 'New Relic', 'Cassandra', 'Artillery'],
      link: "",
      github: "",
      description: 'A backend microservice replica of a ride-sharing app like Uber/Lyft. Built a driver microservice with Koa to interface with other services. Used Redis cache to optimize read latency below 10ms. Load-tested with Artillery to handle 100+ RPS and monitored performance with New Relic. Used Cassandra to store 10M records with sub-40ms query times.'
    },
    {
      title: 'Software Engineer',
      company: 'Literary Litten',
      period: '2017',
      tech: ['React', 'Material-UI', 'Axios', 'MongoDB'],
      link: 'https://gitlit.herokuapp.com',
      github: "",
      description: 'A “Rotten Tomatoes for books” platform. Used React to render dynamic book cards, styled with Material-UI for a polished layout. Pulled bestseller info using Axios from multiple APIs and MongoDB. Hosted the app on Heroku.'
    }
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