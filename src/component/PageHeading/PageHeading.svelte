<script lang="ts">
	import { menuStore } from './../../stores/store';
</script>

<div class="bg-white w-full border-t border-b border-gray-300 -mt-2 ">
<!-- <div class=" bg-white w-full border-t border-b border-gray-300 -mt-2"> -->
    <div class="w-full">
        <div class="lg:flex lg:justify-between p-4">
            <div>
                <div class="mt-1 flex flex-col sm:flex-row  sm:mt-0 sm:space-x-2">
                    <div  class="-mt-2 mb-2 flex items-center text-sm text-gray-500">
                        <span class="flex-shrink-0  text-gray-400 cursor-pointer">
                            <i class="fa fa-home"></i>
                            <span class="text-sm text-gray-500 tracking-wide truncate">Dashboard</span>
                        </span>
                    </div>
                    {#if $menuStore.code != 'dashboard'}
                    <div class="-mt-2 mb-2 flex items-center text-sm text-gray-500">
                        <span class=" text-gray-400 cursor-pointer">
                            <span class="text-sm text-gray-500 tracking-wide truncate">/</span>
                        </span>
                    </div>
                    <div class="-mt-2 mb-2 flex items-center text-sm text-gray-500">
                        <span class="flex-shrink-0 mr-1.5 text-gray-400 cursor-pointer">
                            <span class="text-sm text-gray-500 tracking-wide truncate">{$menuStore.grup}</span>
                        </span>
                    </div>
                    <div class="-mt-2 mb-2 flex items-center text-sm text-gray-500">
                        <span class=" text-gray-400 cursor-pointer">
                            <span class="text-sm text-gray-500 tracking-wide truncate">/</span>
                        </span>
                    </div>
                    <div class="-mt-2 mb-2 flex items-center text-sm text-gray-500">
                        <span class="flex-shrink-0 mr-1.5 text-gray-400 cursor-pointer">
                            <span class="text-sm text-gray-500 tracking-wide truncate">{$menuStore.name}</span>
                        </span>
                    </div>
                    {/if}
                </div>
                <h2 class="text-xl mb-1 font-semibold leading-7 text-gray-700 sm:text-3xl sm:truncate">
                    {$menuStore.name}
                </h2>
                <p class="text-gray-500 italic text-sm">{$menuStore.ket}</p>
            </div>
    
            <div class="mt-5 flex lg:mt-5 ">
                <span class="hidden sm:block">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span class="-ml-1 mr-2 h-5 w-5 text-green-500 text-lg -mt-2">
                            <i class="fa fa-file-upload"></i>
                        </span>
                        Upload Data
                    </button>
                </span>
    
                <span class="hidden sm:block ml-3">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span class="-ml-1 mr-2 h-5 w-5 text-green-500 text-lg -mt-2">
                            <i class="fa fa-file-excel"></i>
                        </span>
                        Export
                    </button>
                </span>
            </div>
        </div>
    </div>
</div>