import type { SiteConfig } from '@/types/navigation';

export const siteConfig: SiteConfig = {
  navigation: [
    { id: 'about', labelKey: 'nav.about', path: '/', enabled: true },
    { id: 'experience', labelKey: 'nav.experience', path: '/experience', enabled: true },
    { id: 'portfolio', labelKey: 'nav.portfolio', path: '/portfolio', enabled: true },
    { id: 'contact', labelKey: 'nav.contact', path: '/contact', enabled: true },
    { id: 'faq', labelKey: 'nav.faq', path: '/faq', enabled: true },
  ],
  availability: {
    labelKey: 'availability.available',
    status: 'available',
    visible: true,
  },
  owner: {
    name: 'Michael Nakashima | Naka',
    role: 'Front-end Engineer',
    avatarUrl: '/images/avatar.webp',
  },
};
