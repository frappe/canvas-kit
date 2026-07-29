<template>
	<div>
		<div
			class="x fixed bottom-0 top-0 z-10 w-[1px] bg-pink-600"
			v-if="guides.showX"
			:style="{
				left: guides.x + 'px',
			}"></div>
		<div
			class="y fixed left-0 right-0 z-10 h-[1px] bg-pink-600"
			v-if="guides.showY"
			:style="{
				top: guides.y + 'px',
			}"></div>
	</div>
</template>
<script setup lang="ts">
import { guides } from "../canvasState";
</script>
