import { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/context/I18nContext';
import { ChevronIcon } from '@/components/icons';
import type { TranslationKeys } from '@/types/i18n';

const FAQ_KEYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

function renderAnswer(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, i) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const label = linkMatch[1]!;
      const href = linkMatch[2]!;
      if (href.startsWith('/')) {
        return (
          <Link
            key={i}
            to={href}
            className="text-[#0A0A0A] underline underline-offset-2 hover:text-[#555] transition-colors"
          >
            {label}
          </Link>
        );
      }
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A0A0A] underline underline-offset-2 hover:text-[#555] transition-colors"
        >
          {label}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="border-b border-[#ECECEC]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-answer`}
        id={`${id}-question`}
        className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer"
      >
        <span className="text-base md:text-lg italic text-[#333] font-['Lato',sans-serif]">
          {question}
        </span>
        <ChevronIcon open={isOpen} />
      </button>

      <div
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-question`}
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-sm md:text-base leading-relaxed text-[#555] font-['Lato',sans-serif] pl-0 md:pl-1">
          {renderAnswer(answer)}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const { t, locale } = useI18n();
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = useCallback((id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const items = useMemo(
    () =>
      FAQ_KEYS.map((n) => ({
        id: n,
        question: t(`faq.q${n}` as keyof TranslationKeys),
        answer: t(`faq.a${n}` as keyof TranslationKeys),
      })),
    [t, locale],
  );

  return (
    <section
      className="mx-auto max-w-[960px] px-6"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="mb-4 text-[28px] md:text-[36px] md:mb-6 font-black text-[#0A0A0A] font-['Lato',sans-serif]"
      >
        {t('faq.title')}
      </h2>

      <div role="list">
        {items.map(({ id, question, answer }) => (
          <FAQItem
            key={id}
            id={`faq-${id}`}
            question={question}
            answer={answer}
            isOpen={openId === id}
            onToggle={() => handleToggle(id)}
          />
        ))}
      </div>
    </section>
  );
}
