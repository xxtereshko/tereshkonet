<script>
	import '../app.css'
</script>

<div class="ref" />

<header>
	<h1 class="mb-2">Максим Терешко</h1>
	<p class="text-sm text-gray">@xxtereshko</p>
</header>

<main class="flex-1 mt-8">
	<slot />
</main>

<style>
	.ref {
		background-image: url('/static/images/east.png');
		background-position: 50% bottom;
		background-repeat: no-repeat;
		background-size: 85px;
		height: 85px;
		top: 0;
		left: 0;
		right: 0;
		position: absolute;
		transform: translateY(-85px) translateZ(0);
		z-index: 100000;
	}

	.ref::after {
		color: #000;
		content: 'Привет!';
		font-size: 14px;
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translateX(50px);
	}

	@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
		.ref {
			background-image: url('/static/images/east@2x.png');
		}
	}
</style>
