<script>
    import {menuStore,menus } from '.../../../stores/store.ts';
    let isOverflow = false
</script>

<div class="bg-red-500 mr-46 ml-12">
   <!-- component -->
   <div class=" flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
       <div class="fixed mt-14 flex flex-col top-0 left-0 w-46 bg-white h-full border-r">
            <div on:mouseenter="{()=>isOverflow = true}" on:mouseleave="{()=>isOverflow = false}" class="{isOverflow == true? "overflow-y-auto":"overflow-y-hidden"}  overflow-x-hidden flex-grow">
                {#each menus as menu }
                <div class="flex flex-col  space-y-1">
                    <button class="h-11 w-full flex justify-between items-center  cursor-pointer hover:bg-indigo-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-4 focus:outline-none">
                        <span class="flex items-center ml-6 text-gray-500">
                            <i class="fa fa-{menu.icon}"></i>
                        </span>
                    </button>
                </div>
                {/each}
            </div>
       </div>
   </div>
</div>