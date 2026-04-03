import { TechBadge } from '@molecules/TechBadge';
import type { ProjectEntry } from '@/types/experience';

interface ProjectCardProps {
  project: ProjectEntry;
  techLabel: string;
  isLast: boolean;
}

export function ProjectCard({ project, techLabel, isLast }: ProjectCardProps) {
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center shrink-0 w-4">
        <span className="mt-1.5 block h-3 w-3 rounded-full bg-[#0A0A0A] shrink-0" />
        {!isLast && <span className="flex-1 w-px bg-[#D4D4D4]" />}
      </div>

      <div className={`space-y-3 pb-8 ${isLast ? 'pb-0' : ''}`}>
        <div>
          <h4 className="text-sm md:text-base font-semibold text-[#0A0A0A] font-['Lato',sans-serif]">
            {project.name}
          </h4>
          <span className="text-xs md:text-sm text-[#888] font-['Lato',sans-serif]">
            {project.period}
          </span>
        </div>

        <p className="text-sm md:text-base leading-relaxed text-[#444] font-['Lato',sans-serif]">
          {project.description}
        </p>

        <div className="space-y-2">
          <h5 className="text-xs md:text-sm font-semibold text-[#0A0A0A] font-['Lato',sans-serif]">
            {techLabel}
          </h5>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, i) => (
              <TechBadge key={`${tech.name}-${i}`} item={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
