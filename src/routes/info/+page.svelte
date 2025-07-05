<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/Draggable';

	let cardContainer: HTMLElement | null = $state(null);
	let rotationX = $state(0);
	let rotationY = $state(0);
	let rotationZ = $state(0);
	let floatingTween: gsap.core.Tween | gsap.core.Timeline | null = $state(null);

	onMount(() => {
		gsap.registerPlugin(Draggable);

		gsap.set(cardContainer, {
			rotationX: 0,
			rotationY: 0,
			rotationZ: 0,
			z: 0,
			transformStyle: 'preserve-3d'
		});

		startFloatingAnimation();

		// Auto-rotate the card initially to show both sides
		gsap.to(cardContainer, {
			rotationY: 180,
			duration: 1.5,
			delay: 1.5,
			ease: 'power2.out'
		}).then(() => {
			rotationY = 180;
		});

		Draggable.create(cardContainer, {
			type: 'x,y',
			inertia: true,
			onDragStart: () => {
				stopFloatingAnimation();
			},
			onDrag: function () {
				// Adjust sensitivity based on screen size
				const sensitivity = window.innerWidth < 768 ? 1.2 : 0.8;
				
				// Horizontal drag (left/right) controls Y rotation (card turning left/right)
				rotationY += this.deltaX * sensitivity;
				// Vertical drag (up/down) controls X rotation (card tilting up/down)
				rotationX -= this.deltaY * sensitivity;

				// Keep rotations within reasonable bounds
				rotationX = Math.max(-75, Math.min(75, rotationX));

				gsap.set(cardContainer, {
					rotationX: rotationX,
					rotationY: rotationY,
					rotationZ: rotationZ
				});
			},
			onDragEnd: () => {
				gsap.to(cardContainer, {
					x: 0,
					y: 0,
					duration: 0.8,
					ease: 'power2.out'
				});
				
				setTimeout(() => {
					startFloatingAnimation();
				}, 300);
			}
		});
	});

	function handleTouchStart(e: TouchEvent) {
		if (e.touches.length === 2) {
			// Two-finger gesture for z-rotation
			e.preventDefault();
			rotationZ += 15;
			gsap.to(cardContainer, {
				rotationZ: rotationZ,
				duration: 0.5,
				ease: 'power2.out'
			});
		}
	}

	function handleWheel(e: WheelEvent) {
		e.preventDefault();
		if (!cardContainer) return;
		
		const currentZ = gsap.getProperty(cardContainer, 'z') as number;
		const newZ = currentZ + (e.deltaY > 0 ? -20 : 20);
		
		gsap.to(cardContainer, {
			z: Math.max(-100, Math.min(100, newZ)),
			duration: 0.3,
			ease: 'power2.out'
		});
	}

	function startFloatingAnimation() {
		const tl = gsap.timeline({ repeat: -1 });
		
		tl.to(cardContainer, {
			y: -15,
			z: 10,
			duration: 2.5,
			ease: 'power2.inOut'
		})
		.to(cardContainer, {
			y: 0,
			z: 0,
			duration: 2.5,
			ease: 'power2.inOut'
		})
		.to(cardContainer, {
			rotationY: rotationY + 5,
			rotationZ: rotationZ + 2,
			duration: 1.5,
			ease: 'power2.inOut'
		}, 0)
		.to(cardContainer, {
			rotationY: rotationY - 5,
			rotationZ: rotationZ - 2,
			duration: 1.5,
			ease: 'power2.inOut'
		}, 1.5)
		.to(cardContainer, {
			rotationY: rotationY,
			rotationZ: rotationZ,
			duration: 2,
			ease: 'power2.inOut'
		}, 3);
		
		floatingTween = tl;
	}

	function stopFloatingAnimation() {
		if (floatingTween) {
			floatingTween.kill();
		}
	}
</script>

<svelte:head>
	<title>Business Card - Right Marketing</title>
	<meta name="description" content="Interactive 3D business card for Right Marketing" />
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
	/>
</svelte:head>

<div
	class="box-border flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-background p-10 lg:mx-auto lg:rounded-2xl lg:shadow-[0_25px_50px_hsl(var(--foreground)/0.1)]"
>
	<div class="card-scene box-border flex w-full items-center justify-center p-5">
		<div
			class="card-container relative h-[calc(min(500px,80vw)*0.571)] w-[min(500px,80vw)] transform-gpu bg-primary max-[480px]:h-[calc(min(320px,85vw)*0.571)] max-[480px]:w-[min(320px,85vw)] max-[320px]:h-[calc(min(280px,90vw)*0.571)] max-[320px]:w-[min(280px,90vw)] lg:h-[calc(600px*0.571)] lg:w-[600px]"
			bind:this={cardContainer}
			ontouchstart={handleTouchStart}
			onwheel={handleWheel}
		>
			<!-- Card Front -->
			<div class="card-front" style="">
				<img
					src="/assets/card_front.png"
					alt="Business card front"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>

			<!-- Card Back -->
			<div class="card-back" style="">
				<img
					src="/assets/card_back.png"
					alt="Business card back"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>

			<!-- Card Thickness - Top Edge -->
			<div
				class="card-edge w-full rounded-t-lg"
				style="height: 4px; transform: rotateX(90deg) translateZ(2px); transform-origin: top;"
			></div>

			<!-- Card Thickness - Bottom Edge -->
			<div
				class="card-edge bottom-0 w-full rounded-b-lg"
				style="height: 4px; transform: rotateX(-90deg) translateZ(2px); transform-origin: bottom;"
			></div>

			<!-- Card Thickness - Left Edge -->
			<div
				class="card-edge left-0 h-full rounded-l-lg"
				style="width: 4px; transform: rotateY(-90deg) translateZ(2px); transform-origin: left;"
			></div>

			<!-- Card Thickness - Right Edge -->
			<div
				class="card-edge right-0 h-full rounded-r-lg"
				style="width: 4px; transform: rotateY(90deg) translateZ(2px); transform-origin: right;"
			></div>
		</div>
	</div>

	<div class="mt-7 text-center">
		<p class="m-0 text-base font-medium text-foreground opacity-70 max-[480px]:text-sm">
			Touch and drag to rotate • Two fingers to spin • Mouse wheel for depth
		</p>
	</div>
</div>

<style type="postcss">
	@reference "../../app.css";

	.card-scene {
		perspective: 1000px;
		perspective-origin: center center;
	}

	.card-container {
		transform-style: preserve-3d;
	}

	.card-front,
	.card-back {
		@apply absolute h-full w-full transform-gpu overflow-hidden rounded-lg bg-transparent shadow-[0_15px_35px_hsl(var(--foreground)/0.15)];
		backface-visibility: hidden;
	}

	.card-edge {
		@apply absolute rounded-lg;
		background: linear-gradient(135deg, 
			hsl(var(--primary) / 0.8) 0%, 
			hsl(var(--primary) / 0.9) 50%, 
			hsl(var(--primary) / 0.7) 100%);
		box-shadow: inset 0 0 0 0.5px hsl(var(--primary) / 0.3);
	}

	.card-front {
		transform: rotateY(0deg) translateZ(2px);
	}

	.card-back {
		transform: rotateY(180deg) translateZ(2px);
	}
</style>
