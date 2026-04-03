import type { Locale } from './i18n';
import type { CompanyEntry } from './experience';

export interface ShowcaseProject {
  id: string;
  name: string;
  image: string;
  url?: string;
  enabled: boolean;
  details?: CompanyEntry;
}

export type PortfolioDataByLocale = Record<Locale, ShowcaseProject[]>;
