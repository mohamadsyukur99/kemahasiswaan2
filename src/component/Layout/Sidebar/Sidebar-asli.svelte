<script>
	import SidebarItems from './SidebarItems.svelte';
	import { headerStore } from '.../../../stores/store.ts';
</script>

<!-- component -->
<div class="{$headerStore == true?"":"fixed"}fixed flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
    <div class="flex flex-col top-0 left-0 w-64 bg-white h-full">
      <div class="overflow-y-auto overflow-x-hidden flex-grow">
        <ul class="flex flex-col py-4 space-y-1">
          <SidebarItems />
        </ul>
      </div>
    </div>
  </div>