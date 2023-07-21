import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const port = 3006;

  if (command === 'serve' && mode === 'development') {
    return {
      // dev specific config
      server: {
        port,
      },
      plugins: [react()],
    };
  }
  // command === 'build' && mode === 'production'
  return {
    // build specific config

    preview: {
      port,
    },
    plugins: [
      react({
        plugins: [['@swc/plugin-styled-components', {}]], // Use React plugin in all *.jsx and *.tsx files
      }),
      splitVendorChunkPlugin(),
    ],
    base: 'https://jhonnyagudelo.github.io/gesvial/',
    build: {
      outDir: 'build',
      chunkSizeWarningLimit: 1000,
      minify: 'esbuild',
    },
  };
});
