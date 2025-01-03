"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Phone from "@/public/assets/images/phone.svg";
import Logo from "@/public/assets/images/logo.svg";
import HeroBg from "@/public/assets/images/hero-bg.webp";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <>
      <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white/10 to-white/30">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={HeroBg}
            alt="Background"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </motion.div>
        <div className="relative z-10 bottom-32 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-primary">
              {t("title")}
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, x: -170, y: 100 }}
          animate={{ opacity: 1, x: -170, y: -230 }}
          transition={{ delay: 1, duration: 1, type: "spring", stiffness: 100 }}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-sm mx-auto px-4"
        >
          <div className="relative aspect-[380/514]">
            <Image
              src={Phone}
              alt="Phone mockup"
              fill
              className="object-contain z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute inset-[18%] inset-y-1 rounded-[35px] bg-white flex items-center justify-center"
            >
              <Image
                src={Logo}
                alt="PASS logo"
                width={100}
                height={33}
                className="w-1/2 h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
