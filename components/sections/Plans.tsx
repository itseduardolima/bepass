"use client";

import { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useCurrency } from "@/contexts/CurrencyContext";
import { plansData } from "@/mock/plans";
import { PlanCard } from "../Cards";

export function Plans() {
  const t = useTranslations("plans");
  const { currency } = useCurrency();
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(`/api/exchange-rates?base=BRL`);
        const rates = await response.json();
        setExchangeRates(rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
  }, []);

  const convertPrice = (price: number) => {
    if (!exchangeRates[currency]) return price;
    return price * exchangeRates[currency];
  };

  return (
    <motion.section
      id="plans"
      ref={sectionRef}
      className="py-16 md:py-24 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-primary text-center mb-4">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-text text-center mb-16 md:mb-24">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {plansData.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <PlanCard plan={plan} convertPrice={convertPrice} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}