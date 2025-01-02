"use client";

import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

export default function FAQSection() {
  const t = useTranslations('faq');

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-12 text-center">
        {t('title')}
      </h2>
      <div className="grid md:grid-cols-2 md:gap-8">
        <Accordion type="single" collapsible className="w-full">
          {faqData.slice(0, 4).map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-primary font-medium">
                {t(item.questionKey)}
              </AccordionTrigger>
              <AccordionContent className="text-text">
                {t(item.answerKey)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          {faqData.slice(4).map((item, index) => (
            <AccordionItem key={index + 4} value={`item-${index + 4}`}>
              <AccordionTrigger className="text-left text-primary font-medium">
                {t(item.questionKey)}
              </AccordionTrigger>
              <AccordionContent className="text-text">
                {t(item.answerKey)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}