import { readFile } from 'fs/promises'

const regex = /(rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|#[0-9a-fA-F]{3,8})/g

const getColor = async () => {
  const content = await readFile('dist/css/color.css', 'utf-8')
  const colors = content.match(regex)
  const hexColors = colors?.filter(c => c.startsWith('#'))
  const rgbColors = colors?.filter(c => !c.startsWith('#'))
  return [hexColors, rgbColors]
}

export { getColor }
