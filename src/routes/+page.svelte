<script lang="ts">
  import { releases } from "$lib/config/release";
    import { siteConfig } from "$lib/config/site";
</script>

<div class="bg-gray-100 dark:bg-slate-900 text-center text-dark dark:text-white rounded-lg m-4 md:mx-[8rem] min-h-screen">
  <div class="w-full mx-auto max-w-screen-xl p-4">
  <h1 class="text-4xl font-bold pt-8 px-8">{siteConfig.title}</h1>

  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 pb-8 pt-4">
    {#each releases as release}
      <a href={release.link}>
        <img src={release.imageUrl} alt="release image" class="rounded-lg aspect-video w-72" />
      </a>
    {/each}
  </div>
  </div>
</div>