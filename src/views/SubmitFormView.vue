<!-- logica -->
<script>
	export default {
		data() {
			return {
				loading: true,
				usuarios: [],
				nuevoUsuario: {
					id: null,
					name: null,
					age: null
				}
			};
		},
		methods: {
			onSubmit() {
				if (this.nuevoUsuario.name === null || this.nuevoUsuario.age === null) {
					alert("Debe completar todos los campos");
					return;
				}
				let valores = {
					id: Math.floor(Math.random() * 100),
					name: this.nuevoUsuario.name,
					age: this.nuevoUsuario.age
				};
				this.usuarios.push(valores);
				fetch("http://localhost:3000/users", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(valores)
				})
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
					});
				this.nuevoUsuario = {
					id: null,
					name: null,
					age: null
				};
			}
		},
		mounted() {
			fetch("http://localhost:3000/users")
				.then((response) => response.json())
				.then((data) => {
					this.usuarios = data;
					this.loading = false;
				});
		}
	};
</script>

<!-- plantilla -->
<template>
	<main class="container mx-auto px-10">
		<h1 class="text-2xl font-bold">Usuarios</h1>
		<div class="flex">
			<form @submit.prevent="onSubmit" class="mt-4 w-full">
				<p class="text-xl">Nuevo usuario</p>
				<div class="flex flex-col my-2">
					<label>Nombre</label>
					<input
						type="text"
						class="w-8/12 border rounded p-1"
						v-model="nuevoUsuario.name"
					/>
				</div>
				<div class="flex flex-col my-2">
					<label>Edad</label>
					<input
						type="number"
						class="w-8/12 border rounded p-1"
						v-model="nuevoUsuario.age"
					/>
				</div>
				<button
					class="mt-4 border bg-teal-500 inline px-3 py-1 rounded text-white"
					type="submit"
					>Añadir</button
				>
			</form>
			<ul class="mt-4 w-full">
				<div v-if="loading">Loading...</div>
				<li
					class="mb-2 p-2 rounded border border-teal-500 hover:bg-teal-50 transition-all"
					v-for="usuario in usuarios"
					:key="usuario.id"
				>
					<router-link
						:to="{
							name: 'dynamic',
							params: { id: usuario.id }
						}"
					>
						<div>Nombre: {{ usuario.name }}</div>
						<div>Age: {{ usuario.age }}</div>
					</router-link>
				</li>
			</ul>
		</div>
	</main>
</template>
