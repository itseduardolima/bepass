"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/mock/faq";

export default function FAQ() {
  const t = useTranslations("faq");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      className="py-24 px-4 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-semibold text-primary mb-12 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("title")}
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
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
      </motion.div>
    </motion.section>
  );
}