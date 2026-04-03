import type { NavItem } from '@/types/navigation';
import type { TranslationKeys } from '@/types/i18n';
import {
  PersonIcon,
  BriefcaseIcon,
  GridIcon,
  MailIcon,
  HelpIcon,
} from '@/components/icons';
import { Bar, TabLink, TabLabel } from './styles';

interface BottomTabBarProps {
  items: NavItem[];
  t: (key: keyof TranslationKeys) => string;
}

const iconMap: Record<string, React.FC> = {
  about: PersonIcon,
  experience: BriefcaseIcon,
  portfolio: GridIcon,
  contact: MailIcon,
  faq: HelpIcon,
};

const shortLabelMap: Record<string, keyof TranslationKeys> = {
  about: 'nav.about',
  experience: 'nav.experience',
  portfolio: 'nav.portfolio',
  contact: 'nav.contact',
  faq: 'nav.faq',
};

export function BottomTabBar({ items, t }: BottomTabBarProps) {
  const enabledItems = items.filter((item) => item.enabled);

  return (
    <Bar aria-label="Main navigation">
      {enabledItems.map((item) => {
        const Icon = iconMap[item.id];
        const labelKey = shortLabelMap[item.id] ?? item.labelKey;

        return (
          <TabLink key={item.id} to={item.path} end={item.path === '/'}>
            {Icon && <Icon />}
            <TabLabel>{t(labelKey as keyof TranslationKeys)}</TabLabel>
          </TabLink>
        );
      })}
    </Bar>
  );
}
