<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ status }) {
		return {
			props: {
				status: status
			}
		}
	}
</script>

<script>
	export let status
</script>

<svelte:head>
	<title>{status}.</title>
</svelte:head>

<div class="p-8">
	<h1 class="text-2xl mb-4">{status}.</h1>

	{#if status === 404}
		<p class="mb-2">Страница не найдена.</p>
	{/if}

	<p class="text-sm text-gray-500">
		Ошибочка вышла. <a href="/" class="border-b text-black">Домой</a>
	</p>
</div>
