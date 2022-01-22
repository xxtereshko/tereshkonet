<script>
	import '../app.css'
</script>

<slot />

<style>
	:global(html) {
		height: -webkit-fill-available;
	}

	:global(body) {
		min-height: 100vh;
		/* mobile viewport bug fix */
		min-height: -webkit-fill-available;
	}

	:global(#svelte) {
		min-height: 100vh;
	}
</style>
