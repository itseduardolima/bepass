import { Plan } from "@/types/plans";
import { cn, formatPrice } from "@/lib/utils";
import Image from 'next/image';
import ArrowDownIcon from '@/public/assets/icons/seta-baixo.png';
import { useTranslations } from "next-intl";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Check, X, Circle, Square, Diamond } from 'lucide-react';

export const PlanIcon = ({ icon }: { icon: string }) => {
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


export function PlanCard({ plan, convertPrice }: { plan: Plan; convertPrice: (price: number) => number }) {
    const t = useTranslations("plans");
    const { currency } = useCurrency();
  
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
              <span className="text-3xl font-semibold text-primary">
                {formatPrice(convertPrice(plan.price), currency)}
              </span>
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
          <div className="flex items-center justify-center gap-2 text-white mb-3">
            <Image
              src={ArrowDownIcon}
              alt=""
              width={20}
              height={20}
              className="mt-4"
            />
            <span className="text-xl">{t("best_deal")}</span>
          </div>
          {card}
        </div>
      );
    }
  
    return card;
  }