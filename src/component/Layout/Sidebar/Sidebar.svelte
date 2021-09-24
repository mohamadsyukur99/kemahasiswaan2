<script lang="ts">
	import { menus } from './../../../stores/store';
    import SidebarItems from "./SidebarItems.svelte";
	import type { IMenu } from "./../../../global";    
    import { chekInclude } from '../../../utils/utils';


    let filteredMenu : IMenu[] = []
    let searchedMenu = ''


    $: isSearchingMenu = searchedMenu !== '';
    $: if (searchedMenu !== ''){
        filteredMenu = []

        menus.forEach(menu =>{
            if(menu.child && menu.child.length > 0){
                const parentMenu:IMenu = {...menu, child:[]}
                menu.child.forEach(child =>{
                    if(chekInclude(child.code, searchedMenu)){
                        const findIndex = filteredMenu.findIndex((m) => m.code === child.code) === -1;
                        if(findIndex){
                            parentMenu.child.push(child)
                        }
                    }
                })

                if(parentMenu.child && parentMenu.child.length >0){
                    filteredMenu = [...filteredMenu, parentMenu]
                }
            }else{
                if(chekInclude(menu.code, searchedMenu)){
                    const findIndex = filteredMenu.findIndex((m) => m.code === menu.code) === -1;
                    if (findIndex){
                        filteredMenu = [...filteredMenu, menu]
                    }
                }
            }
        })
    }

    $: console.log(filteredMenu)
</script>

<div class="fixed flex flex-col top-0 left-0 w-64 bg-white h-full mt-14">
    <div class="overflow-y-auto overflow-x-hidden flex-grow">
        <nav class="mr-3 mt-5">
            <div class="h-8 flex rounded-md shadow-sm mb-3 ml-3">
                <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    <i class="fa fa-search"></i>
                </span>
                <input  bind:value={searchedMenu}
                        type="text" 
                        name="company-website" 
                        id="company-website" 
                        class="pl-2 outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Seacrh Menu">
            </div>

            {#if isSearchingMenu}
            {#each filteredMenu as menus}
                <SidebarItems {menus} />
            {/each}
            {:else}
            {#each menus as menus}
                <SidebarItems {menus} />
            {/each}
            {/if}
        </nav>
    </div>
</div>