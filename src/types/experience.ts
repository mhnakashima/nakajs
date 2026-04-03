import type { Locale } from './i18n';

export interface TechItem {
  name: string;
  color?: string;
}

export interface ProjectEntry {
  name: string;
  period: string;
  description: string;
  techStack: TechItem[];
}

export interface CompanyEntry {
  id: string;
  name: string;
  logoInitial: string;
  logoBg: string;
  logoImage?: string;
  url?: string;
  period: string;
  role: string;
  responsibilities: string[];
  projects: ProjectEntry[];
}

export type ExperienceData = Record<Locale, CompanyEntry[]>;
