export const services = [""];
export type Service = typeof services[number];

interface FaqItem {
  question: string;
  answer: string;
}

type ServiceData = {
  [key: string]: {
    title: string;
    shortDescription: string;
    description: string;
    images: string[];
    benefits?: string[];
    keyFeatures?: string[];
    cities?: string[];
    faqItems?: FaqItem[];
  };
};

export const serviceData: ServiceData = {};
