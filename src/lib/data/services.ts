export const services = ["video-production", "ad-campaigns", "automation", "website-seo", "social-media-marketing", "local-seo"];
export type Service = typeof services[number];

interface FaqItem {
  question: string;
  answer: string;
}

interface ProcessStep {
  title: string;
  description: string;
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
    process?: ProcessStep[];
    timeline?: string;
  };
};

export const serviceData: ServiceData = {
  "video-production": {
    title: "Video Production",
    shortDescription: "Craft compelling video content that converts viewers into customers",
    description: "We craft complete video assets from concept through posting. Our process includes writing scripts, creating storyboards for your review, and producing the final videos. We then publish on Instagram, Facebook or other social channels according to a strategic content calendar. Our videos are designed to showcase your brand story, highlight your products or services, and engage your target audience with professional quality that stands out.",
    images: ["/assets/services/video-production/1.webp", "/assets/services/video-production/2.webp", "/assets/services/video-production/3.webp"],
    benefits: [
      "Professionally edited videos that elevate your brand image",
      "Strategic storytelling that resonates with your target audience",
      "Content optimized for social media engagement",
      "Consistent publishing schedule to maintain audience interest",
      "Analytics to track performance and refine future content"
    ],
    keyFeatures: [
      "Custom script writing tailored to your brand voice",
      "Professional storyboarding for client approval",
      "High-quality video production with attention to detail",
      "Strategic publishing on optimal social platforms",
      "Integration with your overall marketing strategy"
    ],
    faqItems: [
      {
        question: "How long does it take to produce a video?",
        answer: "Typically, our video production process takes 7-10 business days from concept approval to final delivery, depending on complexity."
      },
      {
        question: "Do I need to provide any equipment or locations?",
        answer: "No, we handle all equipment and can shoot at your location or arrange alternative filming locations as needed."
      },
      {
        question: "How many revisions are included in the video production process?",
        answer: "Our standard package includes two rounds of revisions to ensure you're completely satisfied with the final product."
      },
      {
        question: "Can you create different versions of the same video for different platforms?",
        answer: "Yes, we optimize videos for specific platforms (Instagram, Facebook, YouTube, etc.) with appropriate aspect ratios and duration."
      }
    ],
    process: [
      {
        title: "Discovery",
        description: "We meet to understand your brand, audience, and objectives for the video content."
      },
      {
        title: "Scripting & Storyboarding",
        description: "We create the script and visual plan for your approval within five business days."
      },
      {
        title: "Production",
        description: "Our team films and edits your video with professional equipment and techniques."
      },
      {
        title: "Review",
        description: "You provide feedback within three business days, and we make requested adjustments."
      },
      {
        title: "Publishing",
        description: "We publish the finalized video to your social platforms and provide performance tracking."
      }
    ],
    timeline: "10-14 days from kick-off to publication"
  },
  
  "ad-campaigns": {
    title: "Ad Campaigns",
    shortDescription: "Strategic paid advertising that targets your ideal customers at the perfect moment",
    description: "Our paid advertising service leverages both custom-created video assets and existing content to maximize your marketing budget. We run targeted campaigns through Facebook Ads Manager and Google Ads Manager, applying the latest SEO and keyword optimization best practices to maximize click-through rates and conversions. Every lead and click is fed into the CRM system we set up for you, allowing for comprehensive tracking and optimization of your campaigns.",
    images: ["/assets/services/ad-campaigns/1.webp", "/assets/services/ad-campaigns/2.webp", "/assets/services/ad-campaigns/3.webp"],
    benefits: [
      "Highly targeted ads reaching your ideal customer profile",
      "Budget optimization to maximize return on ad spend",
      "Detailed analytics and performance reporting",
      "Continuous A/B testing to improve results",
      "Integration with CRM for complete lead tracking"
    ],
    keyFeatures: [
      "Strategic audience targeting and segmentation",
      "Custom ad creative development",
      "Campaign management across multiple platforms",
      "Regular performance optimization",
      "Transparent reporting and ROI tracking"
    ],
    faqItems: [
      {
        question: "What minimum ad budget do you recommend?",
        answer: "We recommend a minimum monthly ad budget of $1,000 to effectively test and optimize campaigns, though this varies based on your industry and goals."
      },
      {
        question: "How quickly will I see results from my ad campaigns?",
        answer: "Initial results typically appear within the first week, but the first month is often focused on testing and optimization. Most clients see significant performance improvements in months 2-3."
      },
      {
        question: "How do you measure ad campaign success?",
        answer: "We track key metrics including click-through rate, cost per click, cost per acquisition, conversion rate, and return on ad spend, tailored to your specific business goals."
      },
      {
        question: "Can I see exactly how my ad budget is being spent?",
        answer: "Absolutely. We provide complete transparency with detailed breakdowns of your ad spend, performance by platform, and optimization recommendations."
      }
    ],
    process: [
      {
        title: "Strategy Development",
        description: "We analyze your business, competitors, and audience to create a targeted ad strategy."
      },
      {
        title: "Campaign Setup",
        description: "We build your campaigns with optimal targeting, bidding strategies, and creative assets."
      },
      {
        title: "Testing Phase",
        description: "Multiple ad variations are tested to identify top performers for your audience."
      },
      {
        title: "Optimization",
        description: "We continuously refine your campaigns based on performance data."
      },
      {
        title: "Reporting & Analysis",
        description: "Regular reports detail performance metrics and strategic recommendations."
      }
    ],
    timeline: "7 days for initial setup, ongoing management thereafter"
  },
  
  "automation": {
    title: "Marketing Automation",
    shortDescription: "Powerful systems that nurture leads while you focus on running your business",
    description: "We install and configure a comprehensive customer relationship management (CRM) system to collect leads from ads, social media forms, and your website. Our automation setup includes creating custom fields, defining lead flows, and building reporting dashboards. You'll receive detailed instructions and login credentials so you can easily manage contacts and view performance metrics. Our systems handle repetitive tasks like follow-up emails, appointment reminders, and lead qualification, allowing you to focus on high-value activities.",
    images: ["/assets/services/automation/1.webp", "/assets/services/automation/2.webp", "/assets/services/automation/3.webp"],
    benefits: [
      "24/7 lead capture and nurturing without manual intervention",
      "Consistent follow-up with every prospect",
      "Reduced administrative workload for your team",
      "Higher conversion rates through timely engagement",
      "Clear visibility into your sales pipeline"
    ],
    keyFeatures: [
      "Custom CRM setup tailored to your business workflow",
      "Automated email and SMS sequences",
      "Lead scoring and qualification",
      "Integration with your website and social platforms",
      "Comprehensive analytics dashboard"
    ],
    faqItems: [
      {
        question: "Which CRM system do you recommend?",
        answer: "We primarily work with HighLevel as our preferred CRM for small businesses, but can also work with existing systems like HubSpot, Salesforce, or other platforms you may already use."
      },
      {
        question: "How much time will automation save my team?",
        answer: "Most clients report saving 15-20 hours per week on administrative tasks after implementing our automation solutions."
      },
      {
        question: "Can automation handle complex customer journeys?",
        answer: "Yes, we can create sophisticated workflows that adapt based on customer behavior, preferences, and interaction history."
      },
      {
        question: "Will I need technical expertise to manage the system?",
        answer: "No, we build user-friendly interfaces and provide comprehensive training. Most clients can confidently manage their system after a single training session."
      }
    ],
    process: [
      {
        title: "Workflow Analysis",
        description: "We map your current sales and customer management processes."
      },
      {
        title: "System Configuration",
        description: "We set up your CRM with custom fields, pipelines, and automation rules."
      },
      {
        title: "Integration",
        description: "We connect your CRM with your website, ads, and other marketing channels."
      },
      {
        title: "Template Creation",
        description: "We develop email templates, SMS messages, and other communication assets."
      },
      {
        title: "Training & Handover",
        description: "We provide comprehensive training and documentation for your team."
      }
    ],
    timeline: "2-3 weeks for complete setup and training"
  },
  
  "website-seo": {
    title: "Website & SEO",
    shortDescription: "Web presence optimized for both human visitors and search engines",
    description: "We build or revamp your website using your existing branding, with a focus on achieving high search rankings in Google, Bing and emerging AI search tools such as Gemini, Perplexity and ChatGPT. Our websites combine beautiful design with technical optimization to ensure you're found by potential customers. We handle everything from hosting setup to technical SEO implementation, creating a website that serves as the foundation of your digital marketing strategy.",
    images: ["/assets/services/website-seo/1.webp", "/assets/services/website-seo/2.webp", "/assets/services/website-seo/3.webp"],
    benefits: [
      "Increased visibility in search engine results",
      "Improved user experience leading to higher conversion rates",
      "Mobile-optimized design for all devices",
      "Technical performance tuned for speed and accessibility",
      "Integration with your advertising and CRM systems"
    ],
    keyFeatures: [
      "Responsive design optimized for all devices",
      "Search engine optimization for critical keywords",
      "Analytics integration for performance tracking",
      "Content management system for easy updates",
      "Integration with Google Search Console and Bing Webmaster Tools"
    ],
    faqItems: [
      {
        question: "How long does it take to build a new website?",
        answer: "A standard business website typically takes 3-4 weeks from concept approval to launch. More complex sites with custom functionality may take 6-8 weeks."
      },
      {
        question: "Will I be able to update the website myself?",
        answer: "Yes, we build websites with user-friendly content management systems that allow you to make basic updates. We also offer maintenance packages for ongoing technical support."
      },
      {
        question: "How long until I see SEO results?",
        answer: "Initial SEO improvements are often visible within 4-6 weeks, but significant ranking improvements typically take 3-6 months, depending on your industry competition."
      },
      {
        question: "Do you handle website hosting and domain registration?",
        answer: "Yes, we can manage all technical aspects including hosting on Vercel, domain management via Cloudflare, or integration with your preferred providers like GoDaddy or Hostinger."
      }
    ],
    process: [
      {
        title: "Discovery & Planning",
        description: "We analyze your requirements, competitors, and target audience."
      },
      {
        title: "Design & Development",
        description: "We create mockups for approval, then build your fully responsive website."
      },
      {
        title: "SEO Implementation",
        description: "We optimize on-page elements, technical structure, and content for search visibility."
      },
      {
        title: "Testing & Launch",
        description: "We thoroughly test across devices before deploying your site live."
      },
      {
        title: "Analysis & Optimization",
        description: "We monitor performance and make adjustments to improve results."
      }
    ],
    timeline: "3-4 weeks for standard websites, 6-8 weeks for complex projects"
  },
  
  "social-media-marketing": {
    title: "Social Media Marketing",
    shortDescription: "Strategic content creation and management to build your digital presence",
    description: "Our social media marketing service handles everything from content creation to engagement management across all major platforms. We develop platform-specific strategies that align with your brand voice while maximizing engagement. Our team creates a mix of professional video content, images, and written posts to maintain a consistent and compelling presence that builds audience trust and drives business growth.",
    images: ["/assets/services/social-media-marketing/1.webp", "/assets/services/social-media-marketing/2.webp", "/assets/services/social-media-marketing/3.webp"],
    benefits: [
      "Consistent brand presence across platforms",
      "Increased audience engagement and growth",
      "Professional content creation without in-house resources",
      "Strategic content planning aligned with business goals",
      "Performance tracking and strategy refinement"
    ],
    keyFeatures: [
      "Platform-specific content strategy",
      "Professional video and image creation",
      "Engagement monitoring and response management",
      "Content calendar planning and execution",
      "Performance analytics and reporting"
    ],
    faqItems: [
      {
        question: "Which social media platforms do you manage?",
        answer: "We specialize in Instagram, Facebook, TikTok, and LinkedIn management, but can work with any platform relevant to your target audience."
      },
      {
        question: "How many posts can I expect each month?",
        answer: "Our standard packages include 12-20 posts per month depending on the platforms selected, with custom frequencies available based on your needs."
      },
      {
        question: "Do you respond to comments and messages?",
        answer: "Yes, we offer engagement management that includes responding to comments and direct messages during business hours."
      },
      {
        question: "How do you develop content ideas that align with my brand?",
        answer: "We start with a thorough brand discovery process and create a content strategy document that guides all content creation. We regularly review performance data to refine our approach."
      }
    ],
    process: [
      {
        title: "Brand & Audience Analysis",
        description: "We research your brand voice, competitive landscape, and target audience."
      },
      {
        title: "Strategy Development",
        description: "We create a comprehensive social media strategy tailored to your business goals."
      },
      {
        title: "Content Planning",
        description: "We develop a monthly content calendar for your review and approval."
      },
      {
        title: "Creation & Publishing",
        description: "We produce professional content and publish according to the approved schedule."
      },
      {
        title: "Engagement & Reporting",
        description: "We manage community interactions and provide regular performance reports."
      }
    ],
    timeline: "2-week setup period, then ongoing monthly management"
  },
  
  "local-seo": {
    title: "Local SEO",
    shortDescription: "Dominate local search results to attract nearby customers",
    description: "Our Local SEO service helps your business appear prominently in local search results and map listings. We optimize your Google Business Profile, build local citations, manage reviews, and create location-specific content to ensure you're highly visible to potential customers in your service area. This comprehensive approach to local visibility is ideal for businesses serving specific geographic regions.",
    images: ["/assets/services/local-seo/1.webp", "/assets/services/local-seo/2.webp", "/assets/services/local-seo/3.webp"],
    benefits: [
      "Increased visibility in local search results",
      "Higher ranking in Google Maps listings",
      "More phone calls, direction requests, and website visits",
      "Improved reputation through review management",
      "Enhanced visibility for multiple business locations"
    ],
    keyFeatures: [
      "Google Business Profile optimization",
      "Local citation building and management",
      "Review generation and management strategy",
      "Location-specific website content",
      "Local link building from community sources"
    ],
    faqItems: [
      {
        question: "How long does it take to improve local rankings?",
        answer: "Most businesses see noticeable improvements in local visibility within 30-60 days, with significant ranking changes typically occurring within 90 days."
      },
      {
        question: "How do you help with reviews?",
        answer: "We implement automated review request systems, provide response templates for both positive and negative reviews, and offer guidance on maintaining a strong review profile."
      },
      {
        question: "Can you help with multiple business locations?",
        answer: "Yes, we offer multi-location packages that ensure consistent and optimized listings for each of your business locations."
      },
      {
        question: "What local directories do you include?",
        answer: "We focus on the most impactful directories for your industry, typically including Google Business, Bing Places, Yelp, Facebook, industry-specific directories, and local chambers of commerce."
      }
    ],
    process: [
      {
        title: "Local Audit",
        description: "We analyze your current local presence, competitors, and opportunities."
      },
      {
        title: "Google Business Optimization",
        description: "We fully optimize your profile with accurate information, photos, and attributes."
      },
      {
        title: "Citation Building",
        description: "We create and verify listings across key directories and platforms."
      },
      {
        title: "Review Strategy",
        description: "We implement systems for review generation and management."
      },
      {
        title: "Local Content",
        description: "We develop location-specific content for your website and listings."
      }
    ],
    timeline: "30 days for initial optimization, 3-6 months for significant ranking improvements"
  }
};
