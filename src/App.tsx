import { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '@organisms/Header';
import { BottomTabBar } from '@organisms/BottomTabBar';
import { siteConfig } from '@config/site';
import { useTranslation } from '@hooks/useTranslation';
import { useScrollPosition } from '@hooks/useScrollPosition';
import { useHeaderHeight } from '@hooks/useHeaderHeight';
import { I18nProvider } from '@/context/I18nContext';
import { Layout } from '@/components/organisms/Layout/Layout';
import { AppRoutes } from '@/routes';

export function App() {
  const { t, locale, setLocale } = useTranslation('en');
  const headerRef = useRef<HTMLElement>(null);
  const isScrolled = useScrollPosition(120);
  const headerHeight = useHeaderHeight(headerRef, isScrolled);

  return (
    <I18nProvider value={{ t, locale, setLocale }}>
      <BrowserRouter>
        <Header ref={headerRef} config={siteConfig} t={t} locale={locale} onLocaleChange={setLocale} />
        <Layout headerHeight={headerHeight}>
          <AppRoutes />
        </Layout>
        <BottomTabBar items={siteConfig.navigation} t={t} />
      </BrowserRouter>
    </I18nProvider>
  );
}
