import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { usePageMeta } from '@hooks/usePageMeta';

const AboutPage = lazy(() => import('@pages/About/About'));
const ExperiencePage = lazy(() => import('@pages/Experience/Experience'));
const PortfolioPage = lazy(() => import('@pages/Portfolio/Portfolio'));
const ContactPage = lazy(() => import('@pages/Contact/Contact'));
const FAQPage = lazy(() => import('@pages/FAQ/FAQ'));

function PageFallback() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="flex items-center justify-center min-h-[40vh]"
    >
      <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-800 rounded-full animate-spin" />
    </div>
  );
}

export function AppRoutes() {
  usePageMeta();

  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </Suspense>
  );
}
