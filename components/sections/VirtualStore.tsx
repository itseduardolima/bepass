"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import ComputerFrame from "@/public/assets/images/computer.png";
import WebsiteScreen from "@/public/assets/images/website.webp";
import { Button } from "../ui/button";

export default function VirtualStore() {
  const t = useTranslations("virtual_store");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      className="pt-32 md:pt-96 px-4 max-w-7xl mx-auto overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-32">
        <motion.div
          className="w-full md:w-[460px] flex flex-col"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg text-text mb-8">
            {t("description")}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" className="px-5 py-2 w-fit group">
              <span className="font-medium">{t("schedule_demo")}</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex-1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: isInView ? 1 : 0.8, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative w-full max-w-[600px] mx-auto">
            <Image
              src={ComputerFrame}
              alt=""
              className="w-full h-auto"
              priority
            />
            <motion.div
              className="absolute top-[3%] left-[11.5%] w-[82%] h-[60%] overflow-hidden rounded-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Image
                src={WebsiteScreen}
                alt={t("interface_alt")}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}