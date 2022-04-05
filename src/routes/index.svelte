<script>
	// import Footer from '../widgets/footer.svelte'
	import MainGrid from '../widgets/home-grid.svelte'
</script>

<div class="main">
	<div class="main-grid">
		<MainGrid />
	</div>
	<div class="main-footer">
		<div>🪐</div>
		<div>{`[2022]`}</div>
	</div>
</div>

<style>
	.main {
		min-height: 100%;
		/* max-height: 100vh; */
		padding: 30px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.main-footer {
		margin-top: 60px;
		display: flex;
		justify-content: space-between;
		opacity: 0.5;
		border-top: solid 0.5px rgba(255, 255, 255, 0.2);
		padding-top: 30px;
	}
</style>
