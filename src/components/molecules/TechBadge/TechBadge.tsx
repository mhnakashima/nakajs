import { techIconMap } from '@/config/techIcons';
import type { TechItem } from '@/types/experience';

interface TechBadgeProps {
  item: TechItem;
}

export function TechBadge({ item }: TechBadgeProps) {
  const entry = techIconMap[item.name];
  const Icon = entry?.icon;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-normal text-[#333] whitespace-nowrap">
      {Icon ? (
        <Icon size={12} color="#000000" aria-hidden="true" className="shrink-0" />
      ) : (
        <span
          className="inline-block h-2 w-2 rounded-full shrink-0 bg-black"
          aria-hidden="true"
        />
      )}
      {item.name}
    </span>
  );
}
