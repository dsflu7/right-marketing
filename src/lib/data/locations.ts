import { PUBLIC_DOMAIN } from "$env/static/public";

export interface LocationData {
  name: string;
  // services: string[];
  faqItems: FaqItem[];
  mapEmbedUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const contactInfo = {
  phone: '7788045911',
  email: `info@${PUBLIC_DOMAIN}`
}

export const locationIds = [""];

export const locationsData: Record<string, LocationData> = {};



