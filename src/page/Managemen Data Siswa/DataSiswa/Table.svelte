<script>
    import {createEventDispatcher} from 'svelte'
	export let headers=[]
	export let data=[];
	const dispatch = createEventDispatcher();
</script>

<div>
    <div class="flex flex-col" style="max-width: 1070px;">
        <div class="overflow-x-auto w-full">
            <div class="rounded-t-md border border-gray-100 flex justify-between px-4 py-3 bg-white shadow border-b text-left sm:px-6">
                <div class="flex">
                    <div class="p-2 text-left">
                        <span class="text-gray-600 text-sm">Show</span>
                    </div>
                    <div>
                        <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>25</option>
                            <option>50</option>
                            <option>75</option>
                            <option>100</option>
                        </select>
                    </div>
                    <div class="p-2">
                        <span class="text-gray-600 text-sm">entries</span>
                    </div>
                </div>
                <div class="text-right">
                    <button on:click="{()=>dispatch('onFilter','')}"  
                            type="button" 
                            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <span class="-ml-1 mr-2 h-5 w-5 text-white text-md">
                            <i class="fa fa-filter"></i>
                        </span>
                        Filter
                    </button>
                    <button on:click="{()=>dispatch('onForm','')}" 
                            type="button" 
                            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <span class="-ml-1 mr-2 h-5 w-5 text-white text-md">
                            <i class="fa fa-plus"></i>
                        </span>
                        Tambah
                    </button>
                </div>
            </div>
            <div class="align-middle inline-block ">
                <div class="shadow  border-b border-gray-200 overflow-x-auto" style="max-width: 1070px;" >
                    <table class="w-full divide-y divide-gray-200 border border-gray-100" >
                        <thead class="bg-gray-50" >
                            <tr>
                                {#each headers as header (header.name) }
                                <th scope="col" class="{header.style} px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {header.name}
                                </th>
                                {/each}
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200" >
                            {#each data as d, i}
							<tr class="hover:bg-yellow-50 {(i+1)%2==0?'bg-yellow-50':''}">
                                <td class="pr-5 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <span class="cursor-pointer pr-1 inline-flex justify-center items-center text-2xl text-green-500">
                                        <i class="fa fa-pen-square"></i>
                                    </span>
                                    <span class="cursor-pointer inline-flex justify-center items-center text-2xl text-red-500">
                                        <i class="fa fa-trash"></i>
                                    </span>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<img class="h-10 w-10 rounded-full" src="{d.foto}" alt="">
										</div>
										<div class="ml-4">
											<div class="text-sm font-medium text-gray-900">
												{d.nama}
											</div>
										</div>
									</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="text-sm text-gray-900">{d.title}</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
										{d.status}
									</span>
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{d.role}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{d.tes}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{d.tes1}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{d.tes2}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									dgfd
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									dfgdf
								</td>
							</tr>
							{/each}
                            <!-- More people... -->
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-between px-4 py-2 bg-gray-100 shadow border-t text-left sm:px-4">
                    <div class="flex">
                        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                              <p class="text-sm text-gray-700">
                                Showing
                                <span class="font-medium">1</span>
                                to
                                <span class="font-medium">10</span>
                                of
                                <span class="font-medium">97</span>
                                results
                              </p>
                            </div>
                        </div>
                    </div>
                    <div class="text-right">
                      <button type="button" class="inline-flex items-center border py-1 px-2 border-gray-300 rounded-md shadow-sm text-sm font-medium bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <span class="text-gray-600 font-bold text-md">
                              <i class="fa fa-chevron-left"></i>
                          </span>
                      </button>
                      <input value="1" type="text" id="first-name" class="h-8 w-12 focus:outline-none inline-flex items-center px-3 rounded-md borde border-gray-300 text-gray-500 text-sm">
                      <button type="button" class="inline-flex items-center borde py-1 px-2 border-gray-300 rounded-md shadow-sm text-sm  text-gray-600 font-bold bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Go
                      </button>
                      <button type="button" class="inline-flex items-center borde py-1 px-2 border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <span class="text-gray-600 text-md">
                              <i class="fa fa-chevron-right"></i>
                          </span>
                      </button>
                          <button type="button" class="inline-flex items-center borde py-1 px-4 border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          9732423
                      </button>
                    </div>
                  </div>
            </div>
        </div>
    </div>
</div>