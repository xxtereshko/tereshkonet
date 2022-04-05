<footer class="footer">
	<div class="footer-divider" />
	<div class="footer-nav">
		<div class="footer-column" />
		<div class="footer-column">
			<div class="title">Соцсети</div>
			<ul class="list">
				<li>
					<a href="https://vk.com/xxtereshko" target="_blank" rel="noreferrer noopener">VK</a>
				</li>
				<li>
					<a href="https://t.me/xxtereshko" target="_blank" rel="noreferrer noopener">Telegram</a>
				</li>
			</ul>
		</div>
		<div class="footer-column">
			<div class="title">Код</div>
			<ul class="list">
				<li>
					<a href="https://github.com/xxtereshko" target="_blank" rel="noreferrer noopener"
						>GitHub</a
					>
				</li>
			</ul>
		</div>
		<div class="footer-column">
			<div class="title">Еще</div>
			<ul class="list">
				<li><a href="/blog" target="_blank" rel="noreferrer noopener">Блог</a></li>
			</ul>
		</div>
	</div>
</footer>

<style>
	.footer {
		position: relative;
	}
	.footer-nav {
		display: grid;
		gap: 20px;
		grid-template-columns: repeat(auto-fill, minmax(calc(8.33333% - 20px), 1fr));
	}

	.footer-column:first-child {
		grid-column: 1 / span 5;
	}

	.footer-column:nth-child(2) {
		grid-column: 6 / span 2;
	}
	.footer-column:nth-child(3) {
		grid-column: 8 / span 2;
	}
	.footer-column:nth-child(4) {
		grid-column: 10 / span 2;
	}

	.footer-column .title {
		margin-bottom: 42px;
		opacity: 0.45;
	}

	.footer-divider {
		position: absolute;
		width: 100%;
		top: 45px;
		height: 0.5px;
		opacity: 0.1;
		background-color: #fff;
	}

	.footer-column .list li {
		margin-bottom: 16px;
	}
</style>
