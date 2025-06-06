export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
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
  bio: string; // Consider validating or truncating to ~250 characters for responsive layout compatibility
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  twitter: string;
  instagram: string;
  profileImage1: string;
  profileImage2: string;
  resume: string;
  showExperience?: boolean;
  showProjects?: boolean;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
}

