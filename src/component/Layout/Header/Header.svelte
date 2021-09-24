<script lang="ts">

</script>

<div class="flex-1 flex flex-col ">
    <nav class="fixed  w-full px-4 flex justify-between bg-indigo-500 h-14">
        <!-- top bar left -->
        <ul class="flex items-center">
            <!-- add button -->
            <button  type="button" class="hidden lg:block border-transparent  items-center justify-center text-white focus:border-transparent" aria-controls="mobile-menu" aria-expanded="false">
              	<span class="sr-only">Open main menu</span>
  
				<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
            </button>
  
            <!-- Mobile menu button-->
            <button  type="button" class="block lg:hidden items-center justify-center text-white outline-none focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
              	<span class="sr-only">Open main menu</span>
  
				<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
            </button>
            <p class="text-white text-xl  ml-3">Admin</p>
        </ul>

        <ul class="flex items-center">
            
        </ul>

        <!-- to bar right  -->
        <ul class="flex items-center">
            <li class="h-10 w-10">
                <img
                    class="h-full w-full rounded-full mx-auto"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="profile woman" />
            </li>
            <!-- <div class="origin-top-right absolute right-0 mt-44 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                <a href="#0" class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                <a href="#0" class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                <a href="#0" class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
            </div> -->
        </ul>
    </nav>
</div>

