"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/mock/experiences";

export default function Experience() {
  const t = useTranslations("experience");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const slider = scrollContainerRef.current;
    if (!slider) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleStart = (e: MouseEvent | TouchEvent) => {
      isDown = true;
      slider.classList.add("active");
      startX = "touches" in e ? e.touches[0].pageX : e.pageX;
      scrollLeft = slider.scrollLeft;
    };

    const handleEnd = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = "touches" in e ? e.touches[0].pageX : e.pageX;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleStart);
    slider.addEventListener("touchstart", handleStart);
    slider.addEventListener("mouseleave", handleEnd);
    slider.addEventListener("mouseup", handleEnd);
    slider.addEventListener("touchend", handleEnd);
    slider.addEventListener("mousemove", handleMove);
    slider.addEventListener("touchmove", handleMove);

    return () => {
      slider.removeEventListener("mousedown", handleStart);
      slider.removeEventListener("touchstart", handleStart);
      slider.removeEventListener("mouseleave", handleEnd);
      slider.removeEventListener("mouseup", handleEnd);
      slider.removeEventListener("touchend", handleEnd);
      slider.removeEventListener("mousemove", handleMove);
      slider.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="bg-[#EAE7E5] pt-96 pb-8 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-semibold mb-4 text-primary">
            {t("title")}
          </h2>
          <p className="text-lg text-text mb-12">{t("description")}</p>
        </motion.div>
        <motion.div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto md:overflow-hidden scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex pb-5 space-x-4 md:space-x-5 px-4 md:px-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.titleKey}
                className="w-[280px] md:w-80 flex-shrink-0 rounded-2xl overflow-hidden relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Image
                  draggable="false"
                  src={exp.image}
                  alt={t(`alt.${exp.titleKey}`)}
                  quality={100}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white text-3xl font-semibold w-48 leading-tight">
                    {t(exp.titleKey)}
                  </h3>
                  <motion.button
                    className="w-8 h-8 bg-white rounded flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowRight className="text-primary h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
