import { Plan } from "@/types/plans";

export const plansData: Plan[] = [
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