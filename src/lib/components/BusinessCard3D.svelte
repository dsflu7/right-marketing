<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/Draggable';
	import type { CardProps } from '$lib/types/card';
	import { defaultCardProps } from '$lib/types/card';

	let {
		config = defaultCardProps
	}: {
		config?: CardProps;
	} = $props();

	const cardConfig = { ...defaultCardProps, ...config };

	let cardContainer: HTMLElement | null = $state(null);
	let rotationX = $state(cardConfig.initialRotationX!);
	let rotationY = $state(cardConfig.initialRotationY!);
	let rotationZ = $state(cardConfig.initialRotationZ!);
	let floatingTween: gsap.core.Tween | gsap.core.Timeline | null = $state(null);
	let autoRotateTween: gsap.core.Tween | null = $state(null);
	let isManuallyInteracting = $state(false);
	
	// Business card aspect ratio (standard business card: 3.5" x 2" = 7:4)
	
	// Reactive width for responsive sizing
	let cardWidth = $state('min(500px, 80vw)');
	
	// Update width based on viewport
	$effect(() => {
		if (typeof window !== 'undefined') {
			const updateWidth = () => {
				const vw = window.innerWidth;
				
				if (vw <= 320) {
					cardWidth = 'min(280px, 90vw)';
				} else if (vw <= 480) {
					cardWidth = 'min(320px, 85vw)';
				} else if (vw >= 1024) {
					cardWidth = '600px';
				} else {
					cardWidth = 'min(500px, 80vw)';
				}
			};
			
			updateWidth();
			window.addEventListener('resize', updateWidth);
			
			return () => window.removeEventListener('resize', updateWidth);
		}
	});

	export function rotate(x: number, y: number, z: number, duration: number = 1) {
		if (!cardContainer) return;
		
		rotationX = x;
		rotationY = y;
		rotationZ = z;
		
		gsap.to(cardContainer, {
			rotationX: x,
			rotationY: y,
			rotationZ: z,
			duration: duration,
			ease: 'power2.out'
		});
	}

	export function moveTo(x: number, y: number, z: number, duration: number = 1) {
		if (!cardContainer) return;
		
		gsap.to(cardContainer, {
			x: x,
			y: y,
			z: z,
			duration: duration,
			ease: 'power2.out'
		});
	}

	export function startFloating() {
		if (cardConfig.floatingAnimation) {
			startFloatingAnimation();
		}
	}

	export function stopFloating() {
		stopFloatingAnimation();
	}

	export function stopAutoRotation() {
		if (autoRotateTween) {
			autoRotateTween.kill();
			autoRotateTween = null;
		}
	}

	export function resetPosition() {
		if (!cardContainer) return;
		
		rotationX = cardConfig.initialRotationX!;
		rotationY = cardConfig.initialRotationY!;
		rotationZ = cardConfig.initialRotationZ!;
		
		gsap.to(cardContainer, {
			rotationX: cardConfig.initialRotationX,
			rotationY: cardConfig.initialRotationY,
			rotationZ: cardConfig.initialRotationZ,
			x: cardConfig.position!.x,
			y: cardConfig.position!.y,
			z: cardConfig.position!.z,
			duration: 1,
			ease: 'power2.out'
		});
	}

	export function setDraggable(enabled: boolean) {
		cardConfig.draggable = enabled;
		if (cardContainer) {
			const draggableInstance = Draggable.get(cardContainer);
			if (draggableInstance) {
				if (enabled) {
					draggableInstance.enable();
				} else {
					draggableInstance.disable();
				}
			}
		}
	}

	export function setFloatingAnimation(enabled: boolean) {
		cardConfig.floatingAnimation = enabled;
		if (enabled) {
			startFloatingAnimation();
		} else {
			stopFloatingAnimation();
		}
	}

	export function updateConfig(newConfig: Partial<CardProps>) {
		Object.assign(cardConfig, newConfig);
	}

	export function getConfig(): CardProps {
		return { ...cardConfig };
	}

	onMount(() => {
		if (!cardContainer) return;
		
		gsap.registerPlugin(Draggable);

		gsap.set(cardContainer, {
			rotationX: cardConfig.initialRotationX,
			rotationY: cardConfig.initialRotationY,
			rotationZ: cardConfig.initialRotationZ,
			x: cardConfig.position!.x,
			y: cardConfig.position!.y,
			z: cardConfig.position!.z,
			scale: cardConfig.cardScale,
			transformStyle: 'preserve-3d'
		});

		if (cardConfig.floatingAnimation) {
			startFloatingAnimation();
		}

		if (cardConfig.autoRotate) {
			autoRotateTween = gsap.to(cardContainer, {
				rotationY: rotationY + cardConfig.autoRotateAngle!,
				duration: cardConfig.autoRotateDuration,
				delay: cardConfig.autoRotateDelay,
				ease: 'power2.out',
				onComplete: () => {
					rotationY = rotationY + cardConfig.autoRotateAngle!;
				}
			});
		}

		if (cardConfig.draggable) {
			Draggable.create(cardContainer, {
				type: 'x,y',
				inertia: true,
				onDragStart: function() {
					// Stop ALL animations immediately
					stopFloatingAnimation();
					isManuallyInteracting = true;
					
					// Pause auto-rotation if it's running
					if (autoRotateTween) {
						autoRotateTween.pause();
					}
					
					// Kill any existing tweens on the card to prevent conflicts
					gsap.killTweensOf(cardContainer);
					
					if (!cardContainer) return;
					
					// Calculate drag start position relative to card center
					const rect = cardContainer.getBoundingClientRect();
					const centerX = rect.left + rect.width / 2;
					const centerY = rect.top + rect.height / 2;
					
					// Get pointer position
					const pointerX = this.pointerX;
					const pointerY = this.pointerY;
					
					// Calculate distance from center
					const distanceFromCenterX = Math.abs(pointerX - centerX);
					const distanceFromCenterY = Math.abs(pointerY - centerY);
					
					// Define center zone (30% of card dimensions)
					const centerZoneX = rect.width * 0.3;
					const centerZoneY = rect.height * 0.3;
					
					// Determine if dragging from center or edge
					this.isDraggingFromCenter = distanceFromCenterX < centerZoneX && distanceFromCenterY < centerZoneY;
					
					// Store initial pointer position for rotation calculation
					this.initialPointerX = pointerX;
					this.initialPointerY = pointerY;
					this.initialCardCenterX = centerX;
					this.initialCardCenterY = centerY;
					
					// Store initial card position for rotation mode
					this.initialCardX = gsap.getProperty(cardContainer, 'x') as number;
					this.initialCardY = gsap.getProperty(cardContainer, 'y') as number;
				},
				onDrag: function () {
					const baseSensitivity = window.innerWidth < 768 ? 1.2 : cardConfig.rotationSensitivity!;
					
					if (this.isDraggingFromCenter) {
						return;
					} else {
						// Edge drag: rotate around center, prevent position changes
						const currentPointerX = this.pointerX;
						const currentPointerY = this.pointerY;
						
						// Calculate rotation based on pointer movement relative to card center
						const deltaX = currentPointerX - this.initialPointerX;
						const deltaY = currentPointerY - this.initialPointerY;
						
						// Convert pointer movement to rotation
						rotationY += deltaX * baseSensitivity * 0.5;
						rotationX -= deltaY * baseSensitivity * 0.5;
						
						// Keep rotations within bounds
						rotationX = Math.max(cardConfig.rotationBounds!.min, Math.min(cardConfig.rotationBounds!.max, rotationX));
						
						// Apply rotation while keeping position fixed
						gsap.set(cardContainer, {
							rotationX: rotationX,
							rotationY: rotationY,
							rotationZ: rotationZ,
							x: this.initialCardX,
							y: this.initialCardY
						});
						
						// Update initial pointer position for next frame
						this.initialPointerX = currentPointerX;
						this.initialPointerY = currentPointerY;
					}
				},
				onDragEnd: () => {
					isManuallyInteracting = false;
					
					// Always return to initial position
					gsap.to(cardContainer, {
						x: cardConfig.position!.x,
						y: cardConfig.position!.y,
						duration: 0.8,
						ease: 'power2.out',
						onComplete: () => {
							// Only restart animations after position tween completes
							setTimeout(() => {
								if (cardConfig.floatingAnimation && !isManuallyInteracting) {
									startFloatingAnimation();
								}
								// Resume auto-rotation if it was paused
								if (autoRotateTween && autoRotateTween.paused() && !isManuallyInteracting) {
									autoRotateTween.resume();
								}
							}, 100);
						}
					});
				}
			});
		}
	});

	function handleTouchStart(e: TouchEvent) {
		if (!cardConfig.showTwoFingerSpin) return;
		
		if (e.touches.length === 2) {
			// Two-finger gesture for z-rotation
			e.preventDefault();
			isManuallyInteracting = true;
			
			// Stop all animations during manual interaction
			stopFloatingAnimation();
			if (autoRotateTween) {
				autoRotateTween.pause();
			}
			gsap.killTweensOf(cardContainer);
			
			rotationZ += 15;
			gsap.to(cardContainer, {
				rotationZ: rotationZ,
				duration: 0.5,
				ease: 'power2.out',
				onComplete: () => {
					isManuallyInteracting = false;
					// Resume animations after a brief delay
					setTimeout(() => {
						if (cardConfig.floatingAnimation && !isManuallyInteracting) {
							startFloatingAnimation();
						}
						if (autoRotateTween && autoRotateTween.paused() && !isManuallyInteracting) {
							autoRotateTween.resume();
						}
					}, 100);
				}
			});
		}
	}

	function handleWheel(e: WheelEvent) {
		if (!cardConfig.showMouseWheelDepth) return;
		
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
		if (!cardContainer || isManuallyInteracting) return;
		
		stopFloatingAnimation();
		
		const tl = gsap.timeline({ repeat: -1 });
		
		tl.to(cardContainer, {
			y: cardConfig.position!.y - cardConfig.floatingRange!,
			z: cardConfig.position!.z + 10,
			duration: cardConfig.floatingDuration,
			ease: 'power2.inOut'
		})
		.to(cardContainer, {
			y: cardConfig.position!.y,
			z: cardConfig.position!.z,
			duration: cardConfig.floatingDuration,
			ease: 'power2.inOut'
		})
		.to(cardContainer, {
			rotationY: rotationY + 5,
			rotationZ: rotationZ + 2,
			duration: cardConfig.floatingDuration! * 0.6,
			ease: 'power2.inOut'
		}, 0)
		.to(cardContainer, {
			rotationY: rotationY - 5,
			rotationZ: rotationZ - 2,
			duration: cardConfig.floatingDuration! * 0.6,
			ease: 'power2.inOut'
		}, cardConfig.floatingDuration! * 0.6)
		.to(cardContainer, {
			rotationY: rotationY,
			rotationZ: rotationZ,
			duration: cardConfig.floatingDuration! * 0.8,
			ease: 'power2.inOut'
		}, cardConfig.floatingDuration! * 1.2);
		
		floatingTween = tl;
	}

	function stopFloatingAnimation() {
		if (floatingTween) {
			floatingTween.kill();
			floatingTween = null;
		}
	}
</script>

<div class="card-scene box-border flex w-full items-center justify-center p-5" style="perspective: {cardConfig.perspective}px; perspective-origin: center center;">
	<div
		class="card-container relative transform-gpu bg-primary"
		bind:this={cardContainer}
		ontouchstart={handleTouchStart}
		onwheel={handleWheel}
		style="transform-style: preserve-3d; width: {cardWidth}; aspect-ratio: 7 / 4;"
	>
		<!-- Card Front -->
		<div class="card-front">
			<img
				src={cardConfig.frontImage}
				alt={cardConfig.altTextFront}
				class="h-full w-full rounded-lg object-cover"
			/>
		</div>

		<!-- Card Back -->
		<div class="card-back">
			<img
				src={cardConfig.backImage}
				alt={cardConfig.altTextBack}
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

<style type="postcss">
	@reference "../../app.css";

	.card-scene {
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
