"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  questionKey: string;
  answerKey: string;
}

const faqData: FAQItem[] = [
  { questionKey: "faq_question_1", answerKey: "faq_answer_1" },
  { questionKey: "faq_question_2", answerKey: "faq_answer_2" },
  { questionKey: "faq_question_3", answerKey: "faq_answer_3" },
  { questionKey: "faq_question_4", answerKey: "faq_answer_4" },
  { questionKey: "faq_question_5", answerKey: "faq_answer_5" },
  { questionKey: "faq_question_6", answerKey: "faq_answer_6" },
  { questionKey: "faq_question_7", answerKey: "faq_answer_7" },
  { questionKey: "faq_question_8", answerKey: "faq_answer_8" }
];

function FAQItem({ item }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('faq');

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left text-primary font-medium focus:outline-none focus:ring-2 focus:ring-primary"
        aria-expanded={isOpen}
      >
        <span>{t(item.questionKey)}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-primary transition-transform duration-200",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <p className="py-4 pr-8 text-text">{t(item.answerKey)}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const t = useTranslations('faq');

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-12 text-center">
        {t('title')}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {faqData.map((item, index) => (
          <FAQItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}