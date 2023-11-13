import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],

  kit: {
    alias: {
      $lib: "./src/lib"
    },
    adapter: adapter({
      pages: "build",
      assets: "build",
    })
  },
};

export default config;
