<script>
	import AdminLayout from './component/Layout/AdminLayout.svelte';
	import Navigation from './navigation/Navigation.svelte';
	import Notifications from 'svelte-notifications';
</script>

<Notifications>
	<AdminLayout>
			<Navigation />
		</AdminLayout> 
	</Notifications>

<style global lang="postcss">
	@tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>