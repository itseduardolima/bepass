"use client";

import { useTranslations } from "next-intl";

import { useEffect, useState } from "react";
import { useCurrency } from "@/contexts/CurrencyContext";
import { plansData } from "@/mock/plans";
import { PlanCard } from "../Cards";

export function Plans() {
  const t = useTranslations("plans");
  const { currency } = useCurrency();
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(
    {}
  );

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
    <section id="plans" className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-primary text-center mb-4">
          {t("title")}
        </h2>
        <p className="text-lg md:text-xl text-text text-center mb-16 md:mb-24">
          {t("subtitle")}
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {plansData.map((plan) => (
            <PlanCard key={plan.name} plan={plan} convertPrice={convertPrice} />
          ))}
        </div>
      </div>
    </section>
  );
}
