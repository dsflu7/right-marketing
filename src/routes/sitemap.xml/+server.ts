import type { RequestHandler } from './$types';
import { serviceAreas } from '$lib/data/service-areas';
import { services } from '$lib/data/services';
import { PUBLIC_DOMAIN } from '$env/static/public';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const baseUrl = `https://www.${PUBLIC_DOMAIN}`;
	
	const staticPages = [
		'',
		'/services',
		'/gallery',
		'/packages',
		'/contact',
		'/service-areas',
		'/our-story',
		'/privacy-policy',
		'/terms-and-conditions'
	];
	
	const servicePages = services.map(serviceId => `/services/${serviceId}`);
	const serviceAreaPages = serviceAreas.map(area => `/service-areas/${area.id}`);
	
	const allPages = [...staticPages, ...servicePages, ...serviceAreaPages];
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages.map(page => {
	const isServiceArea = page.startsWith('/service-areas/') && page !== '/service-areas';
	const isService = page.startsWith('/services/') && page !== '/services';
	const isHomePage = page === '';
	
	let priority = '0.5';
	let changefreq = 'monthly';
	
	if (isHomePage) {
		priority = '1.0';
		changefreq = 'weekly';
	} else if (page === '/services' || page === '/service-areas') {
		priority = '0.9';
		changefreq = 'weekly';
	} else if (isServiceArea || isService) {
		priority = '0.8';
		changefreq = 'monthly';
	} else if (page === '/contact') {
		priority = '0.7';
		changefreq = 'monthly';
	}
	
	return `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
