import { Wrapper, Dot } from './styles';

interface StatusBadgeProps {
  label: string;
  status: 'available' | 'unavailable' | 'busy';
  compact?: boolean;
  className?: string;
}

const colorMap = {
  available: '#22c55e',
  unavailable: '#ef4444',
  busy: '#f59e0b',
} as const;

export function StatusBadge({ label, status, compact = false, className }: StatusBadgeProps) {
  const color = colorMap[status];

  return (
    <Wrapper $color={color} $compact={compact} className={className} role="status" aria-label={label}>
      <Dot $color={color} $compact={compact} aria-hidden="true" />
      {label}
    </Wrapper>
  );
}
