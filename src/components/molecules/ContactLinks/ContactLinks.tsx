import { useMemo } from 'react';
import { useI18n } from '@/context/I18nContext';
import { EmailIcon, GlobeIcon, LinkedInIcon, GitHubIcon } from '@/components/icons';
import type { TranslationKeys } from '@/types/i18n';

interface ContactItem {
  icon: React.FC;
  labelKey: keyof TranslationKeys;
  value: string;
  href: string;
  external?: boolean;
}

const CONTACTS: ContactItem[] = [
  { icon: EmailIcon, labelKey: 'about.contactDetails.email', value: 'mhnakashima@gmail.com', href: 'mailto:mhnakashima@gmail.com' },
  { icon: GlobeIcon, labelKey: 'about.contactDetails.website', value: 'https://mhnakashima.com', href: 'https://mhnakashima.com', external: true },
  { icon: LinkedInIcon, labelKey: 'about.contactDetails.linkedin', value: 'mhnakashima', href: 'https://linkedin.com/in/mhnakashima', external: true },
  { icon: GitHubIcon, labelKey: 'about.contactDetails.github', value: 'mhnakashima', href: 'https://github.com/mhnakashima', external: true },
];

export function ContactLinksGrid() {
  const { t, locale } = useI18n();

  const contacts = useMemo(
    () => CONTACTS.map((c) => ({ ...c, label: t(c.labelKey) })),
    [t, locale],
  );

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
      {contacts.map(({ icon: Icon, label, value, href, external }) => (
        <a
          key={label}
          href={href}
          className="inline-flex items-center gap-2 text-xs text-[#0A0A0A] no-underline transition-colors hover:text-[#666] focus-visible:outline-2 focus-visible:outline-[#0A0A0A] focus-visible:outline-offset-4 focus-visible:rounded-sm md:gap-3 md:text-base"
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          aria-label={`${label}: ${value}`}
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-[#F5F5F5] shrink-0 md:w-9 md:h-9">
            <Icon />
          </span>
          <span>
            <span className="block text-xs text-[#888] font-normal md:text-sm">{label}</span>
            <span className="text-[#0A0A0A] text-xs md:text-sm">{value}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
