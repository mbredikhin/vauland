import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin({ useStrictCSP: true }),
    dts({
      tsconfigPath: 'tsconfig.app.json',
      cleanVueFileName: true,
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  build: {
    lib: {
      name: 'vauland',
      fileName: 'index',
      entry: resolve(__dirname, 'src/index.ts'),
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') return 'index.css';
          return chunkInfo.name as string;
        },
      },
    },
  },
});
