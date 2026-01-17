import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: 'src/index.ts',
    format: ['esm', 'cjs']
  },

  {
    entry: 'src/cli.ts',
    format: ['cjs'],
    dts: false
  }
])
