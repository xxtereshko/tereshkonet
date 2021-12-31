<script>
	import { onMount } from 'svelte'

	let characters = ['🦄', '☁️', '☁️']

	let confetti = new Array(20)
		.fill()
		.map((_, i) => {
			return {
				character: characters[i % characters.length],
				x: Math.random() * 100,
				y: -20 - Math.random() * 100,
				r: 0.1 + Math.random() * 1
			}
		})
		.sort((a, b) => a.r - b.r)

	onMount(() => {
		let frame

		function loop() {
			frame = requestAnimationFrame(loop)

			confetti = confetti.map((emoji) => {
				emoji.y += 0.18 * emoji.r
				if (emoji.y > 120) emoji.y = -20
				return emoji
			})
		}

		loop()

		return () => cancelAnimationFrame(frame)
	})
</script>

<svelte:head>
	<title>✨</title>
</svelte:head>

{#each confetti as c}
	<span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">{c.character}</span>
{/each}

<h1 class="text-2xl">Infinite Lowadi</h1>

<style>
	h1 {
		position: absolute;
		left: 50%;
		top: 50%;
		z-index: -1;
		transform: translate(-50%, -50%);
	}

	:global(body) {
		overflow: hidden;
	}

	span {
		position: absolute;
		font-size: calc(3vh + 4.5vw);
		user-select: none;
	}
</style>
