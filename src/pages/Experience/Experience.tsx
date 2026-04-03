import { useI18n } from '@/context/I18nContext';
import { experienceData } from '@/config/experience';
import { CompanySection } from '@molecules/CompanySection';

export default function ExperiencePage() {
  const { t, locale } = useI18n();
  const companies = experienceData[locale];

  return (
    <section
      className="mx-auto max-w-[960px] px-6 md:px-6"
      aria-labelledby="experience-heading"
    >
      <h2
        id="experience-heading"
        className="mb-4 text-[28px] md:text-[36px] md:mb-6 font-black text-[#0A0A0A] font-['Lato',sans-serif]"
      >
        {t('experience.title')}
      </h2>

      <div className="space-y-12">
        {companies.map((company) => (
          <CompanySection
            key={company.id}
            company={company}
            projectLabel={t('experience.projects')}
            techLabel={t('experience.techStack')}
          />
        ))}
      </div>
    </section>
  );
}
