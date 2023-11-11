<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Sun, Moon } from "lucide-svelte";

  import { toggleMode } from "mode-watcher";
</script>

<footer class="bg-gray-100 rounded-lg shadow m-4 dark:bg-slate-900">
  <div
    class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
  >
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >© {new Date().getFullYear()} Kirigiri's. All Rights Reserved.
    </span>
    <ul
      class="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0"
    >
      <li>
        <Button on:click={toggleMode} variant="ghost" size="icon" class="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-transparent">
          <Sun
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </li>
    </ul>
  </div>
</footer>
