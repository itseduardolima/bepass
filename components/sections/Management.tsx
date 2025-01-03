"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import LaptopUser from "@/public/assets/images/laptop-user.webp";
import { Button } from "../ui/button";

export default function Management() {
  const t = useTranslations("management");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full min-h-[600px] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0">
        <Image
          src={LaptopUser}
          alt="laptop user"
          fill
          className="object-cover object-left-center scale-x-[-1]"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto min-h-[600px] flex items-center px-5">
        <motion.div
          className="max-w-[500px] relative z-10 p-2 rounded-lg md:p-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-primary mb-6 leading-tight">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg text-text mb-8">
            {t("description")}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" className="group">
              {t("see_our_products")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}