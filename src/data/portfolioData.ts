// The main data object for dynamic content
import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Stephan Lefort",
  title: "Frontend-Focused Full Stack Developer",
  bio: "Detail-oriented developer with a strong foundation in frontend technologies and a background in civil engineering. Proficient in React, Node.js, and PostgreSQL. Passionate about leveraging software to improve construction workflows and operations.",
  email: "stephanelluel@gmail.com",
  phone: "", // Phone number intentionally omitted for privacy
  location: "California, USA",
  skills: [
    { name: "React", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "PostgreSQL", level: 70, category: "Database" },
    { name: "Express.js", level: 70, category: "Backend" },
    { name: "Tailwind CSS", level: 80, category: "Frontend" },
    { name: "JWT", level: 65, category: "DevOps" },
    { name: "Render Deployment", level: 70, category: "DevOps" }
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