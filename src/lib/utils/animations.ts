import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation configurations
export const animationConfig = {
	// Hero animations
	hero: {
		duration: 1,
		ease: 'power2.out',
		y: 50,
		opacity: 0
	},
	// Section fade-ins
	section: {
		duration: 0.8,
		ease: 'power2.out',
		y: 40,
		opacity: 0,
		scrollTrigger: {
			start: 'top 85%'
		}
	},
	// Card/item animations
	cards: {
		duration: 0.6,
		ease: 'power2.out',
		y: 60,
		opacity: 0,
		stagger: 0.2,
		scrollTrigger: {
			start: 'top 70%'
		}
	},
	// Text reveal animations
	textReveal: {
		duration: 0.5,
		ease: 'power2.out',
		x: -30,
		opacity: 0,
		stagger: 0.1,
		scrollTrigger: {
			start: 'top 75%'
		}
	},
	// Scale animations for featured items
	featured: {
		duration: 0.8,
		ease: 'power2.out',
		scale: 0.9,
		y: 80,
		opacity: 0,
		scrollTrigger: {
			start: 'top 80%'
		}
	}
};

// Animation utility functions
export class PageAnimations {
	private static isInitialized = false;

	static init() {
		if (!this.isInitialized) {
			gsap.registerPlugin(ScrollTrigger);
			this.isInitialized = true;
		}
	}

	// Hero section animation
	static animateHero(selector: string) {
		this.init();
		return gsap.fromTo(
			selector,
			{ opacity: 0, y: animationConfig.hero.y },
			{
				opacity: 1,
				y: 0,
				duration: animationConfig.hero.duration,
				ease: animationConfig.hero.ease
			}
		);
	}

	// Section fade-in animation
	static animateSection(selector: string, customConfig?: object) {
		this.init();
		const config = { ...animationConfig.section, ...customConfig };
		return gsap.fromTo(
			selector,
			{ opacity: 0, y: config.y },
			{
				opacity: 1,
				y: 0,
				duration: config.duration,
				ease: config.ease,
				scrollTrigger: {
					trigger: selector,
					...config.scrollTrigger
				}
			}
		);
	}

	// Cards/items animation with stagger
	static animateCards(selector: string, customConfig?: object) {
		this.init();
		const config = { ...animationConfig.cards, ...customConfig };
		return gsap.fromTo(
			selector,
			{ opacity: 0, y: config.y },
			{
				opacity: 1,
				y: 0,
				duration: config.duration,
				stagger: config.stagger,
				ease: config.ease,
				scrollTrigger: {
					trigger: selector,
					...config.scrollTrigger
				}
			}
		);
	}

	// Text reveal animation
	static animateTextReveal(selector: string, customConfig?: object) {
		this.init();
		const config = { ...animationConfig.textReveal, ...customConfig };
		return gsap.fromTo(
			selector,
			{ opacity: 0, x: config.x },
			{
				opacity: 1,
				x: 0,
				duration: config.duration,
				stagger: config.stagger,
				ease: config.ease,
				scrollTrigger: {
					trigger: selector,
					...config.scrollTrigger
				}
			}
		);
	}

	// Featured item animation
	static animateFeatured(selector: string, customConfig?: object) {
		this.init();
		const config = { ...animationConfig.featured, ...customConfig };
		return gsap.fromTo(
			selector,
			{ opacity: 0, y: config.y, scale: config.scale },
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: config.duration,
				ease: config.ease,
				scrollTrigger: {
					trigger: selector,
					...config.scrollTrigger
				}
			}
		);
	}

	// Gallery/grid animation
	static animateGallery(selector: string, customConfig?: object) {
		this.init();
		const config = { ...animationConfig.cards, stagger: 0.1, ...customConfig };
		return gsap.fromTo(
			selector,
			{ opacity: 0, scale: 0.8, y: 30 },
			{
				opacity: 1,
				scale: 1,
				y: 0,
				duration: config.duration,
				stagger: config.stagger,
				ease: config.ease,
				scrollTrigger: {
					trigger: selector,
					...config.scrollTrigger
				}
			}
		);
	}

	// Cleanup function
	static cleanup() {
		ScrollTrigger.getAll().forEach(trigger => trigger.kill());
	}
}

// Performance optimization settings
export const performanceConfig = {
	// Disable animations on low-performance devices
	enableAnimations: true,
	// Reduce motion for users who prefer it
	respectReducedMotion: true,
	// Throttle scroll events
	scrollThrottle: 16, // ~60fps
	// Batch DOM reads/writes
	batchSize: 10
};

// Check if animations should be enabled based on user preferences and device capabilities
export function shouldEnableAnimations(): boolean {
	if (!performanceConfig.enableAnimations) return false;
	
	// Check for reduced motion preference
	if (performanceConfig.respectReducedMotion) {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (mediaQuery.matches) return false;
	}
	
	// Basic performance check (could be enhanced)
	const isLowPerformance = navigator.hardwareConcurrency < 4;
	if (isLowPerformance && window.innerWidth < 768) return false;
	
	return true;
}
