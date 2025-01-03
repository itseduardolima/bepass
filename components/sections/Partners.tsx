"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import PassBuilding from "@/public/assets/images/pass-building.webp";
import { Button } from "../ui/button";

export default function Partners() {
  const t = useTranslations("partners");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      className="bg-[#EAE7E5] pt-24 h-[700px] md:h-[750px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          className="max-w-3xl mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6 leading-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-text mb-8">{t("description")}</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" className="group">
              {t("how_it_works")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full max-w-3xl rounded-lg overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: isInView ? 1 : 0.8, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src={PassBuilding}
            alt={t("building_alt")}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}