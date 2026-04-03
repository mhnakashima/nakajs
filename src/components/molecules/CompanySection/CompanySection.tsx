import { ProjectCard } from '@molecules/ProjectCard';
import { ExternalLinkIcon } from '@/components/icons';
import type { CompanyEntry } from '@/types/experience';

interface CompanySectionProps {
  company: CompanyEntry;
  projectLabel: string;
  techLabel: string;
  showExternalLink?: boolean;
}

export function CompanySection({
  company,
  projectLabel,
  techLabel,
  showExternalLink = false,
}: CompanySectionProps) {
  return (
    <article className="space-y-5" aria-label={`${company.name} – ${company.role}`}>
      <div className="flex items-start gap-3">
        {company.logoImage ? (
          <img
            src={company.logoImage}
            alt={company.name}
            className="h-10 w-10 md:h-12 md:w-12 shrink-0 rounded-full object-contain bg-gray-50"
          />
        ) : (
          <span
            className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full text-sm md:text-base font-bold text-[#333] select-none"
            style={{ backgroundColor: company.logoBg }}
            aria-hidden="true"
          >
            {company.logoInitial}
          </span>
        )}

        <div>
          <div className="flex flex-wrap items-center gap-x-2">
            <h3 className="text-base md:text-lg font-bold text-[#0A0A0A] font-['Lato',sans-serif]">
              {company.name}
            </h3>
            <span className="text-xs md:text-sm text-[#888] font-['Lato',sans-serif]">
              | {company.period}
            </span>
            {showExternalLink && company.url && (
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#555] hover:text-[#0A0A0A] transition-colors"
                aria-label={`Visit ${company.name} website`}
              >
                <ExternalLinkIcon />
              </a>
            )}
          </div>
          <p className="text-sm md:text-base font-medium text-[#555] font-['Lato',sans-serif]">
            {company.role}
          </p>
        </div>
      </div>

      <ul className="list-disc space-y-2 pl-5 text-sm md:text-base leading-relaxed text-[#444] font-['Lato',sans-serif]">
        {company.responsibilities.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {company.projects.length > 0 && (
        <div className="mt-6">
          <h4 className="mb-4 text-sm md:text-base font-bold text-[#0A0A0A] font-['Lato',sans-serif]">
            {projectLabel}
          </h4>
          <div>
            {company.projects.map((project, i) => (
              <ProjectCard
                key={`${company.id}-project-${i}`}
                project={project}
                techLabel={techLabel}
                isLast={i === company.projects.length - 1}
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
