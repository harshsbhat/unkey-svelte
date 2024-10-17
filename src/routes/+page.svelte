<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { writable } from 'svelte/store';


	type ButtonKey = 'createKey' | 'protectedRoute';


	interface ButtonState {
		createKey: string;
		protectedRoute: string;
	}

	const buttonStates = writable<ButtonState>({
		createKey: 'Copy',
		protectedRoute: 'Copy',
	});

	const copyToClipboard = (text: string, buttonKey: ButtonKey): void => {
		navigator.clipboard.writeText(text).then(() => {
			buttonStates.update(state => ({ ...state, [buttonKey]: '✅' }));

			setTimeout(() => {
				buttonStates.update(state => ({ ...state, [buttonKey]: 'Copy' }));
			}, 2000);
		}).catch((err) => {
			console.error('Failed to copy text: ', err);
		});
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app with <a href="https://www.unkey.com/"><strong>Unkey</strong>
	</h1>

	<h2>
		try creating a key  <a href="/api/createKey"><strong>/api/createKey</strong></a>
	</h2>

	<div class="command-container">
		<pre><code>curl http://localhost:5173/api/createKey</code></pre>
		<button on:click={() => copyToClipboard('curl http://localhost:5173/api/createKey', 'createKey')}>{ $buttonStates.createKey }</button>
	</div>


	<h2>
		use that key to access the protected route  <a href="/api/protected"><strong>/api/protected</strong></a>
	</h2>

	<div class="command-container">
		<pre><code>curl -H "Authorization: Bearer YOUR_API_KEY" http://localhost:5173/api/protected</code></pre>
		<button on:click={() => copyToClipboard('curl -H "Authorization: Bearer YOUR_API_KEY" http://localhost:5173/api/protected', 'protectedRoute')}>{ $buttonStates.protectedRoute }</button>
	</div>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.command-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin: 1rem 0;
	}

	pre {
		background-color: #f4f4f4;
		padding: 1rem;
		border-radius: 8px;
		overflow-x: auto;
		margin: 0;
		flex-grow: 1;
	}

	code {
		color: #ff3e00;
	}

	button {
		margin-left: 1rem;
		background-color: #ff3e00;
		border: none;
		color: white;
		padding: 4px 8px;
		cursor: pointer;
		border-radius: 5px;
		font-size: 0.875rem;
	}

	button:hover {
		background-color: #e33600;
	}
</style>
