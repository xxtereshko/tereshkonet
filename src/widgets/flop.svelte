<script>
	import { getRandomNumber } from '../utils/number'

	const carouselPhotos = [
		'/flop/1.png',
		'/flop/2.png',
		'/flop/3.png',
		'/flop/4.png',
		'/flop/5.png',
		'/flop/6.png'
	]

	let index = 1

	const next = () => {
		index = getRandomNumber(0, carouselPhotos.length - 1)
	}
</script>

<img src={carouselPhotos[index]} on:click={next} alt="" class="flop-img" />

<style>
	.flop-img {
		cursor: pointer;
		width: 100%;
		max-width: 300px;
		object-fit: contain;
		aspect-ratio: 2/1;
	}
</style>
