import { useState, useRef, useCallback } from 'react';
import { useI18n } from '@/context/I18nContext';
import { portfolioData } from '@/config/portfolio';
import { CompanySection } from '@molecules/CompanySection';
import type { ShowcaseProject } from '@/types/portfolio';

function ShowcaseCard({
  project,
  isSelected,
  onSelect,
}: {
  project: ShowcaseProject;
  isSelected: boolean;
  onSelect: (project: ShowcaseProject) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group flex flex-col items-center gap-3 w-full text-center cursor-pointer"
      aria-label={`${project.name} – click to view details`}
      aria-pressed={isSelected}
    >
      <div
        className={`flex h-24 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-50 p-4 md:h-32 transition-all duration-200 ${
          isSelected ? 'ring-2 ring-[#0A0A0A] ring-offset-4' : ''
        }`}
      >
        <img
          src={project.image}
          alt={project.name}
          className={`max-h-full max-w-full object-contain transition-all duration-300 ${
            project.enabled
              ? 'grayscale-0 opacity-100 group-hover:scale-105'
              : 'grayscale opacity-40 group-hover:opacity-60 group-hover:scale-105'
          }`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <span
        className={`text-xs md:text-sm font-medium font-['Lato',sans-serif] ${
          project.enabled ? 'text-[#0A0A0A]' : 'text-[#999]'
        }`}
      >
        {project.name}
      </span>
    </button>
  );
}

export default function PortfolioPage() {
  const { t, locale } = useI18n();
  const projects = portfolioData[locale];
  const detailRef = useRef<HTMLDivElement>(null);

  const firstWithDetails = projects.find((p) => p.enabled && p.details);
  const [selectedId, setSelectedId] = useState<string | null>(
    firstWithDetails?.id ?? null,
  );

  const selected = projects.find((p) => p.id === selectedId);

  const handleSelect = useCallback((project: ShowcaseProject) => {
    setSelectedId(project.id);
    if (project.details) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, []);

  return (
    <section
      className="mx-auto max-w-[960px] px-6 md:px-6"
      aria-labelledby="portfolio-heading"
    >
      <h2
        id="portfolio-heading"
        className="mb-4 text-[28px] md:text-[36px] md:mb-6 font-black text-[#0A0A0A] font-['Lato',sans-serif]"
      >
        {t('portfolio.title')}
      </h2>

      {selected?.details && (
        <div ref={detailRef} className="mb-12">
          <CompanySection
            company={selected.details}
            projectLabel={t('portfolio.project')}
            techLabel={t('portfolio.techStack')}
            showExternalLink={selected.enabled}
          />
        </div>
      )}

      <div className="mt-16">
        <h3 className="mb-8 text-sm md:text-base font-black text-[#0A0A0A] tracking-wide font-['Lato',sans-serif]">
          {t('portfolio.anotherProjects')}
        </h3>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-10">
          {projects.map((project) => (
            <ShowcaseCard
              key={project.id}
              project={project}
              isSelected={project.id === selectedId}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
