import { readFile, writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import { hexToRgb } from '../src/index.ts'

const regex = /(--colors-.+):\s(.+);/g
const rgbRegex = /rgb\(\s*(\d{1,3})\s*,?\s*(\d{1,3})\s*,?\s*(\d{1,3})\s*\)/

const colorFilePath = 'src/css/colors.css'
const outputPath = 'css/colors.css'
let content = await readFile(colorFilePath, 'utf-8')
const colorMatchs = content.matchAll(regex)

for (let color of colorMatchs) {
  const [source, property, v] = color

  if (v.startsWith('rgb')) {
    const [_, r, g, b] = v.match(rgbRegex) ?? []
    content = content.replace(
      source,
      `${source}\n  ${property}-rgb: ${r} ${g} ${b};`
    )
  } else if (v.startsWith('#')) {
    content = content.replace(
      source,
      `${source}\n  ${property}-rgb: ${hexToRgb(v)};`
    )
  }
}

if (!existsSync('css')) {
  await mkdir('css')
}

await writeFile(outputPath, content)
