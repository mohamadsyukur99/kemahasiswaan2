<script>
	import Dashboard from './../../page/Dashboard/Dashboard.svelte';
	import { sidebarStore,statusSieber,sidebarStoreMini } from './../../stores/store.ts';
    import Sidebar from './Sidebar/Sidebar.svelte';
    import Header from './Header/Header.svelte';
    import SidebarMini from './Sidebar/SidebarMini.svelte';

    import { menuStore} from '.../../../stores/store.ts';
import PageHeading from '../PageHeading/PageHeading.svelte';

    const menu = {name:'Dashboard', icon:"home", code:'dashboard',ket:'Halman Dashboard'}
    const menuHandlerClick = () =>{
        menuStore.selectMenu(menu)
    }

    const openSidebar = () =>{
        sidebarStore.openMenu()
    }

    const closeSidebar = () =>{
        if($statusSieber == false){
            sidebarStore.closeMenu()
        }
    }

    const openSidebarMini = () =>{
        sidebarStoreMini.openMenu()
    }

    const closeSidebarMini = () =>{
        // if($statusSieber == false){
            sidebarStoreMini.closeMenu()
        // }
    }
    // console.log($menuStore)

</script>

<!-- <div>
    <Header />
    <div class="flex {$sidebarStore== false?"ml-12":""}">
    <div class="flex w-full ">
        <div class="hidden lg:block -mr-12" on:mouseenter="{openSidebar}" on:mouseleave="{closeSidebar}">
            {#if $sidebarStore}
            <Sidebar />
            {:else}
            <SidebarMini />
            {/if}
        </div>
        <div class="block lg:hidden -mr-12" on:mouseenter="{openSidebarMini}" on:mouseleave="{closeSidebarMini}">
            {#if $sidebarStoreMini}
            <Sidebar />
            {:else}
            <SidebarMini />
            {/if}
        </div>
        <div class="w-full ">
            <div class=" h-full border-t   border-gray-300 ">
                <slot></slot>
            </div>
        </div>
    </div>
</div>
 -->
<Header />
<div class="flex justify-between">
    <Sidebar />
    <slot></slot>
    
</div>