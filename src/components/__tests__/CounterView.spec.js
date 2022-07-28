import { it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import CounterView from "../../views/CounterView.vue";

it("incrementar conteo por 1", () => {
	const componente = shallowMount(CounterView);
	componente.vm.incrementar();
	expect(componente.vm.conteo).toBe(1);
});

it("decrementar conteo por 1", () => {
	const componente = shallowMount(CounterView);
	componente.vm.decrementar();
	console.log(componente.vm);
	expect(componente.vm.conteo).toBe(-1);
});
