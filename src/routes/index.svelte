<svelte:head>
	<title>Максим Терешко</title>
	<html lang="ru" />
</svelte:head>

<header class="header container mx-auto" />

<main class="main">
	<section class="container mx-auto my-8">
		<div class="my-20">
			<p class="text-xl text-secondary">Привет! 👋🏻</p>

			<h1 class="mt-6 text-4xl sm:text-6xl">
				<span class="font-light">Я</span> <span class="font-bold">Максим Терешко</span>
			</h1>

			<h2 class="mt-1 text-xl text-gray-500 sm:text-2xl">
				Делаю штуки для <span class="font-bold text-black">веба</span>.
			</h2>

			<div class="mt-12 space-x-2 text-lg">
				<span>Написать —</span>
				<a href="mailto:hey@tereshko.net">hey@tereshko.net</a>
			</div>
		</div>
	</section>

	<section class="container mx-auto my-8 flex max-w-screen-lg flex-col py-16 lg:flex-row">
		<h2 class="mr-20 mb-4 font-bold uppercase text-gray-500 lg:w-44 lg:text-right">Навыки</h2>
		<div class="flex-1">
			<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
				<div>
					<h3 class="mb-2 font-bold uppercase">Языки</h3>
					<ul>
						<li>HTML/CSS</li>
						<li>JavaScript (ES6)</li>
						<li>TypeScript</li>
						<li>Python</li>
					</ul>
				</div>
				<div>
					<h3 class="mb-2 font-bold uppercase">Фреймворки</h3>
					<ul>
						<li>Node.js</li>
						<li>Express.js</li>
						<li>Next.js</li>
						<li>React/React Native</li>
					</ul>
				</div>
				<div>
					<h3 class="mb-2 font-bold uppercase">Базы данных</h3>
					<ul>
						<li>MongoDB</li>
						<li>MySQL/MariaDB</li>
						<!-- <li>PostgreSQL</li> -->
						<!-- <li>Redis</li> -->
					</ul>
				</div>
				<div>
					<h3 class="mb-2 font-bold uppercase">Инструменты</h3>
					<ul>
						<li>Docker</li>
						<li>Kubernetes</li>
						<li>NGINX</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</main>

<footer class="footer">
	<div class="container mx-auto">
		<p>С ❤️ и <a href="https://svelte.dev/" rel="noreferrer" target="_blank">svelte</a>.</p>

		<div class="flex space-x-2 mt-4">
			<a href="https://vk.com/xxtereshko" rel="noreferrer" target="_blank">VK</a>
			<a href="https://t.me/xxtereshko" rel="noreferrer" target="_blank">TG</a>
		</div>
	</div>
</footer>
