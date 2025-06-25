import type { PageLoad } from './$types';
import { packageSEOData } from '$lib/data/packages';

export const load: PageLoad = () => {
	return {
		seo: packageSEOData
	};
};
