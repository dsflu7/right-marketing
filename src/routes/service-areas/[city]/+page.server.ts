import type { PageServerLoad } from './$types';
import { getServiceAreaById } from '$lib/data/service-areas';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const serviceArea = getServiceAreaById(params.city);
	
	if (!serviceArea) {
		throw error(404, 'Service area not found');
	}
	
	return {
		serviceArea
	};
};
