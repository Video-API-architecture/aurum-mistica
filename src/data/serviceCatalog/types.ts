export interface ServiceData {
  slug: string;
  icon: string;
  title: string;
  subtitle: string;
  price: string;
  priceLabel?: string;
  description: string;
  forWhom: string;
  receives: string[];
  duration?: string;
  features?: string[];
  popular?: boolean;
  cardDesc?: string;
  relatedSlugs?: string[];
}

export interface ServiceCategory {
  id: string;
  label: string;
  emoji: string;
  deliveryNote?: string;
  slug?: string;
  services: ServiceData[];
}
