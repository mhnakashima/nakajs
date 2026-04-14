import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useI18n } from '@/context/I18nContext';
import type { TranslationKeys } from '@/types/i18n';

const BASE_URL = 'https://nakajs.vercel.app';

type MetaKey = keyof TranslationKeys;

interface RouteMeta {
  titleKey: MetaKey;
  descriptionKey: MetaKey;
}

const routeMetaMap: Record<string, RouteMeta> = {
  '/': { titleKey: 'meta.about.title', descriptionKey: 'meta.about.description' },
  '/experience': { titleKey: 'meta.experience.title', descriptionKey: 'meta.experience.description' },
  '/portfolio': { titleKey: 'meta.portfolio.title', descriptionKey: 'meta.portfolio.description' },
  '/contact': { titleKey: 'meta.contact.title', descriptionKey: 'meta.contact.description' },
  '/faq': { titleKey: 'meta.faq.title', descriptionKey: 'meta.faq.description' },
};

function setMetaTag(name: string, content: string, attribute = 'name') {
  let el = document.querySelector(`meta[${attribute}="${name}"]`);
  if (el) {
    el.setAttribute('content', content);
  } else {
    el = document.createElement('meta');
    el.setAttribute(attribute, name);
    el.setAttribute('content', content);
    document.head.appendChild(el);
  }
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (el) {
    el.href = href;
  } else {
    el = document.createElement('link');
    el.rel = 'canonical';
    el.href = href;
    document.head.appendChild(el);
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function usePageMeta() {
  const { pathname } = useLocation();
  const { t, locale } = useI18n();

  useEffect(() => {
    const meta = routeMetaMap[pathname];
    if (!meta) return;

    const title = t(meta.titleKey);
    const description = t(meta.descriptionKey);
    const canonical = `${BASE_URL}${pathname === '/' ? '' : pathname}`;

    document.title = title;
    setMetaTag('description', description);
    setCanonical(canonical);

    setMetaTag('og:title', title, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:url', canonical, 'property');

    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);

    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es' : 'en';

    if (window.gtag) {
      window.gtag('config', 'G-KQ33WX256D', {
        page_path: pathname,
        page_title: title,
      });
    }
  }, [pathname, t, locale]);
}
