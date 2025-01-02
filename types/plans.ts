export interface PlanFeature {
    name: string;
    included: boolean;
  }
  
  export interface Plan {
    name: string;
    description: string;
    price: number;
    period: string;
    features: PlanFeature[];
    buttonText: string;
    icon: string;
    badge?: string;
    save?: string;
    bestDeal?: boolean;
    extraMonths?: string;
    moneyBack?: boolean;
  }