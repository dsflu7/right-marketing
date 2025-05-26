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
    id: 'splash-n-shine',
    name: 'Splash n Shine',
    logo: '/assets/clients/splash-n-shine-logo.png',
    description: 'Comprehensive digital marketing, automation, and SEO services for this car wash business, resulting in increased bookings and local brand recognition.',
    links: {
      website: 'https://www.splashnshine.ca/',
      instagram: 'https://www.instagram.com/splashnshine.ca/',
      facebook: 'https://www.facebook.com/105341482673651',
      // TikTok is not in the interface, but can be added if needed
    },
    tags: [
      'video-production',
      'ad-campaigns',
      'automation',
      'website-seo',
      'social-media-marketing',
      'local-seo'
    ]
  },
  {
    id: 'luxury-floors',
    name: 'Luxury Floors',
    logo: '/assets/clients/luxury-floors-logo.png',
    description: 'Delivered a full suite of marketing and automation services, boosting online presence and lead generation for this premium flooring company.',
    links: {
      website: 'https://www.luxuryfloors.ca/',
      instagram: 'https://www.instagram.com/luxuryfloors.ca/'
    },
    tags: [
      'video-production',
      'ad-campaigns',
      'automation',
      'website-seo',
      'social-media-marketing',
      'local-seo'
    ]
  },
  {
    id: 'just-cleaning',
    name: 'Just Cleaning',
    logo: '/assets/clients/just-cleaning-logo.png',
    description: 'Implemented end-to-end marketing, automation, and SEO strategies for this cleaning service, resulting in higher customer engagement and bookings.',
    links: {
      website: 'https://justcleanings.ca/'
    },
    tags: [
      'video-production',
      'ad-campaigns',
      'automation',
      // 'website-seo',
      'social-media-marketing',
      'local-seo'
    ]
  },
  {
    id: 'moonlight-lighting',
    name: 'Moonlight Lighting',
    logo: '/assets/clients/moonlight-lighting-logo.png',
    description: 'Provided a complete marketing overhaul, including automation and SEO, for this lighting solutions provider, enhancing their digital footprint and sales.',
    links: {
      website: 'https://moonlightlighting.ca/',
      instagram: 'https://instagram.com/moonlightlighting.ca'
    },
    tags: [
      'video-production',
      'ad-campaigns',
      'automation',
      'website-seo',
      'social-media-marketing',
      'local-seo'
    ]
  },
  {
    id: 'mini-moving-daily',
    name: 'Mini Moving Daily',
    logo: '/assets/clients/mini-moving-daily-logo.png',
    description: 'Executed SEO and select marketing services for this moving company, resulting in improved online visibility and customer acquisition.',
    links: {
      website: 'https://minimovingdaily.com/'
    },
    tags: [
      'website-seo',
      'ad-campaigns', // some marketing
      'local-seo'
    ]
  }
];
