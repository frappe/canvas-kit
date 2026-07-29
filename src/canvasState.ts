import { reactive } from "vue";
import type { IndicatorGeometry } from "./utils/dropGeometry";

// Alignment guide lines drawn while resizing/positioning (screen px).
export const guides = reactive({
	showX: false,
	showY: false,
	x: 0,
	y: 0,
});

// On-canvas block reordering (pointer-based). The overlay DropIndicator reads
// this; nothing here touches the canvas DOM, so the layout stays frozen during
// a drag.
export const reorderTarget = reactive({
	active: false,
	line: null as IndicatorGeometry | null,
	containerRect: null as { top: number; left: number; width: number; height: number } | null,
	isComponentParent: false,
	// dropping into the block's own container (reorder) vs a different one
	isSameContainer: false,
});

export function clearReorderTarget() {
	Object.assign(reorderTarget, {
		active: false,
		line: null,
		containerRect: null,
		isComponentParent: false,
		isSameContainer: false,
	});
}
