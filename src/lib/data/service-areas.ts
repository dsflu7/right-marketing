export interface ServiceArea {
	id: string;
	name: string;
	province: string;
	region: 'metro-vancouver' | 'fraser-valley';
	population?: number;
	coordinates?: {
		lat: number;
		lng: number;
	};
	description: string;
	keyFeatures: string[];
	businessTypes: string[];
	seoTitle: string;
	seoDescription: string;
	seoKeywords: string[];
	localLandmarks: string[];
	neighboringCities: string[];
	zipCodes?: string[];
	demographics?: {
		medianAge?: number;
		medianIncome?: number;
		primaryIndustries: string[];
	};
}

export const serviceAreas: ServiceArea[] = [
	// Metro Vancouver Cities
	{
		id: 'vancouver',
		name: 'Vancouver',
		province: 'BC',
		region: 'metro-vancouver',
		population: 695263,
		coordinates: { lat: 49.2827, lng: -123.1207 },
		description: 'Vancouver, British Columbia\'s largest city and economic hub, offers immense opportunities for businesses to thrive in a diverse, tech-savvy market.',
		keyFeatures: [
			'Major business and financial district',
			'Tech startup ecosystem',
			'Tourism and hospitality hub',
			'Diverse multicultural market',
			'High digital adoption rates'
		],
		businessTypes: [
			'Technology Companies',
			'Professional Services',
			'Real Estate',
			'Restaurants & Food Services',
			'Healthcare & Wellness',
			'Tourism & Hospitality',
			'Retail & E-commerce'
		],
		seoTitle: 'Digital Marketing Vancouver BC | Video Production & SEO Services',
		seoDescription: 'Leading digital marketing agency in Vancouver, BC. Professional video production, SEO, social media marketing, and automation services for Vancouver businesses.',
		seoKeywords: [
			'digital marketing Vancouver',
			'video production Vancouver',
			'SEO Vancouver BC',
			'social media marketing Vancouver',
			'Vancouver marketing agency',
			'website development Vancouver',
			'local SEO Vancouver'
		],
		localLandmarks: [
			'Downtown Vancouver',
			'Stanley Park',
			'Gastown',
			'Yaletown',
			'Commercial Drive',
			'Robson Street',
			'Canada Place'
		],
		neighboringCities: ['Burnaby', 'Richmond', 'North Vancouver', 'West Vancouver'],
		zipCodes: ['V5K', 'V5L', 'V5M', 'V5N', 'V5P', 'V5R', 'V5S', 'V5T', 'V5V', 'V5W', 'V5X', 'V5Y', 'V5Z', 'V6A', 'V6B', 'V6C', 'V6E', 'V6G', 'V6H', 'V6J', 'V6K', 'V6L', 'V6M', 'V6N', 'V6P', 'V6R', 'V6S', 'V6T', 'V6V', 'V6W', 'V6Z'],
		demographics: {
			medianAge: 37,
			medianIncome: 79850,
			primaryIndustries: ['Technology', 'Finance', 'Tourism', 'Film & TV Production', 'Trade & Logistics']
		}
	},
	{
		id: 'burnaby',
		name: 'Burnaby',
		province: 'BC',
		region: 'metro-vancouver',
		population: 249125,
		coordinates: { lat: 49.2488, lng: -122.9805 },
		description: 'Burnaby is a thriving city in Metro Vancouver known for its business parks, shopping centers, and diverse communities, making it ideal for local businesses.',
		keyFeatures: [
			'Major shopping destinations',
			'Business and industrial parks',
			'Educational institutions',
			'Diverse residential communities',
			'Strong transit connections'
		],
		businessTypes: [
			'Retail & Shopping Centers',
			'Manufacturing & Industrial',
			'Healthcare Services',
			'Educational Services',
			'Professional Services',
			'Restaurants & Hospitality'
		],
		seoTitle: 'Digital Marketing Burnaby BC | Local SEO & Video Production Services',
		seoDescription: 'Expert digital marketing services in Burnaby, BC. Specializing in local SEO, video production, and social media marketing for Burnaby businesses.',
		seoKeywords: [
			'digital marketing Burnaby',
			'SEO Burnaby BC',
			'video production Burnaby',
			'Burnaby marketing agency',
			'local SEO Burnaby',
			'social media marketing Burnaby'
		],
		localLandmarks: [
			'Metrotown',
			'Burnaby Heights',
			'Brentwood Town Centre',
			'SFU Burnaby Campus',
			'Deer Lake Park',
			'Central Park'
		],
		neighboringCities: ['Vancouver', 'New Westminster', 'Coquitlam', 'North Vancouver'],
		demographics: {
			primaryIndustries: ['Retail', 'Manufacturing', 'Education', 'Healthcare', 'Technology']
		}
	},
	{
		id: 'richmond',
		name: 'Richmond',
		province: 'BC',
		region: 'metro-vancouver',
		population: 209937,
		coordinates: { lat: 49.1666, lng: -123.1336 },
		description: 'Richmond is a vibrant multicultural city known for its international business connections, making it perfect for companies targeting diverse markets.',
		keyFeatures: [
			'International business hub',
			'YVR Airport proximity',
			'Strong Asian market presence',
			'Luxury shopping destinations',
			'Growing tech sector'
		],
		businessTypes: [
			'Import/Export Companies',
			'International Trade',
			'Luxury Retail',
			'Real Estate',
			'Professional Services',
			'Technology Startups'
		],
		seoTitle: 'Digital Marketing Richmond BC | Multilingual SEO & Video Services',
		seoDescription: 'Professional digital marketing agency in Richmond, BC. Multilingual SEO, video production, and social media services for Richmond\'s diverse business community.',
		seoKeywords: [
			'digital marketing Richmond BC',
			'Richmond SEO services',
			'video production Richmond',
			'multilingual marketing Richmond',
			'Richmond marketing agency',
			'local SEO Richmond'
		],
		localLandmarks: [
			'Richmond Centre',
			'YVR Airport',
			'Aberdeen Centre',
			'Richmond Olympic Oval',
			'Steveston Village',
			'Richmond Night Market'
		],
		neighboringCities: ['Vancouver', 'Delta', 'New Westminster'],
		demographics: {
			primaryIndustries: ['International Trade', 'Technology', 'Tourism', 'Real Estate', 'Aviation']
		}
	},
	{
		id: 'surrey',
		name: 'Surrey',
		province: 'BC',
		region: 'metro-vancouver',
		population: 568322,
		coordinates: { lat: 49.1913, lng: -122.8490 },
		description: 'Surrey is one of BC\'s fastest-growing cities with a booming economy and diverse business landscape, offering excellent opportunities for digital marketing.',
		keyFeatures: [
			'Fastest growing city in BC',
			'Diverse business ecosystem',
			'Strong manufacturing base',
			'Growing tech corridor',
			'Young demographic'
		],
		businessTypes: [
			'Manufacturing & Industrial',
			'Technology Companies',
			'Healthcare Services',
			'Retail & Commercial',
			'Construction & Development',
			'Professional Services'
		],
		seoTitle: 'Digital Marketing Surrey BC | Local SEO & Video Production Services',
		seoDescription: 'Top digital marketing agency in Surrey, BC. Expert local SEO, video production, and social media marketing services for Surrey businesses.',
		seoKeywords: [
			'digital marketing Surrey',
			'Surrey SEO services',
			'video production Surrey BC',
			'Surrey marketing agency',
			'local SEO Surrey',
			'social media marketing Surrey'
		],
		localLandmarks: [
			'Guildford Town Centre',
			'Surrey Central City',
			'White Rock Beach',
			'Green Timbers Urban Forest',
			'Surrey Museum',
			'Bear Creek Park'
		],
		neighboringCities: ['Delta', 'Langley', 'White Rock', 'New Westminster'],
		demographics: {
			primaryIndustries: ['Manufacturing', 'Technology', 'Healthcare', 'Construction', 'Logistics']
		}
	},
	
	// Fraser Valley Cities
	{
		id: 'abbotsford',
		name: 'Abbotsford',
		province: 'BC',
		region: 'fraser-valley',
		population: 153524,
		coordinates: { lat: 49.0504, lng: -122.3045 },
		description: 'Abbotsford is the largest city in the Fraser Valley, known for agriculture, manufacturing, and a growing business community perfect for local marketing.',
		keyFeatures: [
			'Agricultural hub of BC',
			'Strong manufacturing sector',
			'Growing service industry',
			'Family-oriented community',
			'University town'
		],
		businessTypes: [
			'Agriculture & Farming',
			'Manufacturing',
			'Healthcare Services',
			'Educational Services',
			'Retail & Commercial',
			'Professional Services'
		],
		seoTitle: 'Digital Marketing Abbotsford BC | Fraser Valley SEO & Video Services',
		seoDescription: 'Leading digital marketing agency in Abbotsford, Fraser Valley. Professional SEO, video production, and social media services for local businesses.',
		seoKeywords: [
			'digital marketing Abbotsford',
			'Abbotsford SEO services',
			'Fraser Valley marketing',
			'video production Abbotsford',
			'Abbotsford marketing agency',
			'local SEO Abbotsford'
		],
		localLandmarks: [
			'University of the Fraser Valley',
			'Sevenoaks Shopping Centre',
			'Mill Lake Park',
			'Abbotsford Airport',
			'Castle Fun Park',
			'Discovery Trail'
		],
		neighboringCities: ['Chilliwack', 'Langley', 'Mission'],
		demographics: {
			primaryIndustries: ['Agriculture', 'Manufacturing', 'Education', 'Healthcare', 'Aerospace']
		}
	},
	{
		id: 'langley',
		name: 'Langley',
		province: 'BC',
		region: 'fraser-valley',
		population: 132603,
		coordinates: { lat: 49.1042, lng: -122.6604 },
		description: 'Langley combines suburban charm with business opportunities, making it an ideal location for companies seeking Fraser Valley market presence.',
		keyFeatures: [
			'Historic downtown core',
			'Growing suburban market',
			'Strong equestrian community',
			'Family businesses',
			'Emerging tech sector'
		],
		businessTypes: [
			'Retail & Commercial',
			'Professional Services',
			'Agriculture & Equestrian',
			'Healthcare Services',
			'Manufacturing',
			'Technology Startups'
		],
		seoTitle: 'Digital Marketing Langley BC | Local SEO & Video Production Fraser Valley',
		seoDescription: 'Expert digital marketing services in Langley, BC. Specializing in local SEO, video production, and social media for Langley and Fraser Valley businesses.',
		seoKeywords: [
			'digital marketing Langley',
			'Langley SEO services',
			'Fraser Valley marketing agency',
			'video production Langley BC',
			'local SEO Langley',
			'Langley social media marketing'
		],
		localLandmarks: [
			'Fort Langley National Historic Site',
			'Willowbrook Shopping Centre',
			'Greater Vancouver Zoo',
			'Campbell Valley Regional Park',
			'Langley Events Centre',
			'Township of Langley'
		],
		neighboringCities: ['Surrey', 'Abbotsford', 'Maple Ridge'],
		demographics: {
			primaryIndustries: ['Retail', 'Agriculture', 'Manufacturing', 'Professional Services', 'Technology']
		}
	},
	{
		id: 'chilliwack',
		name: 'Chilliwack',
		province: 'BC',
		region: 'fraser-valley',
		population: 83788,
		coordinates: { lat: 49.1579, lng: -121.9514 },
		description: 'Chilliwack is a growing Fraser Valley community with strong agricultural roots and increasing business development opportunities.',
		keyFeatures: [
			'Agricultural heritage',
			'Growing retail sector',
			'Outdoor recreation hub',
			'Strong community ties',
			'Emerging service industries'
		],
		businessTypes: [
			'Agriculture & Farming',
			'Retail & Commercial',
			'Tourism & Recreation',
			'Healthcare Services',
			'Professional Services',
			'Manufacturing'
		],
		seoTitle: 'Digital Marketing Chilliwack BC | Fraser Valley SEO & Video Services',
		seoDescription: 'Professional digital marketing agency in Chilliwack, Fraser Valley. Local SEO, video production, and social media services for Chilliwack businesses.',
		seoKeywords: [
			'digital marketing Chilliwack',
			'Chilliwack SEO services',
			'Fraser Valley marketing',
			'video production Chilliwack',
			'Chilliwack marketing agency',
			'local SEO Chilliwack'
		],
		localLandmarks: [
			'Cultus Lake',
			'Chilliwack Cultural Centre',
			'Harrison Hot Springs',
			'Bridal Veil Falls',
			'Chilliwack River Valley',
			'UFV Chilliwack Campus'
		],
		neighboringCities: ['Abbotsford', 'Mission', 'Harrison Hot Springs'],
		demographics: {
			primaryIndustries: ['Agriculture', 'Tourism', 'Retail', 'Healthcare', 'Education']
		}
	},
	{
		id: 'mission',
		name: 'Mission',
		province: 'BC',
		region: 'fraser-valley',
		population: 38833,
		coordinates: { lat: 49.1328, lng: -122.3117 },
		description: 'Mission is a scenic Fraser Valley community known for its historic charm and growing business opportunities along the Fraser River.',
		keyFeatures: [
			'Historic downtown',
			'Fraser River location',
			'Growing tourism sector',
			'Strong community support',
			'Outdoor recreation access'
		],
		businessTypes: [
			'Tourism & Hospitality',
			'Retail & Commercial',
			'Professional Services',
			'Healthcare Services',
			'Agriculture',
			'Construction Services'
		],
		seoTitle: 'Digital Marketing Mission BC | Fraser Valley Local SEO Services',
		seoDescription: 'Digital marketing services in Mission, BC. Expert local SEO, video production, and social media marketing for Mission and Fraser Valley businesses.',
		seoKeywords: [
			'digital marketing Mission BC',
			'Mission SEO services',
			'Fraser Valley marketing agency',
			'video production Mission',
			'local SEO Mission',
			'Mission social media marketing'
		],
		localLandmarks: [
			'Mission Museum',
			'Fraser River Heritage Park',
			'Hayward Lake',
			'Cascade Falls',
			'Mission Recreation Centre',
			'Historic Downtown Mission'
		],
		neighboringCities: ['Abbotsford', 'Chilliwack', 'Maple Ridge'],
		demographics: {
			primaryIndustries: ['Tourism', 'Agriculture', 'Retail', 'Professional Services', 'Construction']
		}
	}
];

export const getServiceAreaById = (id: string): ServiceArea | undefined => {
	return serviceAreas.find(area => area.id === id);
};

export const getServiceAreasByRegion = (region: 'metro-vancouver' | 'fraser-valley'): ServiceArea[] => {
	return serviceAreas.filter(area => area.region === region);
};

export const getAllServiceAreas = (): ServiceArea[] => {
	return serviceAreas;
};
