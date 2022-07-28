<!-- lógica -->
<script>
	import { ref } from "vue";

	export default {
		setup() {
			const conteo = ref(0);
			return { conteo };
		},

		methods: {
			incrementar() {
				this.conteo++;
			},
			decrementar() {
				this.conteo--;
			}
		},

		mounted() {
			console.log("component counter mounted");
		}
	};
</script>

<!-- plantilla -->
<template>
	<main class="container mx-auto px-10">
		<h1 class="text-2xl font-bold">Counter App</h1>
		<div class="mt-4">
			<button class="bg-teal-500 text-white px-4 py-2" @click="incrementar"
				>+</button
			>
			<div class="border px-4 py-2 inline mx-2">{{ conteo }}</div>
			<button class="bg-teal-500 text-white px-4 py-2" @click="decrementar"
				>-</button
			>
		</div>
	</main>
</template>

<!-- estilos -->
<style scoped></style>
