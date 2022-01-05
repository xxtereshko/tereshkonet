<script>
	import '../app.css'
</script>

<slot />

<style>
	:global(body) {
		height: 100vh;
	}

	:global(#svelte) {
		position: relative;
		height: 100%;
	}
</style>
