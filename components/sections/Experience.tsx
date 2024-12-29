"use client";

import { useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

// Import images
import ParkImage from "@/public/assets/images/park.webp";
import HotelImage from "@/public/assets/images/hotel.webp";
import BarImage from "@/public/assets/images/bar.webp";
import BusinessImage from "@/public/assets/images/negocios.jpg";
import { ArrowRight } from 'lucide-react';


export interface Experience {
  titleKey: string;
  image: StaticImageData;
}

const experiences: Experience[] = [
  { titleKey: "parks_agencies", image: ParkImage },
  { titleKey: "hotels_resorts", image: HotelImage },
  { titleKey: "bars_restaurants", image: BarImage },
  { titleKey: "business_companies", image: BusinessImage },
];

export default function ExperienceSection() {
  const t = useTranslations("experience");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = scrollContainerRef.current;
    if (!slider) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    let velocity = 0;
    let rafId: number | null = null;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.style.cursor = "grabbing";
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      cancelAnimationFrame(rafId!);
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.style.cursor = "grab";
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.style.cursor = "grab";
      animateScroll();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      const prevScrollLeft = slider.scrollLeft;
      slider.scrollLeft = scrollLeft - walk;
      velocity = slider.scrollLeft - prevScrollLeft;
    };

    const animateScroll = () => {
      if (Math.abs(velocity) > 0.1) {
        slider.scrollLeft += velocity * 0.95;
        velocity *= 0.95;
        rafId = requestAnimationFrame(animateScroll);
      }
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
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
          className="w-full overflow-x-hidden scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        >
          <div className="flex pb-5 space-x-5">
            {experiences.map((exp) => (
              <div
                key={exp.titleKey}
                className="w-80 flex-shrink-0 rounded-2xl overflow-hidden relative"
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