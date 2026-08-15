export type ProjectCategory = 'all' | 'saas' | 'automation' | 'web';

export interface Project {
  id: string;
  title: string;
  category: 'saas' | 'automation' | 'web';
  featured: boolean;
  tagline: string;
  description: string;
  fullDescription?: string;
  stack: string[];
  architectureSpecs?: string[];
  metrics?: { label: string; value: string }[];
  demoUrl?: string;
  githubUrl?: string;
  whatsappDemoUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  socialCallout?: string;
  badgeText?: string;
  featuredOrder?: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  stack?: string[];
  type: 'founder' | 'freelancer' | 'leadership' | 'volunteer' | 'operational' | 'support';
  highlightBadge?: string;
}

export interface Education {
  id: string;
  title: string;
  institution: string;
  period: string;
  status: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    isKeySkill?: boolean;
    description?: string;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface ProfileData {
  name: string;
  roleTitle: string;
  subtitle: string;
  bioText: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  github: string;
  linkedin: string;
  instagram: string;
  whatsappUrl: string;
}
