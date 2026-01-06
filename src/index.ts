import { readFile } from 'fs/promises'
import { join, dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const regex = /(rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|#[0-9a-fA-F]{3,8})/g

const getColor = async () => {
  const _path = join(
    resolve(dirname(fileURLToPath(import.meta.url)), '../'),
    'css',
    'colors.css'
  )
  const content = await readFile(_path, 'utf-8')
  const colors = content.match(regex)
  const hexColors = colors?.filter(c => c.startsWith('#'))
  const rgbColors = colors?.filter(c => !c.startsWith('#'))
  return [hexColors, rgbColors]
}

const hexToRgb = (hex: string) => {
  if (!/^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(hex)) {
    throw new Error('hex is invalid.')
  }
  hex = hex.replace('#', '')
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(h => h + h)
      .join('')
  }
  const num = parseInt(hex, 16)
  return `${(num >> 16) & 255} ${(num >> 8) & 255} ${num & 255}`
}

export { getColor, hexToRgb }
