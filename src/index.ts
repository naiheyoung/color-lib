import { readFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const regex = /(rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|#[0-9a-fA-F]{3,8})/g

const getColor = async () => {
  const _path = join(
    dirname(fileURLToPath(import.meta.url)),
    'css',
    'color.css'
  )
  console.log(_path)
  const content = await readFile(_path, 'utf-8')
  const colors = content.match(regex)
  const hexColors = colors?.filter(c => c.startsWith('#'))
  const rgbColors = colors?.filter(c => !c.startsWith('#'))
  return [hexColors, rgbColors]
}

export { getColor }
