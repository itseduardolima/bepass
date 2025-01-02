"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from 'lucide-react';
import { experiences } from "@/mock/experiences";


export default function ExperienceSection() {
  const t = useTranslations("experience");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = scrollContainerRef.current;
    if (!slider) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleStart = (e: MouseEvent | TouchEvent) => {
      isDown = true;
      slider.classList.add('active');
      startX = 'touches' in e ? e.touches[0].pageX : e.pageX;
      scrollLeft = slider.scrollLeft;
    };

    const handleEnd = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = 'touches' in e ? e.touches[0].pageX : e.pageX;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', handleStart);
    slider.addEventListener('touchstart', handleStart);
    slider.addEventListener('mouseleave', handleEnd);
    slider.addEventListener('mouseup', handleEnd);
    slider.addEventListener('touchend', handleEnd);
    slider.addEventListener('mousemove', handleMove);
    slider.addEventListener('touchmove', handleMove);

    return () => {
      slider.removeEventListener('mousedown', handleStart);
      slider.removeEventListener('touchstart', handleStart);
      slider.removeEventListener('mouseleave', handleEnd);
      slider.removeEventListener('mouseup', handleEnd);
      slider.removeEventListener('touchend', handleEnd);
      slider.removeEventListener('mousemove', handleMove);
      slider.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return (
    <section className="bg-[#EAE7E5] pt-96 pb-8 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-primary">
            {t("title")}
          </h2>
          <p className="text-lg text-text mb-12">{t("description")}</p>
        </div>
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto md:overflow-hidden scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        >
          <div className="flex pb-5 space-x-4 md:space-x-5 px-4 md:px-0">
            {experiences.map((exp) => (
              <div
                key={exp.titleKey}
                className="w-[280px] md:w-80 flex-shrink-0 rounded-2xl overflow-hidden relative"
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
                  <button className="w-8 h-8 bg-white rounded flex items-center justify-center transition-transform duration-200 hover:scale-110">
                    <ArrowRight className="text-primary" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}