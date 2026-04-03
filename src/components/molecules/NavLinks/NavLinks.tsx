import { NavLinkItem } from '@atoms/NavLink';
import type { NavItem } from '@/types/navigation';
import type { TranslationKeys } from '@/types/i18n';
import { List, Separator } from './styles';

interface NavLinksProps {
  items: NavItem[];
  t: (key: keyof TranslationKeys) => string;
  direction?: 'row' | 'column';
  onNavigate?: () => void;
  className?: string;
}

export function NavLinks({
  items,
  t,
  direction = 'row',
  onNavigate,
  className,
}: NavLinksProps) {
  const enabledItems = items.filter((item) => item.enabled);

  return (
    <List $direction={direction} className={className} aria-label="Main navigation">
      {enabledItems.map((item, i) => (
        <>
          <span key={item.id} onClick={onNavigate} role="presentation">
            <NavLinkItem
              to={item.path}
              label={t(item.labelKey as keyof TranslationKeys)}
            />
          </span>
          {direction === 'row' && i < enabledItems.length - 1 && (
            <Separator key={`sep-${item.id}`} aria-hidden="true">|</Separator>
          )}
        </>
      ))}
    </List>
  );
}
