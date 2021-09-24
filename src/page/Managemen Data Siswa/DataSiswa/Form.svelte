<script>
	import ChecboxGroup from '../../../component/Checkbox/ChecboxGroup.svelte';
	import {createEventDispatcher} from 'svelte'	
	import Flatpickr from 'svelte-flatpickr';

	export let values={};
	export let config=[];
	let data  = values;
	let dataAlert = {};
    let formData = new FormData();
    let avatar;
	let file = false;

	const dispatch = createEventDispatcher();

	const submitHandler = () => {
		dataAlert = {};
		let count=0
		for (const [key, value] of Object.entries(data)) {
			if(`${value}` == ''){
				dataAlert = {...dataAlert, [`${key}`] : true}
				for(let key in dataAlert) {
					++count;
				}
			}
			formData.append(`${key}`, `${value}`);
		}
		if (count == 0){
			console.log(data)
			// dispatch('submit', formData)
		}
	}

	const inputHandler = (e) =>{
		if(e.target == null){
			if(e.detail.type == 'checkbox'){
				// console.log(e)
				const { name, value, action } = e.detail;
				if (action) {
					if (action === "delete") {
						data[name] = [...data[name].filter((v) => v !== value)];
					} else if (action === "add") {
						if (typeof Array) {
							data[name] = [...data[name], value];
						} else {
							data[name] = [];
							data[name].push(value);
						}
					}
				} else {
					data[name] = value;
				}
			}else{
				const val = e.detail[1]
				const name = e.detail[2].element.name
				data = {...data, [name] : val}
			}
		}else if (e.target.type == 'file'){
			file = false
			const size = e.target.files[0].size / (1024 * 1024)
			if (size >= 5){
				file = true
			}else{
				const val = e.target.files[0]
				const name = e.target.name
				let reader = new FileReader();
				reader.readAsDataURL(val);
				reader.onload = e => {
					 avatar = e.target.result
				};
				formData.append([name], val);
			}
		}else{
			const val = e.target.value
			const name = e.target.name	
			data = {...data, [name] : val}
		}
	}


</script>

<div>
	<div class="md:grid md:grid-cols-2 md:gap-6">
	  	<div class="mt-5 md:mt-0 md:col-span-2">
			<form action="#" method="POST">
		  		<div class="shadow overflow-hidden sm:rounded-md">
					<div class="flex justify-between bg-white shadow border-b">
						<div class="px-4 py-3  text-left sm:px-6">
							<h2 class="text-xl font-bold  text-gray-600">
								Filter Data
							</h2>
						</div>
						<div class="px-4 py-3 bg-white text-right sm:px-6">
							<div on:click="{()=>dispatch('onClose','')}" class="ml-3 inline-flex rounded-md cursor-pointer">
								<span class="text-red-600">
									<i class="fas fa-times"></i>
								</span>
							</div>
						</div>
					</div>
					<form on:submit|preventDefault={submitHandler}>
						<div class="px-4 py-5 bg-white sm:p-6">
							<div class="grid grid-cols-6 gap-6">
								{#each config as field (field.name)}	
								{#if field.type == 'text'}
								<div class="col-span-6 sm:col-span-3">
									<label for="name" class="h-6 block text-sm font-medium text-gray-700">{field.label}</label>
									<input 
										placeholder="Masukan {field.label}" 
										type="{field.type}" 
										name="{field.name}"
										class="{dataAlert[field.name] == true ? "border-red-600":"border-gray-400"} h-10 w-full focus:outline-none inline-flex items-center px-3 rounded-md border border-gray-300 text-gray-500 text-sm"
										value="{values[field.name]}"
										on:input="{inputHandler}"
									/>
									{#if dataAlert[field.name]}
										<p class="text-red-700 text-sm">{field.label} Tidak Boleh Kosong</p>
									{/if}
								</div>
								{:else if field.type == 'date'}
								<div class="col-span-6 sm:col-span-3">
									<label for="country" class="block text-sm font-medium text-gray-700">{field.label}</label>
									<Flatpickr placeholder ="Select Date...." 
												options= {field.option[0]}
												class="{dataAlert[field.name] == true ? "border-red-600":"border-gray-400"} mt-1 focus:outline-none h-10 w-full inline-flex items-center px-3 rounded-md border  text-gray-500 text-sm"
												name="{field.name}" 
												value={values[field.name]}
												on:change="{inputHandler}"
												/>
									{#if dataAlert[field.name]}
										<p class="text-red-700 text-sm">{field.label} Tidak Boleh Kosong</p>
									{/if}
								</div>
								{:else if field.type == 'combo'}
								<div class="col-span-6 sm:col-span-3">
									<label for="name" class="h-6 block text-sm font-medium text-gray-700">{field.label}</label>
									<select on:click="{inputHandler}" value={values[field.name]} name="{field.name}" autocomplete="country" class="{dataAlert[field.name] == true ? "border-red-600":"border-gray-400"} mt-1 block w-full py-2 px-3 border  bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
										<option value="">Pilih salah satu.....</option>
										{#each field.menu as menu}
										<option value="{menu.key}">{menu.val}</option>
										{/each}
									</select>
									{#if dataAlert[field.name]}
										<p class="text-red-700 text-sm">{field.label} Tidak Boleh Kosong</p>
									{/if}
								</div>
								{:else if field.type == 'checkbox'}
								<div class="col-span-6 sm:col-span-3">
									<!-- <label for="name" class="h-6 block text-sm font-medium text-gray-700">{field.label}</label> -->
									<ChecboxGroup
										label="{field.label}" 
										name="{field.name}" 
										items={field.item}
										on:change={inputHandler} 
										values={values[field.name]} 
									/>
									{#if dataAlert[field.name]}
										<p class="text-red-700 text-sm">{field.label} Tidak Boleh Kosong</p>
									{/if}
								</div>
								{:else if field.type == 'radio'}
								<div class="col-span-6 sm:col-span-3">
									<div>
										<legend class="h-6 block text-sm font-medium text-gray-700">{field.label}</legend>
									  </div>
									<div class="flex flex-wrap">
										{#each field.item as item }	
										<div class="flex items-center mr-4">
											<input 	on:change="{inputHandler}"  
													value="{item.value}" 
													checked={values[field.name]===item.value} 
													name="{field.name}" 
													type="radio" 
													class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
											<label for="{field.name}" class="ml-2 block text-sm font-medium text-gray-700">
											  {item.label}
											</label>
										</div>
										{/each}
									</div>
								</div>
								{:else if field.type == 'files'}
								<div class="col-span-6 sm:col-span-3">
									<label for="name" class="h-6 block text-sm font-medium text-gray-700">{field.label}</label>
									<div class="{file == true ? "border-red-500":"border-gray-300"} mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
										<div class="space-y-1 text-center">
										{#if avatar}
										<img class="h-20 w-20 mx-auto" src="{avatar}" alt="d" />
										{:else}
										<span class="mx-auto h-20 w-20 text-5xl text-gray-400">
											<i class="fa fa-image"></i>
										</span>
										{/if}
										<div class="flex text-sm text-gray-600">
											<label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
												<span>Upload a file</span>
												<input on:change="{inputHandler}"  id="file-upload" name="{field.name}" type="file" class="sr-only">
											</label>
											<p class="pl-1">or drag and drop</p>
										</div>
											<p class="text-xs text-gray-500">
											PNG, JPG, GIF up to 5MB
											</p>
										</div>
									</div>
									{#if file == true}
										<p class="text-red-700 text-sm">File terbaru besar</p>
									{/if}
								</div>
								{/if}
								{/each}
                            </div>
						</div>
						<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
							<button on:click="{()=>dispatch('onClose','')}" type="button" class="mr-2  inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-600 bg-white hover:bg-gray-200 outlane focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Batal
							</button>
							<button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Save
							</button>
						</div>
					</form>
		  		</div>
			</form>
	  	</div>
	</div>
</div>