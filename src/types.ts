import type { CSSProperties } from "vue";

export type StyleValue = string | number | boolean | null | undefined;
export type StyleProperty = keyof CSSProperties | `__${string}`;
export type BlockStyleMap = Partial<Record<StyleProperty, StyleValue>>;

// Structural interface for the host app's block object; anything with these
// members can drive the canvas handlers.
export interface CanvasBlock {
	baseStyles: BlockStyleMap;
	mobileStyles: BlockStyleMap;
	tabletStyles: BlockStyleMap;
	getStyle(style: StyleProperty, breakpoint?: string | null, nativeOnly?: boolean): StyleValue;
	setStyle(style: StyleProperty, value: StyleValue): void;
	isText(): boolean;
	hasChildren(): boolean;
	isMovable(): boolean;
	isExtendedFromComponent(): boolean;
}

export interface BreakpointConfig {
	icon: string;
	device: "desktop" | "tablet" | "mobile";
	displayName: string;
	width: number;
	visible: boolean;
	renderedOnce: boolean;
}

export interface CanvasProps {
	overlayElement: HTMLElement | null;
	background: string;
	scale: number;
	translateX: number;
	translateY: number;
	settingCanvas: boolean;
	scaling: boolean;
	panning: boolean;
	breakpoints: BreakpointConfig[];
}
