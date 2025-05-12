<script lang="ts">
	import Instagram from '../icons/Instagram.svelte';
	import PhoneCall from '../icons/PhoneCall.svelte';
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';
	import { scrollThreshold } from '$lib/utils/animations.store';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { isMobile, quoteDialogOpen, servicesPageNavigating } from '$lib/utils/stores';
	import { slide } from 'svelte/transition';
	import { PUBLIC_COMPANY_NAME } from '$env/static/public';
	import { Cross2, HamburgerMenu } from 'svelte-radix';
	import { services } from '$lib/data/services';
	import { contactInfo } from '$lib/data/locations';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import DropdownItem from '$lib/components/DropdownItem.svelte';
	import Image from './Image.svelte';
	import MainLogo from '$lib/icons/MainLogo.svelte';

	// import logoAddr from '$lib/icons/logo.png?enhanced';

	let initScroll = $state(0);
	let lastScrollY = $state(0);
	let scrollDirection = $state('up'); // 'up' or 'down'
	let headerVisible = $state(true);
	let isLandingPage = $derived(page.route.id === '/');

	let mobileNavButtonWidth: number = $state(0);
	let mobileNavOpen = $state(false);
	let firstLoad = $state(true);

	$effect(() => {
		$isMobile = mobileNavButtonWidth !== 0;
	});

	// Detect scroll direction and update header visibility
	$effect(() => {
		// Don't hide header when mobile menu is open or at the top of the page
		if (mobileNavOpen || initScroll < 50) {
			headerVisible = true;
			return;
		}
		
		// Determine scroll direction
		if (initScroll > lastScrollY + 10) { // Add a small threshold to prevent jitter
			// Scrolling down significantly
			scrollDirection = 'down';
			headerVisible = false;
		} else if (lastScrollY > initScroll + 5) { // Smaller threshold for showing
			// Scrolling up
			scrollDirection = 'up';
			headerVisible = true;
		}

		// Update last scroll position
		lastScrollY = initScroll;
	});

	let colorState = $derived(!$isMobile ? initScroll < $scrollThreshold && isLandingPage : false);
	let domain = $derived(`${page.url.protocol}//${page.url.host}`);

	onMount(() => {
		firstLoad = false;
	});
</script>

<svelte:window bind:scrollY={initScroll} />

<nav class="realtive">
	<div class="fixed left-[6%] {headerVisible ? 'top-10' : '-top-16'} z-[55] aspect-square h-16 w-16 transition-all duration-300 ease-out">
		<a
			href={domain}
			onclick={(e) => {
				e.preventDefault();
				goto('/');
			}}
			aria-label="Go to home page"
		>
			<!-- <Logo class="h-full w-full" /> -->
			 <MainLogo class="h-16 w-min" />
			<!-- <Image url="/assets/logo.png" description="company logo header" width="64px" height="64px" /> -->
			<!-- <enhanced:img sizes="64px" src={logoAddr} alt="company logo header" class="h-full w-full" /> -->
		</a>
	</div>

	<div
		class="fixed top-0 z-[60] w-full bg-primary py-1 text-center font-[Cantarell] font-semibold text-primary-foreground md:pr-20 md:text-right lg:text-lg"
	>
		<a href="tel:{contactInfo.phone}">
			Call us at {contactInfo.phone
				.match(/(\d{3})(\d{3})(\d{4})/)
				?.slice(1)
				.join('-')}
		</a>
	</div>

	<div
		class="fixed {headerVisible ? 'top-8' : '-top-28'} z-50 flex h-20 w-full flex-row justify-between border-b px-[6%] {initScroll <
			$scrollThreshold && isLandingPage
			? 'border-transparent bg-transparent'
			: ' bg-primary'} border-black transition-all duration-500 ease-out"
	>
		<!-- <button
			class="flex items-center pl-20 font-[Cantarell] text-xl lg:text-2xl {initScroll <
				$scrollThreshold && isLandingPage
				? 'text-transparent'
				: 'text-[#00000080]'}"
			id="header-logo-area"
			onclick={() => goto('/')}
			aria-label="Go to home page"
		>
			{PUBLIC_COMPANY_NAME}
		</button> -->
		<div class="hidden pl-20 md:block"></div>

		{#if !(initScroll < $scrollThreshold && isLandingPage) && $isMobile}
			<Button
				onclick={() => goto('/contact')}
				variant="secondary"
				aria-label="Open quote request form"
				class="absolute right-20 top-6"
			>
				Get Free Quote
			</Button>
		{/if}

		<button
			class="absolute right-4 top-0 px-4 py-8 lg:hidden {initScroll < $scrollThreshold &&
			isLandingPage
				? 'text-white'
				: 'text-black'}"
			bind:clientWidth={mobileNavButtonWidth}
			onclick={() => (mobileNavOpen = !mobileNavOpen)}
			aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
		>
			{#if mobileNavOpen}
				<Cross2 />
			{:else}
				<HamburgerMenu />
			{/if}
		</button>

		{#if (!firstLoad && !$isMobile) || mobileNavOpen}
			<div
				in:slide
				class="absolute top-20 -mx-[6%] flex w-screen flex-col items-center justify-evenly gap-8 border-b border-black bg-white py-4 lg:relative lg:top-0 lg:mx-0 lg:w-auto lg:flex-row lg:border-transparent lg:bg-transparent lg:py-0"
			>
				<Dropdown
					label="Services"
					buttonClass={colorState ? 'text-white' : 'text-primary-foreground'}
					title="Our Services"
					menuClass="w-56"
				>
					<DropdownItem
						onclick={() => {
							goto('/services');
							$servicesPageNavigating = true;
						}}
						class="border-b"
					>
						<a href="{domain}/services/" onclick={(e) => e.preventDefault()}> All Services </a>
					</DropdownItem>
					{#each services as service}
						<DropdownItem
							onclick={() => {
								goto(`/services/${service}`);
								$servicesPageNavigating = true;
							}}
						>
							<a href={`${domain}/services/${service}`} onclick={(e) => e.preventDefault()}>
								{service
									.split('-')
									.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
									.join(' ')}
							</a>
						</DropdownItem>
					{/each}
				</Dropdown>

				<Dropdown
					label="About"
					buttonClass={colorState ? 'text-white' : 'text-primary-foreground'}
					title="About Us"
					menuClass="w-56"
				>
					<DropdownItem
						onclick={() => {
							goto('/our-story');
						}}
					>
						<a href="{domain}/our-story/" onclick={(e) => e.preventDefault()}>Our Story</a>
					</DropdownItem>
					<DropdownItem
						onclick={() => {
							goto('/privacy-policy');
						}}
					>
						<a href="{domain}/privacy-policy/" onclick={(e) => e.preventDefault()}>Privacy Policy</a>
					</DropdownItem>
					<DropdownItem
						onclick={() => {
							goto('/terms-and-conditions');
						}}
					>
						<a href="{domain}/terms-and-conditions/" onclick={(e) => e.preventDefault()}>Terms & Conditions</a>
					</DropdownItem>
				</Dropdown>

				<a
					href="{domain}/gallery"
					onclick={(e) => {
						e.preventDefault();
						goto('/gallery');
					}}
					class="font-semibold {colorState ? 'text-white' : 'text-primary-foreground'}"
				>
					Success Stories
				</a>

				<div class="flex items-center gap-4 md:flex-row md:gap-7">
					<a href={contactInfo.instagram} aria-label="Go to instagram page" class="text-xs font-semibold uppercase">
						<Instagram color={colorState ? 'white' : '#e3c099'} />
					</a>
					<a
						href="tel:{contactInfo.phone}"
						aria-label="Call phone number"
						class="text-xs font-semibold uppercase"
					>
						<PhoneCall color={colorState ? 'white' : '#e3c099'} />
					</a>
				</div>
				<Button
					onclick={() => goto('/contact')}
					variant="secondary"
					size="lg"
					class="hidden lg:block"
					aria-label="Open quote request form">Get Free Quote</Button
				>
			</div>
		{/if}
	</div>
</nav>
