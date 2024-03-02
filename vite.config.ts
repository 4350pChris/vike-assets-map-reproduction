import md from "unplugin-vue-markdown/vite";
import vue from "@vitejs/plugin-vue";
import ssr from "vike/plugin";
import { defineConfig } from "vite";
import vitePluginVercel from 'vite-plugin-vercel';

export default defineConfig({
  plugins: [
    ssr({ prerender: { disableAutoRun: true } }),
    vue({ include: [/\.vue$/, /\.md$/] }),
    md({}),
    vitePluginVercel()
  ],
});
