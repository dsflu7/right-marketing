<script lang="ts">
	import { packagesFAQ } from '$lib/data/packages';
</script>

<svelte:head>
	<!-- Rich Snippets & Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Marketing Packages",
			"description": "Comprehensive marketing packages for small businesses including adverts packages and brand & website packages",
			"url": "https://www.rightmarketing.ca/packages",
			"mainEntity": {
				"@type": "Service",
				"name": "Digital Marketing Packages",
				"provider": {
					"@type": "Organization",
					"name": "Right Marketing",
					"url": "https://www.rightmarketing.ca",
					"logo": "https://www.rightmarketing.ca/assets/logo.png",
					"contactPoint": {
						"@type": "ContactPoint",
						"telephone": "+1-778-486-5911",
						"contactType": "customer service",
						"email": "info@rightmarketing.ca"
					},
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "12763 62 Ave",
						"addressLocality": "Surrey",
						"addressRegion": "BC",
						"postalCode": "V3X3M5",
						"addressCountry": "CA"
					},
					"areaServed": [
						{
							"@type": "City",
							"name": "Surrey",
							"addressRegion": "BC",
							"addressCountry": "CA"
						},
						{
							"@type": "City", 
							"name": "Vancouver",
							"addressRegion": "BC",
							"addressCountry": "CA"
						},
						{
							"@type": "State",
							"name": "British Columbia",
							"addressCountry": "CA"
						}
					]
				},
				"serviceType": "Digital Marketing",
				"description": "Comprehensive marketing packages including adverts packages for lead generation and brand & website packages for long-term growth",
				"offers": [
					{
						"@type": "Offer",
						"name": "Starter Package",
						"description": "Ad campaigns on one platform with professional video ad and basic automation",
						"category": "Advertising Package",
						"eligibleRegion": {
							"@type": "Country",
							"name": "Canada"
						}
					},
					{
						"@type": "Offer", 
						"name": "Standard Package",
						"description": "Multi-platform advertising with advanced automation and video content",
						"category": "Advertising Package",
						"eligibleRegion": {
							"@type": "Country",
							"name": "Canada"
						}
					},
					{
						"@type": "Offer",
						"name": "Premium Package", 
						"description": "Full-scale ad management with custom CRM and landing pages",
						"category": "Advertising Package",
						"eligibleRegion": {
							"@type": "Country",
							"name": "Canada"
						}
					},
					{
						"@type": "Offer",
						"name": "Pro Brand Builder Package",
						"description": "Foundation website with brand kit and social media management",
						"category": "Brand & Website Package",
						"eligibleRegion": {
							"@type": "Country",
							"name": "Canada"
						}
					},
					{
						"@type": "Offer",
						"name": "Growth Package",
						"description": "Full custom website with comprehensive SEO and marketing automation", 
						"category": "Brand & Website Package",
						"eligibleRegion": {
							"@type": "Country",
							"name": "Canada"
						}
					},
					{
						"@type": "Offer",
						"name": "Ultimate Package",
						"description": "Complete digital transformation with website, app, and dedicated support",
						"category": "Brand & Website Package", 
						"eligibleRegion": {
							"@type": "Country",
							"name": "Canada"
						}
					}
				]
			},
			"breadcrumb": {
				"@type": "BreadcrumbList",
				"itemListElement": [
					{
						"@type": "ListItem",
						"position": 1,
						"name": "Home",
						"item": "https://www.rightmarketing.ca"
					},
					{
						"@type": "ListItem", 
						"position": 2,
						"name": "Packages",
						"item": "https://www.rightmarketing.ca/packages"
					}
				]
			}
		}
	</script>
	
	<!-- FAQ Structured Data -->
	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": packagesFAQ.map(faq => ({
				"@type": "Question",
				"name": faq.question,
				"acceptedAnswer": {
					"@type": "Answer",
					"text": faq.answer
				}
			}))
		})}
	</script>
	
	<!-- LocalBusiness Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"@id": "https://www.rightmarketing.ca/#organization",
			"name": "Right Marketing",
			"alternateName": "Right Marketing Canada",
			"description": "Digital marketing agency specializing in small business growth through advertising, web development, and marketing automation.",
			"url": "https://www.rightmarketing.ca",
			"logo": "https://www.rightmarketing.ca/assets/logo.png",
			"image": "https://www.rightmarketing.ca/assets/logo.png",
			"telephone": "+1-778-486-5911",
			"email": "info@rightmarketing.ca",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "12763 62 Ave",
				"addressLocality": "Surrey",
				"addressRegion": "BC",
				"postalCode": "V3X3M5",
				"addressCountry": "CA"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": 49.1913,
				"longitude": -122.8490
			},
			"areaServed": [
				{
					"@type": "City",
					"name": "Surrey",
					"containedInPlace": {
						"@type": "State",
						"name": "British Columbia",
						"containedInPlace": {
							"@type": "Country",
							"name": "Canada"
						}
					}
				},
				{
					"@type": "City",
					"name": "Vancouver",
					"containedInPlace": {
						"@type": "State",
						"name": "British Columbia",
						"containedInPlace": {
							"@type": "Country",
							"name": "Canada"
						}
					}
				},
				{
					"@type": "State",
					"name": "British Columbia",
					"containedInPlace": {
						"@type": "Country",
						"name": "Canada"
					}
				}
			],
			"openingHours": [
				"Mo-Fr 09:00-17:00"
			],
			"contactPoint": [
				{
					"@type": "ContactPoint",
					"telephone": "+1-778-486-5911",
					"contactType": "customer service",
					"email": "info@rightmarketing.ca",
					"availableLanguage": ["English"],
					"areaServed": "CA"
				}
			],
			"sameAs": [
				"https://www.facebook.com/rightmarketing",
				"https://www.instagram.com/rightmarketing"
			],
			"foundingDate": "2020",
			"priceRange": "$$",
			"paymentAccepted": ["Cash", "Credit Card", "Invoice"],
			"currenciesAccepted": "CAD",
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Marketing Services",
				"itemListElement": [
					{
						"@type": "OfferCatalog",
						"name": "Adverts Packages",
						"itemListElement": [
							{
								"@type": "Offer",
								"itemOffered": {
									"@type": "Service",
									"name": "Starter Package",
									"description": "Ad campaigns on one platform with professional video ad and basic automation"
								}
							},
							{
								"@type": "Offer",
								"itemOffered": {
									"@type": "Service",
									"name": "Standard Package",
									"description": "Multi-platform advertising with advanced automation and video content"
								}
							},
							{
								"@type": "Offer",
								"itemOffered": {
									"@type": "Service",
									"name": "Premium Package",
									"description": "Full-scale ad management with custom CRM and landing pages"
								}
							}
						]
					},
					{
						"@type": "OfferCatalog",
						"name": "Brand & Website Packages",
						"itemListElement": [
							{
								"@type": "Offer",
								"itemOffered": {
									"@type": "Service",
									"name": "Pro Brand Builder Package",
									"description": "Foundation website with brand kit and social media management"
								}
							},
							{
								"@type": "Offer",
								"itemOffered": {
									"@type": "Service",
									"name": "Growth Package",
									"description": "Full custom website with comprehensive SEO and marketing automation"
								}
							},
							{
								"@type": "Offer",
								"itemOffered": {
									"@type": "Service",
									"name": "Ultimate Package",
									"description": "Complete digital transformation with website, app, and dedicated support"
								}
							}
						]
					}
				]
			}
		}
	</script>
	
	<!-- Product/Service Structured Data for Each Package Category -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Product",
			"name": "Digital Marketing Packages",
			"description": "Comprehensive marketing solutions for small businesses including advertising, web development, and automation services",
			"brand": {
				"@type": "Brand",
				"name": "Right Marketing"
			},
			"category": "Digital Marketing Services",
			"audience": {
				"@type": "BusinessAudience",
				"audienceType": "Small and Medium Businesses"
			},
			"provider": {
				"@type": "Organization",
				"name": "Right Marketing"
			},
			"areaServed": {
				"@type": "Country",
				"name": "Canada"
			},
			"hasVariant": [
				{
					"@type": "ProductGroup",
					"name": "Adverts Packages",
					"description": "Lead generation focused advertising packages with video production and automation",
					"variesBy": "serviceLevel"
				},
				{
					"@type": "ProductGroup", 
					"name": "Brand & Website Packages",
					"description": "Long-term growth packages focusing on brand building and web presence",
					"variesBy": "serviceLevel"
				}
			]
		}
	</script>
</svelte:head>
