export interface PackageFeature {
	title: string;
	description: string;
	isHighlight?: boolean;
}

export interface Package {
	id: string;
	name: string;
	tagline: string;
	category: 'adverts' | 'brand-website';
	features: PackageFeature[];
	highlights: string[];
	isRecommended?: boolean;
	note?: string;
}

export interface PackageCategory {
	id: string;
	name: string;
	description: string;
	packages: Package[];
}

export const advertPackages: Package[] = [
	{
		id: 'starter',
		name: 'Starter Package',
		tagline: 'Perfect for businesses starting their digital advertising journey',
		category: 'adverts',
		features: [
			{
				title: 'Single Platform Advertising',
				description: 'Ad campaigns on your choice of one major platform (Google or Meta)',
				isHighlight: true
			},
			{
				title: 'Professional Video Ad',
				description: 'One professionally produced video ad including shoot, script, and edit'
			},
			{
				title: 'Basic Automation',
				description: 'Instant lead notifications directly to business owner'
			},
			{
				title: 'Campaign Setup & Launch',
				description: 'Complete setup and optimization of your first advertising campaign'
			}
		],
		highlights: [
			'Ads on 1 platform (Google or Meta)',
			'1 video ad (shoot, script, edit)',
			'Basic automation: Lead notification to owner'
		],
		note: 'Additional videos and advanced automation available as add-ons.'
	},
	{
		id: 'standard',
		name: 'Standard Package',
		tagline: 'Comprehensive advertising with advanced automation',
		category: 'adverts',
		isRecommended: true,
		features: [
			{
				title: 'Multi-Platform Advertising',
				description: 'Ad campaigns on both Google and Meta across 2-3 strategic campaigns',
				isHighlight: true
			},
			{
				title: 'Multiple Video Ads',
				description: 'Three full-length video ads (5 seconds or more) professionally produced'
			},
			{
				title: 'Advanced Automation',
				description: '2-3 sophisticated workflows including auto-booking, missed call/text follow-up, and automated review requests'
			},
			{
				title: 'Online Portal & App',
				description: 'Dedicated online portal and mobile app access for campaign management'
			},
			{
				title: 'Performance Tracking',
				description: 'Detailed analytics and reporting on campaign performance'
			}
		],
		highlights: [
			'Ads on Google + Meta (2-3 campaigns)',
			'3 full video ads (5 seconds+)',
			'Advanced automation: 2-3 workflows',
			'Auto booking, Missed call/text follow-up, Reviews follow-up',
			'Online portal + app access'
		]
	},
	{
		id: 'premium',
		name: 'Premium Package',
		tagline: 'Full-scale advertising with custom CRM and landing pages',
		category: 'adverts',
		features: [
			{
				title: 'Expert Ad Management',
				description: 'Full-scale, expert ad management on both Meta and Google with 5+ campaigns',
				isHighlight: true
			},
			{
				title: 'Dedicated Landing Page',
				description: 'Custom landing page on your website with integrated forms'
			},
			{
				title: 'Cinematic Video Content',
				description: '5+ cinematic, story-form video ads professionally produced'
			},
			{
				title: 'Custom CRM Build',
				description: 'Full, customized CRM system tailored to your specific business workflows',
				isHighlight: true
			},
			{
				title: 'Advanced Analytics',
				description: 'Comprehensive tracking and optimization across all campaigns'
			}
		],
		highlights: [
			'Full ads management (Meta + Google, 5+ campaigns)',
			'Dedicated landing page for website (with forms)',
			'5+ cinematic video ads (story-form)',
			'Full CRM build (customized as needed)'
		]
	}
];

export const brandWebsitePackages: Package[] = [
	{
		id: 'pro-brand-builder',
		name: 'Pro Brand Builder Package',
		tagline: 'Essential foundation for your online presence',
		category: 'brand-website',
		features: [
			{
				title: 'Foundation Website',
				description: '1-2 page professional website with modern design'
			},
			{
				title: 'Basic SEO Setup',
				description: 'Essential on-page SEO optimization for search visibility'
			},
			{
				title: 'Complete Brand Kit',
				description: 'Logo design and brand kit defining colors, fonts, and templates',
				isHighlight: true
			},
			{
				title: 'Social Media Management',
				description: '5 posts per month focused on best practices content'
			},
			{
				title: 'Brand Guidelines',
				description: 'Comprehensive guide for consistent brand application'
			}
		],
		highlights: [
			'Foundational 1-2 page website',
			'Basic SEO setup',
			'Complete logo and brand kit (colors, fonts, templates)',
			'Essential social media management (5 posts per month)'
		]
	},
	{
		id: 'growth',
		name: 'Growth Package',
		tagline: 'Complete digital foundation with strategic guidance',
		category: 'brand-website',
		features: [
			{
				title: 'Full Custom Website',
				description: '5-8 page custom website with advanced functionality',
				isHighlight: true
			},
			{
				title: 'Comprehensive SEO',
				description: 'Full SEO audit with on-page optimization'
			},
			{
				title: 'Strategy Session',
				description: 'Personalized 1-on-1 strategy session with marketing experts'
			},
			{
				title: 'Marketing Automation',
				description: 'Complete marketing automation setup for lead nurturing'
			},
			{
				title: 'Enhanced Social Media',
				description: '10 posts per month with strategic content planning'
			},
			{
				title: 'Refined Brand Identity',
				description: 'Enhanced logo and complete brand identity kit'
			}
		],
		highlights: [
			'Full custom website (5-8 pages)',
			'Comprehensive SEO audit with on-page optimization',
			'Personalized 1-on-1 strategy session',
			'Complete marketing automation setup',
			'Enhanced social media management (10 posts per month)',
			'Refined logo + brand identity kit'
		]
	},
	{
		id: 'ultimate',
		name: 'Ultimate Package',
		tagline: 'Complete digital transformation with dedicated support',
		category: 'brand-website',
		features: [
			{
				title: 'Full Website & App Development',
				description: 'Complete website and mobile app development',
				isHighlight: true
			},
			{
				title: 'Aggressive SEO Strategy',
				description: 'Full SEO + local SEO strategy targeting top 1-2 search rankings within 6 months'
			},
			{
				title: 'Extensive Social Media',
				description: '20 posts per month with comprehensive social media strategy'
			},
			{
				title: 'Full Branding Services',
				description: 'Complete brand overhaul and professional brand development'
			},
			{
				title: 'Dedicated Account Manager',
				description: 'Personal account manager for ongoing support and strategy'
			},
			{
				title: 'Monthly Analysis',
				description: 'Dedicated monthly deep analysis and performance reporting'
			},
			{
				title: 'Email & SMS Campaigns',
				description: 'Comprehensive email and SMS campaigns for continuous engagement',
				isHighlight: true
			}
		],
		highlights: [
			'Full website and app development',
			'Extensive social media management (20 posts per month)',
			'Aggressive full SEO + local SEO strategy (top 1-2 rankings in 6 months)',
			'Full branding services',
			'Dedicated monthly deep analysis',
			'Dedicated account manager',
			'Comprehensive email and SMS campaigns'
		]
	}
];

export const customSolution: Package = {
	id: 'custom',
	name: 'Custom Solutions',
	tagline: 'Bespoke marketing strategies for unique business needs',
	category: 'adverts',
	features: [
		{
			title: 'Fully Customized Strategy',
			description: 'Bespoke, full-service marketing strategies designed for your specific needs',
			isHighlight: true
		},
		{
			title: 'Advanced Scaling Solutions',
			description: 'Aggressive scaling strategies for rapid business growth'
		},
		{
			title: 'Dedicated Team',
			description: 'Personal team of experts working exclusively on your project'
		},
		{
			title: 'Unlimited Scope',
			description: 'No limitations on services, channels, or campaign complexity'
		}
	],
	highlights: [
		'Bespoke, full-service marketing strategies',
		'Advanced scaling objectives',
		'Unlimited service scope',
		'Dedicated expert team'
	]
};

export const packageCategories: PackageCategory[] = [
	{
		id: 'adverts',
		name: 'Adverts Packages',
		description: 'Designed for rapid lead generation and maximizing sales through targeted paid advertising',
		packages: advertPackages
	},
	{
		id: 'brand-website',
		name: 'Brand & Website Packages',
		description: 'Establish or enhance your online presence and achieve long-term organic visibility',
		packages: brandWebsitePackages
	}
];

export const packagesFAQ = [
	{
		question: 'How do I choose the right package for my business?',
		answer: 'The best package depends on your current business stage, budget, and goals. Adverts Packages are ideal for businesses looking for immediate lead generation and sales, while Brand & Website Packages focus on building long-term online presence. We offer free consultations to help you choose the perfect fit.'
	},
	{
		question: 'Can I upgrade or combine packages?',
		answer: 'Absolutely! You can start with one package and upgrade as your business grows. We also offer custom combinations of services from different packages to meet your specific needs.'
	},
	{
		question: 'How long does it take to see results?',
		answer: 'Adverts Packages typically show results within 2-4 weeks of campaign launch. Brand & Website Packages focus on long-term growth, with SEO results typically visible within 3-6 months. We provide regular progress reports throughout your campaign.'
	},
	{
		question: 'Do you provide ongoing support after package completion?',
		answer: 'Yes! All our packages include ongoing support periods. Premium and Ultimate packages include dedicated account managers, while other packages include support periods and optional maintenance plans.'
	},
	{
		question: 'What makes your video production different?',
		answer: 'Our video ads are specifically designed for conversion, not just views. We handle everything from scripting and shooting to editing, ensuring each video aligns with your campaign goals and brand message.'
	},
	{
		question: 'How do your automation systems work?',
		answer: 'Our automation systems integrate with your existing business processes to nurture leads automatically. This includes follow-up sequences, appointment booking, review requests, and more - all working 24/7 to convert leads while you focus on your business.'
	},
	{
		question: 'What kind of businesses do these packages work best for?',
		answer: 'Our packages are specifically designed for small to medium businesses across various industries. Whether you\'re a local service provider, retail business, or professional service, we have solutions that scale with your business size and goals.'
	},
	{
		question: 'Do you offer payment plans?',
		answer: 'Yes, we offer flexible payment plans for all our packages. Contact us to discuss payment options that work best for your business cash flow.'
	}
];

export const packageSEOData = {
	title: 'Marketing Packages | Digital Marketing Solutions | Right Marketing',
	description: 'Choose from our comprehensive marketing packages: Adverts Packages for rapid lead generation and Brand & Website Packages for long-term growth. Custom video production, automation, and SEO included.',
	keywords: [
		'marketing packages',
		'digital marketing solutions',
		'advertising packages',
		'website packages',
		'video marketing',
		'marketing automation',
		'SEO packages',
		'small business marketing',
		'lead generation packages',
		'brand development packages'
	],
	schema: {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Marketing Packages',
		provider: {
			'@type': 'Organization',
			name: 'Right Marketing'
		},
		description: 'Comprehensive marketing packages including adverts packages for lead generation and brand & website packages for long-term growth',
		offers: [
			{
				'@type': 'Offer',
				name: 'Starter Package',
				description: 'Ad campaigns on one platform with professional video ad and basic automation'
			},
			{
				'@type': 'Offer',
				name: 'Standard Package',
				description: 'Multi-platform advertising with advanced automation and video content'
			},
			{
				'@type': 'Offer',
				name: 'Premium Package',
				description: 'Full-scale ad management with custom CRM and landing pages'
			},
			{
				'@type': 'Offer',
				name: 'Pro Brand Builder Package',
				description: 'Foundation website with brand kit and social media management'
			},
			{
				'@type': 'Offer',
				name: 'Growth Package',
				description: 'Full custom website with comprehensive SEO and marketing automation'
			},
			{
				'@type': 'Offer',
				name: 'Ultimate Package',
				description: 'Complete digital transformation with website, app, and dedicated support'
			}
		]
	}
};
