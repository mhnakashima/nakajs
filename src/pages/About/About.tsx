import { useMemo } from 'react';
import { useI18n } from '@/context/I18nContext';
import { nl2br } from '@/utils/nl2br';
import { ContactLinksGrid } from '@molecules/ContactLinks';
import type { TranslationKeys } from '@/types/i18n';

interface DetailItem {
  labelKey: keyof TranslationKeys;
  valueKey: keyof TranslationKeys;
}

const DETAILS: DetailItem[] = [
  { labelKey: 'about.details.workExp.label', valueKey: 'about.details.workExp.value' },
  { labelKey: 'about.details.education.label', valueKey: 'about.details.education.value' },
  { labelKey: 'about.details.occupation.label', valueKey: 'about.details.occupation.value' },
  { labelKey: 'about.details.languages.label', valueKey: 'about.details.languages.value' },
  { labelKey: 'about.details.dob.label', valueKey: 'about.details.dob.value' },
];

export default function AboutPage() {
  const { t, locale } = useI18n();

  const details = useMemo(
    () => DETAILS.map((d) => ({ label: t(d.labelKey), value: t(d.valueKey) })),
    [t, locale],
  );

  return (
    <section className="mx-auto max-w-[960px] px-6 space-y-10 md:space-y-14" aria-labelledby="about-heading">
      <div>
        <h2 id="about-heading" className="text-[28px] font-black text-primary mb-4 md:text-[36px] md:mb-6">
          {t('about.title')}
        </h2>

        <div className="space-y-3 md:space-y-4">
          <p className="text-base leading-relaxed text-primary md:text-lg md:leading-relaxed">
            {t('about.bio.p1')}
          </p>
          <p className="text-base leading-relaxed text-primary md:text-lg md:leading-relaxed">
            {t('about.bio.p2')}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-black text-primary mb-5 tracking-wide md:text-base md:mb-6">
          {t('about.contactDetails')}
        </h3>
        <ContactLinksGrid />
      </div>

      <hr className="border-t border-border" />

      <div>
        <h3 className="text-sm font-black text-primary mb-5 tracking-wide md:text-base md:mb-6">
          {t('about.personalDetails')}
        </h3>

        <dl className="grid grid-cols-[120px_1fr] gap-x-8 gap-y-6 md:grid-cols-[180px_1fr] md:gap-x-12 md:gap-y-8">
          {details.map(({ label, value }) => (
            <div key={label} className="contents">
              <dt className="text-base font-light text-muted leading-snug md:text-lg">
                {nl2br(label)}
              </dt>
              <dd className="text-base font-normal text-primary leading-snug md:text-lg">
                {nl2br(value)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
