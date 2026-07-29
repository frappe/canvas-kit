# Canvas Kit

Shared Vue components for building visual canvas editors, extracted from [Frappe Builder](https://github.com/frappe/builder) and [Frappe Studio](https://github.com/frappe/studio).

Like [frappe-ui](https://github.com/frappe/frappe-ui), this package ships raw `.vue`/`.ts` source. Your app's bundler compiles it, so no build step or published dist.

## Installation

```sh
npm install frappe-canvas-kit
```

Peer dependencies: `vue`, `frappe-ui`, `@vueuse/core`. Styling uses frappe-ui's Tailwind design tokens, so your Tailwind config must include this package in its `content` globs:

```js
content: ["./node_modules/frappe-canvas-kit/src/**/*.{vue,ts}"],
```

## Usage

```vue
<script setup>
import { CollapsibleSection } from "frappe-canvas-kit";
</script>

<template>
	<CollapsibleSection section-name="Layout">
		<!-- controls -->
	</CollapsibleSection>
</template>
```

## Components

- `CollapsibleSection`

## Extraction roadmap

Components duplicated across Builder and Studio, to be moved here:

- `BoxResizer`
- `BlockFlexLayoutHandler`
- `BlockGridLayoutHandler`
- `BlockPositionHandler`
- `MarginHandler` / `PaddingHandler`
- `DimensionInput`
- `ColorInput` / `ColorPicker`
- `InlineInput`
- `ContextMenu`
- `ArrayInput`

## License

MIT
