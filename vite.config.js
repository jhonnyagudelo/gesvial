import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

function getAliases() {
  return {
    '@api': path.resolve(__dirname, './src/main/services/api'),
    '@assets': path.resolve(__dirname, './src/library/assets'),
    '@components': path.resolve(__dirname, './src/library/components'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@services': path.resolve(__dirname, './src/main/services'),
  };
}

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
      resolve: {
        alias: getAliases(),
      },
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
    base: 'http:///jhonnyagudelo/gesvial/',
    build: {
      outDir: 'build',
      chunkSizeWarningLimit: 1000,
      minify: 'esbuild',
    },
    resolve: {
      alias: getAliases(),
    },
  };
});
