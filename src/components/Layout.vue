<!-- codigo del header -->
<template>
	<header>
		<nav>
			<ul>
				<li><router-link to="/">Counter</router-link></li>
				<li><router-link to="/fetching">Fetching</router-link></li>
				<li><router-link to="/users">Users</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<!-- estilos para el header -->
<style scoped>
	header {
		display: flex;
		justify-content: center;
	}
	nav,
	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	li {
		list-style: none;
		margin: 0.5rem;
	}
	.router-link-active,
	.router-link-exact-active {
		color: cadetblue;
	}
</style>
