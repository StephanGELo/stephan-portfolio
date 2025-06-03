export interface Skill {
    name: string;
    level: number;
    category: string;
  }
  
  export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
  }
  
  export interface Education {
    degree: string;
    school: string;
    period: string;
    gpa?: string;
  }
  
  export interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    github: string;
  }
  
  export interface PortfolioData {
    name: string;
    title: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    skills: Skill[];
    experience: Experience[];
    education: Education[];
    projects: Project[];
  }