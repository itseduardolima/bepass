"use client";

import { useTranslations } from "next-intl";
import { Check, X, Circle, Square, Diamond } from 'lucide-react';
import { Plan } from "@/types/plans";
import { cn } from "@/lib/utils";

const plansData: Plan[] = [
  {
    name: "basic",
    description: "descricao_basic",
    price: 99.90,
    period: "preco_mensal",
    features: [
      { name: "produtos", included: true },
      { name: "reservas", included: true },
      { name: "ecommerce", included: false },
      { name: "afiliados", included: false }
    ],
    buttonText: "plans_button",
    icon: "circle"
  },
  {
    name: "travel",
    description: "descricao_experience",
    price: 0,
    period: "livre_para_sempre",
    features: [
      { name: "produtos", included: true },
      { name: "reservas", included: true },
      { name: "ecommerce", included: true },
      { name: "afiliados", included: false }
    ],
    bestDeal: true,
    buttonText: "plans_button",
    save: "save",
    badge: "65%",
    icon: "square",
    extraMonths: "extra_months",
    moneyBack: true
  },
  {
    name: "label",
    description: "descricao_label",
    price: 129.90,
    period: "preco_mensal",
    features: [
      { name: "produtos", included: true },
      { name: "reservas", included: true },
      { name: "ecommerce", included: true },
      { name: "afiliados", included: true }
    ],
    buttonText: "plans_button",
    save: "save",
    badge: "75%",
    icon: "diamond",
    extraMonths: "extra_months",
    moneyBack: true
  }
];

const PlanIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "circle":
      return <Circle className="h-6 w-6" />;
    case "square":
      return <Square className="h-6 w-6" />;
    case "diamond":
      return <Diamond className="h-6 w-6" />;
    default:
      return null;
  }
};

function PlanCard({ plan }: { plan: Plan }) {
  const t = useTranslations("plans");

  const card = (
    <div className={cn(
      "bg-white border border-gray-300 rounded-2xl p-8 w-full max-w-[380px] h-[525px]",
      "flex flex-col relative transition-transform duration-300 hover:-translate-y-2"
    )}>
      {plan.badge && (
        <div className="absolute top-8 right-8 bg-gradient-to-b from-neutral-800 to-black text-white px-4 py-1.5 rounded-full text-sm font-medium">
          <span>{t(plan.save)}</span> {plan.badge}
        </div>
      )}

      <div className="h-8 w-8 bg-primary text-white rounded-full flex items-center justify-center mb-6">
        <PlanIcon icon={plan.icon} />
      </div>

      <h3 className="text-2xl font-semibold text-primary mb-2">
        {t(plan.name)}
      </h3>

      <p className="text-text mb-4">
        {t(plan.description)}
      </p>

      <div className="flex items-baseline gap-1 mb-4">
        {plan.price > 0 ? (
          <>
            <span className="text-3xl font-semibold text-primary">R$</span>
            <span className="text-3xl font-semibold text-primary">{plan.price.toFixed(2)}</span>
            <span className="text-sm text-text">/{t(plan.period)}</span>
          </>
        ) : (
          <span className="text-3xl font-semibold text-primary">Free</span>
        )}
      </div>

      {plan.extraMonths && (
        <div className="text-sky-500 text-lg font-semibold mt-[-15px] mb-2">
          {t(plan.extraMonths)}
        </div>
      )}

      <ul className="flex-1 space-y-5">
        {plan.features.map((feature) => (
          <li key={feature.name} className="flex items-center gap-3 text-sm">
            {feature.included ? (
              <Check className="h-5 w-5 text-primary" />
            ) : (
              <X className="h-5 w-5 text-text" />
            )}
            <span className={feature.included ? "text-primary" : "text-text"}>
              {t(feature.name)}
            </span>
          </li>
        ))}
      </ul>

      <button className="w-full py-3.5 px-4 bg-gradient-to-b from-neutral-800 to-black text-white rounded-full text-base font-medium hover:opacity-90 transition-opacity">
        {t(plan.buttonText)}
      </button>
    </div>
  );

  if (plan.bestDeal) {
    return (
      <div className="bg-gradient-to-b from-neutral-800 to-black rounded-3xl px-2 pb-2 pt-6 w-full max-w-[380px] md:-mt-[70px]">
        <div className="flex items-center justify-center gap-1 text-white mb-3">
          <img src="./public/assets/icons/seta-baixo.png" alt="" className="mt-4" />
          <span className="text-xl">{t("best_deal")}</span>
        </div>
        {card}
      </div>
    );
  }

  return card;
}

export default function Plans() {
  const t = useTranslations("plans");

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
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}