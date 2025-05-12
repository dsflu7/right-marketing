// Define interface for client data
export interface ClientProject {
  id: string;
  name: string;
  logo: string;
  description: string;
  websiteGif?: string; // Optional website preview GIF
  links: {
    website?: string;
    instagram?: string;
    facebook?: string;
  };
  tags: string[]; // For filtering purposes
}

// Sample client projects data
export const clientProjects: ClientProject[] = [
  {
    id: 'acme-corp',
    name: 'ACME Corporation',
    logo: '/assets/clients/acme-logo.png',
    description: 'A complete rebrand and web presence overhaul for a local manufacturing business, resulting in 43% increased lead generation within the first quarter.',
    websiteGif: '/assets/clients/acme-website.gif',
    links: {
      website: 'https://acmecorp.example.com',
      instagram: 'https://instagram.com/acmecorp',
      facebook: 'https://facebook.com/acmecorp',
    },
    tags: ['manufacturing', 'website-design', 'branding', 'lead-generation']
  },
  {
    id: 'sunshine-cafe',
    name: 'Sunshine Café',
    logo: '/assets/clients/sunshine-logo.png',
    description: 'Created a digital marketing strategy for this local café, including social media management and targeted local ads that increased foot traffic by 32%.',
    websiteGif: '/assets/clients/sunshine-website.gif',
    links: {
      website: 'https://sunshinecafe.example.com',
      instagram: 'https://instagram.com/sunshinecafe',
      facebook: 'https://facebook.com/sunshinecafe',
    },
    tags: ['food-service', 'local-business', 'social-media', 'advertising']
  },
  {
    id: 'tech-innovations',
    name: 'Tech Innovations',
    logo: '/assets/clients/tech-logo.png',
    description: 'Developed a content marketing strategy for this tech startup that positioned them as thought leaders in their industry and drove a 65% increase in qualified B2B leads.',
    websiteGif: '/assets/clients/tech-website.gif',
    links: {
      website: 'https://techinnovations.example.com',
      instagram: 'https://instagram.com/techinnovations',
    },
    tags: ['tech', 'b2b', 'content-marketing', 'lead-generation']
  },
  {
    id: 'green-living',
    name: 'Green Living',
    logo: '/assets/clients/green-logo.png',
    description: 'Executed an e-commerce strategy for this sustainable products retailer, including SEO optimization and email campaigns that boosted online sales by 78%.',
    links: {
      website: 'https://greenliving.example.com',
      facebook: 'https://facebook.com/greenliving',
    },
    tags: ['e-commerce', 'retail', 'sustainability', 'email-marketing', 'seo']
  },
  {
    id: 'fitness-first',
    name: 'Fitness First',
    logo: '/assets/clients/fitness-logo.png',
    description: 'Created video marketing content and membership campaigns for this fitness center, resulting in a 50% increase in new memberships.',
    websiteGif: '/assets/clients/fitness-website.gif',
    links: {
      website: 'https://fitnessfirst.example.com',
      instagram: 'https://instagram.com/fitnessfirst',
      facebook: 'https://facebook.com/fitnessfirst',
    },
    tags: ['fitness', 'video-production', 'membership', 'local-business']
  },
  {
    id: 'legal-eagles',
    name: 'Legal Eagles',
    logo: '/assets/clients/legal-logo.png',
    description: 'Developed a professional online presence and content strategy for this law firm, resulting in a 40% increase in client consultations.',
    links: {
      website: 'https://legaleagles.example.com',
    },
    tags: ['legal', 'professional-services', 'content-strategy', 'local-business']
  }
];

// Note: Replace the placeholder image paths with actual paths when assets are available.
// These sample entries can be replaced with actual client data.