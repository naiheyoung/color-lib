import { copyFile, readdir } from 'fs/promises'
import { join } from 'node:path'
import { existsSync } from 'node:fs'
import { mkdir } from 'node:fs/promises'

if (!existsSync('css')) {
  await mkdir('css')
}

const r = await readdir('src/css')

for (const c of r) {
  await copyFile(join('src/css', c), `css/${c}`)
}
