import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: "src/index.ts",
			name: "DomUtils",
			formats: ["es", "iife"],
			fileName: (format) => `dom-utils.${format}.js`,
		},
		rollupOptions: {
			output: {
				globals: {},
			},
		},
	},
});
