import vue from "@vitejs/plugin-vue";
import ssr from "vite-plugin-ssr/plugin";

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) =>
            tag.includes("marquee") ||
            tag.includes("clippath") ||
            tag.includes("WavesSeparator"),
        },
      },
    }),
    ssr(),
  ],
};
