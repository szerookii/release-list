<script lang="ts">
	import "../app.postcss";

	import { ModeWatcher } from "mode-watcher";
	import { siteConfig } from "$lib/config/site";
	import Footer from "$lib/components/footer/footer.svelte";
	import { QueryClientProvider, QueryClient } from "@tanstack/svelte-query";

	const queryClient = new QueryClient();
</script>

<svelte:head>
	<title>{siteConfig.title}</title>

	<meta name="title" content={siteConfig.title} />
	<meta name="description" content={siteConfig.description} />
	<meta
		content={siteConfig.color}
		data-react-helmet="true"
		name="theme-color"
	/>

	<!-- Open Graph / Facebook / Discord / etc -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={siteConfig.title} />
	<meta property="og:description" content={siteConfig.description} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={siteConfig.title} />
	<meta property="twitter:description" content={siteConfig.description} />
</svelte:head>

<QueryClientProvider client={queryClient}>
	<ModeWatcher />

	<div class="min-h-screen">
		<slot />
	</div>

	<Footer />
</QueryClientProvider>
