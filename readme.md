# Canvas Kit

Vue components for building visual canvas editors.

Ships raw `.vue`/`.ts` source, your bundler compiles it.

## Installation

```sh
npm install frappe-canvas-kit
```

Requires `vue`, `frappe-ui`, `@vueuse/core`, and `reka-ui` as peers. Include the package in your Tailwind `content` globs:

```js
content: ["./node_modules/frappe-canvas-kit/src/**/*.{vue,ts}"],
```

Icon classes like `lucide-x` need frappe-ui's vite plugin with `lucideIcons: true`.

## Usage

```vue
<script setup>
import { InlineInput } from "frappe-canvas-kit";
</script>

<template>
	<InlineInput label="Height" :model-value="height" :unit-options="['px', '%']" />
</template>
```

## Components

Inputs and controls: `AnglePicker`, `ArrayEditor`, `ArrayInput`, `Autocomplete`, `CollapsibleSection`, `ContextMenu`, `EditableSpan`, `InlineInput`, `Input`, `InputLabel`, `MiddleTruncate`, `NumberArrows`, `OptionToggle`, `PropertyLabel`, `RangeInput`, `TabButtons`

Canvas: `BlockSnapGuides`, `BoxResizer`, `CursorTooltip`, `DraggablePopup`, `DropIndicator`, `MarginHandler`, `PaddingHandler`, `PanelResizer`

Canvas composables and utils: `useRotatedCursors`, `useSpacingHandler`, `setGuides`, `setPanAndZoom`, `trackTarget`, `startDrag`, drop geometry helpers, and shared `guides`/`reorderTarget` state.

Canvas handlers take the host's block object through the structural `CanvasBlock` interface (`getStyle`/`setStyle`, `baseStyles` maps, a few predicates), so any block model with those members works.

## License

MIT
