<script >
	import {createEventDispatcher} from 'svelte'
	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';
	
	export let config = [];
	export let values={};
	let data = values
	let formData = new FormData();
	const dispatch = createEventDispatcher();

	const submitHandler = () => {
		for (const [key, value] of Object.entries(data)) {
			// console.log(`${key}: ${value}`);
			formData.append(`${key}, ${value}`);
		}
		dispatch('submit', data)

	}
	const inputHandler = (e) =>{
		if (e.target == null){
			const val = e.detail[1]
			const name = e.detail[2].element.name
			data = {...data, [name] : val}
		}else{
			const val = e.target.value
			const name = e.target.name	
			data = {...data, [name] : val}
		}
	}

</script>
<div>
	<div class="md:grid md:grid-cols-2 md:gap-6 mb-6">
		<div class="mt-5 md:mt-0 md:col-span-2">
			<div class="border rounded-t-md border-gray-100 flex justify-between  bg-white shadow border-b text-left p-3">
                <div class="flex">
                    <h3 class="text-lg leading-6 font-medium text-gray-700">
                        Filter Data
                    </h3>
                </div>
                <div class="text-right">
                    <div on:click="{()=>dispatch('onClose','')}" class="ml-3 inline-flex rounded-md cursor-pointer">
						<span class="text-red-600">
							<i class="fas fa-times"></i>
						</span>
					</div>
                </div>
            </div>
			<form class="w-full" on:submit|preventDefault={submitHandler}>
		  		<div class="shadow overflow-hidden">
					<div class="px-4 py-5 bg-white sm:p-6">
			  			<div class="grid grid-cols-6 gap-6  md:flex-col">
							{#each config as field (field.name)}
								{#if field.type == 'text'}
								<div class="col-span-6 sm:col-span-3">
									<label for="first-name" class="block text-sm font-medium text-gray-700">{field.label}</label>
									<input 	placeholder="Masukan {field.label}" 
											type="{field.type}" 
											name={field.name}
											value={values[field.name]}
											on:input="{inputHandler}"
											class=" focus:ring-indigo-500  sm:text-sm textInput ">
								</div>
								{:else if field.type == 'combo'}
								<div class="col-span-6 sm:col-span-3">
									<label for="name" class="h-6 block text-sm font-medium text-gray-700">{field.label}</label>
									<select on:click="{inputHandler}" 
											name="{field.name}" 
											autocomplete="country" 
											class=" focus:outline-none focus:ring-indigo-500  sm:text-sm comboInput">
										<option value="">Pilih salah satu.....</option>
										{#each field.menu as menu}
										<option value="{menu.key}">{ menu.val}</option>
										{/each}
									</select>
								</div>
								{:else}
								<div class="col-span-6 sm:col-span-3">
									<label for="date" class="block text-sm font-medium text-gray-700">Date</label>
									<Flatpickr placeholder ="Select Date...." 
												options={field.option[0]} 
												class="mt-1 focus:outline-none h-10 w-full inline-flex items-center px-3 rounded-md border border-gray-300 text-gray-500 text-sm"
												on:change="{inputHandler}"
												name="{field.name}" 
												/>	
								</div>
								{/if}
							{/each}
			  			</div>
					</div>
					<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Filter
						</button>
					</div>
		  		</div>
			</form>
	  	</div>
	</div>
</div>
  
  
<style lang="postcss">
	.textInput {
		@apply h-11 px-4 mt-1 block w-full shadow-sm border border-gray-300 rounded-md;
	}

	.comboInput {
		@apply mt-1 block w-full py-2 px-3 border  bg-white rounded-md shadow-sm;
	}
</style>