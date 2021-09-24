<script>
	import { createEventDispatcher } from "svelte";
	export let items = [
		{label: "label1", value: '1'},
	]
	export let name = '';
	export let values = [];
	export let label = 'Checkbox';
	
	const dispatch = createEventDispatcher();
	
	function handleSelect(event) {
    const value = event.target.value;
    if (event.target.checked) {
      dispatch("change", { type:"checkbox",name, value, action: "add" });
    } else {
      dispatch("change", { type:"checkbox",name, value, action: "delete" });
    }
  }
	
	function isChecked(item) {
		const checked = (values.filter(val => val === item.value).length > 0)
		return checked;
		// console.log(checked)
	}
</script>

<fieldset>
	<legend class="h-6 block text-sm font-medium text-gray-700">
		{label}
	</legend>
	<div class="flex flex-wrap w-full">
		{#each items as item,i (item.label)}
			<div class="mr-3">
				<input
					class="focus:ring-indigo-500 w-4 text-indigo-600 border-gray-300 rounded"
					checked={isChecked(item)}
					value={item.value}
					id={name + "-" + i + "-" + item.value}
					on:change={handleSelect}
					type="checkbox"
					name="{name}"
				/>
				<label for="push-nothing" class="-mt-6 ml-5 block text-sm font-medium text-gray-700">
                    {item.label}
				</label>
			</div>
		{/each}
	</div>
</fieldset>

