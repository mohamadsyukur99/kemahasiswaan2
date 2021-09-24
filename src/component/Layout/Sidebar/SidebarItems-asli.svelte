<script>
    import { headerStore, menuStore,menus } from '.../../../stores/store.ts';

    const Active = "bg-gray-50 border-indigo-500 text-gray-800"
    const menuHandlerClick = (menu) =>{
        menuStore.selectMenu(menu)
    }
</script>
{#each menus as menu}
<li on:click="{()=>menuHandlerClick(menu)}">
    <a href="#0" class="{menu.code == $menuStore.code ? Active:""} flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
        <span class="inline-flex justify-center items-center ml-4 text-gray-500">
            <i class="fa fa-{menu.icon}"></i>
        </span>
        <span class="ml-4 text-sm tracking-wide truncate">{$headerStore == true? menu.name:""}</span>
    </a>
</li>
{/each}