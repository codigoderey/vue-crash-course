<!-- logica -->
<script>
	export default {
		data() {
			return {
				loading: true,
				users: []
			};
		},
		mounted() {
			fetch("http://localhost:3000/users")
				.then((response) => response.json())
				.then((data) => {
					this.users = data;
					this.loading = false;
				});
		}
	};
</script>

<!-- plantilla -->
<template>
	<main class="container mx-auto px-10">
		<h1 class="text-2xl font-bold">Fetching Data</h1>
		<div v-if="loading">Loading...</div>
		<ul class="mt-4">
			<li
				class="mb-2 p-2 rounded border border-teal-500 hover:bg-teal-50 transition-all"
				v-for="user in users"
				:key="user.id"
			>
				<router-link :to="{ name: 'dynamic', params: { id: user.id } }">
					<div>Nombre: {{ user.name }}</div>
					<div>Edad: {{ user.age }}</div>
				</router-link>
			</li>
		</ul>
	</main>
</template>
