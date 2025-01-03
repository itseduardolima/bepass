"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import PaymentPerson from "@/public/assets/images/payment-person.webp";
import PassLogo from "@/public/assets/images/logo.svg";

export default function Rates() {
  const t = useTranslations("rates");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      id="payments"
      ref={sectionRef}
      className="pb-24 px-5 lg:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          className="order-2 lg:order-1 lg:ml-24"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={PaymentPerson}
            alt={t("image_alt")}
            width={400}
            height={500}
            className="w-full h-auto max-w-[400px] rounded-2xl object-cover mx-auto lg:mx-0"
          />
        </motion.div>
        <motion.div
          className="order-1 lg:order-2 flex flex-col gap-6 max-w-[330px] lg:ml-24 mx-auto lg:mx-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            className="flex items-center justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image
              src={PassLogo}
              alt="PASS logo"
              width={100}
              height={33}
              className="w-24 lg:w-[100px] h-auto"
            />
            <span className="text-2xl font-semibold text-primary">.pay</span>
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-primary text-right leading-tight">
            {t("title")}
          </h2>
          <p className="text-base lg:text-lg text-primary text-right">
            {t("description")}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}