<script>
	import {createEventDispatcher} from 'svelte'	
	import Flatpickr from 'svelte-flatpickr';

	export let config = [];
	export let values={};
    let formData = new FormData();
	let data = {}
    let avatar;
    let group = 1;
	let selection = [];

	const dispatch = createEventDispatcher();
	const submitHandler = () => {
		dispatch('submit', formData)
	}
	const inputHandler = (e) =>{
		const val = e.target.value
		const name = e.target.name	
	
		formData.append([name], val);
	}

	const dateHandler = (e) =>{
		const val = e.detail[1]
		const name = e.detail[2].element.name
		data = {...data,[name]:val}
	}

    const fileHandler = (e) => {
        const val = e.target.files[0]
        const name = e.target.name
            let reader = new FileReader();
            reader.readAsDataURL(val);
            reader.onload = e => {
                 avatar = e.target.result
            };
            console.log(avatar)

        formData.append([name], val);
    }

    const checkboxHandler = (e) => {
        console.log(e.target.value)
        // const val = e.target.files[0]
        // const name = e.target.name
    }

	const resetHandler =()=>{
		dispatch('reset', '')
		data= {}
		values={}
	}


</script>

<div class="mt-10 sm:mt-0 mb-4">
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
							<button on:click="{()=>dispatch('onClose','')}"   
								type="button"	
								class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Close
							</button>
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
											name={field.name}
											class="h-10 w-full focus:outline-none inline-flex items-center px-3 rounded-md border border-gray-300 border-gray-300 text-gray-500 text-sm"
											value={values[field.name]}
											on:input="{inputHandler}"
										/>
									</div>
									{:else if field.type =='date'}
									<div class="col-span-6 sm:col-span-3">
										<label for="country" class="block text-sm font-medium text-gray-700">{field.label}</label>
										<Flatpickr placeholder ="Select Date...." 
													options={field.option[0]} 
													class="mt-1 focus:outline-none h-10 w-full inline-flex items-center px-3 rounded-md border border-gray-300 border-gray-300 text-gray-500 text-sm"
													on:change="{dateHandler}"
													name="{field.name}" 
													bind:value={values[field.name]}
													/>
									</div>
                                    {:else if field.type =='file'}
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="name" class="h-6 block text-sm font-medium text-gray-700">{field.label}</label>
                                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
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
                                                    <input on:change="{fileHandler}" id="file-upload" name={field.name} type="{field.type}" class="sr-only">
                                                </label>
                                                <p class="pl-1">or drag and drop</p>
                                            </div>
                                              <p class="text-xs text-gray-500">
                                                PNG, JPG, GIF up to 5MB
                                              </p>
                                            </div>
                                        </div>
                                    </div>
									{/if}
								{/each}	
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="name" class="h-6 block text-sm font-medium text-gray-700">Hobby</label>
                                    <div class="flex mt-4 mb-4 flex-wrap">
                                        <div class="flex items-start ml-4">
                                            <div class="flex items-center h-5">
                                                <input on:change="{checkboxHandler}" value="bila" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                            </div>
                                            <div class="ml-2 text-sm">
                                                <label for="comments" class="font-medium text-gray-700">bila</label>
                                            </div>
                                        </div>
                                        <!-- <div class="flex items-start ml-4">
                                            <div class="flex items-center h-5">
                                                <input bind:group={selection} value="say" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                            </div>
                                            <div class="ml-2 text-sm">
                                                <label for="comments" class="font-medium text-gray-700">say</label>
                                            </div>
                                        </div>
                                        <div class="flex items-start ml-4">
                                            <div class="flex items-center h-5">
                                                <input bind:group={selection} value="tom"name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                            </div>
                                            <div class="ml-2 text-sm">
                                                <label for="comments" class="font-medium text-gray-700">tom</label>
                                            </div>
                                        </div>                                         -->
                                    </div>
                                </div>
                            </div>
						</div>
                        <h1>Checkboxes: {selection.join(', ')}</h1>
						<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
							<button on:click="{resetHandler}" type="button" class="mr-2  inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-600 bg-white hover:bg-gray-200 outlane focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Reset
							</button>
							<button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Filter
							</button>
						</div>
					</form>
		  		</div>
			</form>
	  	</div>
	</div>
</div>