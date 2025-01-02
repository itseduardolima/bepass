"use client";

import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from '@/mock/faq';



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