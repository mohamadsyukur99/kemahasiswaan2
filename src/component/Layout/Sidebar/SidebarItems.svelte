<script lang="ts">
	import type { IMenu } from "./../../../global";
    import {menuStore} from '../../../stores/store'
    let aktiv ="bg-gray-200 text-gray-800"
    let aktivChild = "text-indigo-300"

    export let menus:IMenu
    let openMenu:boolean = false

    const HandlerOpenMenu = () =>{
        openMenu = !openMenu
    }

    const HandleClick = (r) =>{
        menuStore.selectMenu(r)
    }
    

</script>

{#if menus.child.length > 0}  
<div>
    <button on:click="{HandlerOpenMenu}"  class="  {$menuStore.grup == menus.name? aktiv: ""} border-transparent focus:border-transparent h-11 w-full flex justify-between  items-center text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-800 border-l-4  pr-4">
        <span class="flex items-center ml-4 text-gray-500">
            <i class="fa fa-{menus.icon}"></i>
            <span class="ml-4 text-sm tracking-wide truncate">{menus.name}</span>
        </span>
        
        <span class="text-gray-500">
            <i class="fa fa-caret-{openMenu  == false ? "right":"down"}"></i>
        </span>
    </button>

    {#each menus.child as child}  
    {#if openMenu}
    <div>
        <div on:click="{()=>menuStore.selectMenu(child)}" class="bg-gray-50 cursor-pointer">
            <span class="{$menuStore.code == child.code ? aktivChild:""}  ml-12  py-2 h-10 block text-sm  text-gray-600 hover:text-indigo-700 border-transparent">
                    {child.name}
            </span>
        </div>
    </div>
    {/if}
    {/each}    
</div>
{:else}
<div>
    <button on:click="{()=>menuStore.selectMenu(menus)}" class="{$menuStore.code == menus.code ? aktiv:""} h-11 w-full flex justify-between items-center text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-800  pr-4 border-transparent focus:border-transparent ">
        <span class="flex items-center ml-4 text-gray-500">
            <i class="fa fa-{menus.icon}"></i>
            <span class="ml-4 text-sm tracking-wide truncate">{menus.name}</span>
        </span>
    </button> 
</div>
{/if}