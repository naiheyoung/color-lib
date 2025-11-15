import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/cli.ts'],
  format: ['esm'],
  dts: true,
  outDir: 'dist',
  splitting: false,
  clean: true,
  onSuccess: 'node scripts/copy.ts'
})
