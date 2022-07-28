// documento para el router
import { createRouter, createWebHistory } from "vue-router";
// importar los componentes
import CounterView from "../views/CounterView.vue";
import FetchingView from "../views/FetchingView.vue";
import DynamicView from "../views/DynamicView.vue";
import SubmitFormView from "../views/SubmitFormView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: CounterView
		},
		{
			path: "/fetching",
			name: "fetching",
			component: FetchingView
		},
		{
			path: "/dynamic/:id",
			name: "dynamic",
			component: DynamicView,
			props: true
		},
		{
			path: "/users",
			name: "users",
			component: SubmitFormView
		}
	]
});

export default router;
