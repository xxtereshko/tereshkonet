<script>
	let hereLowad = false

	const handleMouseenter = () => (hereLowad = true)
	const handleMouseleave = () => (hereLowad = false)
</script>

<svelte:head>
	<title>Максим Терешко</title>
</svelte:head>

<main class="p-8 text-xl">
	<h1 class="mb-8">Максим Терешко</h1>

	<ul>
		<li class="mb-4">
			<a class="border-b-2 border-gray" href="https://t.me/xxtereshko" rel="noopener noreferrer"
				>telegram</a
			>
		</li>
		<li class="mb-4">
			<a
				class="border-b-2 border-gray"
				href="https://github.com/xxtereshko"
				rel="noopener noreferrer">github</a
			>
		</li>
		<li class="mb-4">
			<a class="border-b-2 border-gray" href="mailto:hey@tereshko.net" rel="noopener noreferrer"
				>hey@tereshko.net</a
			>
		</li>
	</ul>

	<p class="mt-16 text-xs text-gray-500">2022</p>

	<span class="lowad" class:active={hereLowad}>🦄</span>
	<a href="/lowadi" class="area" on:mouseenter={handleMouseenter} on:mouseleave={handleMouseleave}
		>Lowadi</a
	>
</main>

<style>
	:global(body) {
		overflow: hidden;
	}

	.area {
		width: 100px;
		height: 100px;
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 10;
		opacity: 0;
		user-select: none;
	}

	.lowad {
		font-size: 90px;
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 1;
		transform: translate(100%, 0) rotate(-30deg);
		transform-origin: 100% 100%;
		transition: transform 0.5s;
		user-select: none;
	}

	.active {
		transform: translate(-5%, -105%) rotate(0deg) scale(1.3);
	}
</style>
