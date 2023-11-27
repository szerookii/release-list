<script lang="ts">
  import type { Release } from "$lib/config/release";
  import { siteConfig } from "$lib/config/site";
  import { jsonFetch } from "$lib/utils/fetch";
  import { createQuery } from "@tanstack/svelte-query";

  const releases = createQuery({
    queryKey: ["queryOnlineMembers"],
    queryFn: () => jsonFetch<Release[]>("/releases.json"),
    refetchInterval: 5000,
  });
</script>

<div
  class="bg-gray-100 dark:bg-slate-900 text-center text-dark dark:text-white rounded-lg m-4 md:mx-[8rem] min-h-screen"
>
  <div class="w-full mx-auto max-w-screen-xl p-4">
    <h1 class="text-4xl font-bold pt-8 px-8">{siteConfig.title}</h1>

    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 pb-8 pt-4"
    >
      {#if $releases.isSuccess}
        {#each $releases.data as release}
          <a href={release.link}>
            <img
              src={release.imageUrl}
              alt="release image"
              class="rounded-lg aspect-video w-72"
              aria-hidden="true"
            />
            <p class="text-xl font-bold pt-4">{release.name}</p>
          </a>
        {/each}
      {:else if $releases.isLoading}
        {#each [1, 2, 3, 4, 5, 6, 7, 8] as _}
          <div>
            <div
              class="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg aspect-video w-72"
            ></div>
            <div
              class="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg w-72 h-6 mt-4"
            ></div>
          </div>
        {/each}
      {:else if $releases.isError}
        <div class="text-red-500">{$releases.error.message}</div>
      {/if}
    </div>
  </div>
</div>
