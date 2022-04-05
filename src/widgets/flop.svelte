<script>
	import { getRandomNumber } from '../utils/number'

	const carouselPhotos = [
		'/flop/1.png',
		'/flop/2.png',
		'/flop/3.png',
		'/flop/4.png',
		'/flop/5.png',
		'/flop/6.png',
		'/flop/7.png'
	]

	let index = 1

	const next = () => {
		index = getRandomNumber(0, carouselPhotos.length - 1)
	}
</script>

<img src={carouselPhotos[index]} on:click={next} alt="" class="flop-img" />

<style>
	.flop-img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		aspect-ratio: 3/1;
	}
</style>
