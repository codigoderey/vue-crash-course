<!-- logica -->
<script>
	export default {
		props: ["id"],
		data() {
			return {
				usuario: {},
				loading: true
			};
		},
		mounted() {
			fetch(`http://localhost:3000/users/${this.id}`)
				.then((response) => response.json())
				.then((data) => {
					this.usuario = data;
					this.loading = false;
				});
		}
	};
</script>

<!-- plantilla -->
<template>
	<main class="container mx-auto px-10">
		<h1 class="text-2xl font-bold">Dynamic View</h1>
		<div v-if="loading">Loading...</div>
		<div class="mb-2 p-2 rounded border border-teal-500 mt-4">
			<div>User id: {{ id }}</div>
			<div>Nombre: {{ usuario.name }}</div>
			<div>Edad: {{ usuario.age }}</div>
		</div>
	</main>
</template>
