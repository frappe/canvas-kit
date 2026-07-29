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

`AnglePicker`, `ArrayEditor`, `ArrayInput`, `Autocomplete`, `CollapsibleSection`, `ContextMenu`, `InlineInput`, `Input`, `InputLabel`, `MiddleTruncate`, `NumberArrows`, `OptionToggle`, `RangeInput`, `TabButtons`

## License

MIT
