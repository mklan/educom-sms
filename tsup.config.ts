import { defineConfig } from 'tsup';

export default defineConfig([
  {
    minify: false,
    dts: true, // declaration files
    sourcemap: false,
    clean: true,
    entry: ['src/index.tsx'],
    outDir: 'dist',
  },
]);
