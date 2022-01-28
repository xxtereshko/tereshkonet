<script>
	import { onMount } from 'svelte/internal'

	let year = new Date(Date.now()).getFullYear()

	onMount(() => {
		console.log(window.innerWidth - window.outerWidth)
	})
</script>

<svelte:head>
	<title>Максим Терешко</title>
</svelte:head>

<header>
	<h1 class="mb-2">Максим Терешко</h1>
	<p class="text-sm text-gray">@xxtereshko</p>
</header>

<main class="flex-1">
	<ul class="flex flex-col space-y-4">
		<li>
			☁️
			<a class="link" href="https://t.me/xxtereshko" rel="noopener noreferrer">Telegram</a>
		</li>
		<li>
			👾
			<a class="link" href="https://github.com/xxtereshko" rel="noopener noreferrer">GitHub</a>
		</li>
		<li>
			✉️
			<a class="link" href="mailto:hey@tereshko.net" rel="noopener noreferrer">hey@tereshko.net</a>
		</li>
	</ul>
</main>

<footer>
	<p>{year}</p>
</footer>
