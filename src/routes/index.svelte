<script>
	let year = new Date(Date.now()).getFullYear()
</script>

<svelte:head>
	<title>Максим Терешко</title>
</svelte:head>

<header>
	<h1 class="mb-2">Максим Терешко</h1>
	<p class="text-sm text-gray-500">@xxtereshko</p>
</header>

<main class="flex-1">
	<ul class="flex flex-col space-y-4">
		<li>
			☁️
			<a class="border-b-2 border-gray" href="https://t.me/xxtereshko" rel="noopener noreferrer"
				>Telegram</a
			>
		</li>
		<li>
			👾
			<a
				class="border-b-2 border-gray"
				href="https://github.com/xxtereshko"
				rel="noopener noreferrer">GitHub</a
			>
		</li>
		<li>
			✉️
			<a class="border-b-2 border-gray" href="mailto:hey@tereshko.net" rel="noopener noreferrer"
				>hey@tereshko.net</a
			>
		</li>
	</ul>
</main>

<footer>
	<p>{year}</p>
</footer>
