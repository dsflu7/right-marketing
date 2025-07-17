export interface CardProps {
	// Image properties
	frontImage?: string;
	backImage?: string;
	altTextFront?: string;
	altTextBack?: string;
	
	// Interaction settings
	draggable?: boolean;
	autoRotate?: boolean;
	floatingAnimation?: boolean;
	showTwoFingerSpin?: boolean;
	showMouseWheelDepth?: boolean;
	
	// Initial position and rotation
	initialRotationX?: number;
	initialRotationY?: number;
	initialRotationZ?: number;
	position?: { x: number; y: number; z: number };
	
	// Rotation settings
	rotationSensitivity?: number;
	rotationBounds?: { min: number; max: number };
	
	// Animation settings
	floatingRange?: number;
	floatingDuration?: number;
	autoRotateDelay?: number;
	autoRotateDuration?: number;
	autoRotateAngle?: number;
	
	// Visual settings
	perspective?: number;
	cardScale?: number;
}

export const defaultCardProps: CardProps = {
	// Image properties
	frontImage: '/assets/card_front.png',
	backImage: '/assets/card_back.png',
	altTextFront: 'Business card front',
	altTextBack: 'Business card back',
	
	// Interaction settings
	draggable: true,
	autoRotate: true,
	floatingAnimation: true,
	showTwoFingerSpin: true,
	showMouseWheelDepth: true,
	
	// Initial position and rotation
	initialRotationX: 0,
	initialRotationY: 0,
	initialRotationZ: 0,
	position: { x: 0, y: 0, z: 0 },
	
	// Rotation settings
	rotationSensitivity: 0.8,
	rotationBounds: { min: -180, max: 180 },
	
	// Animation settings
	floatingRange: 15,
	floatingDuration: 2.5,
	autoRotateDelay: 1.5,
	autoRotateDuration: 1.5,
	autoRotateAngle: 180,
	
	// Visual settings
	perspective: 1000,
	cardScale: 1
};
