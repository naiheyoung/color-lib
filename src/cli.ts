import cac from 'cac'
import chalk from 'chalk'
import { readFile } from 'fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const regex = /(rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|#[0-9a-fA-F]{3,8})/g
const rgbRegex = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const cli = cac('colors')

cli.command('[]').action(async () => {
  const content = await readFile(join(__dirname, '../css/color.css'), 'utf-8')
  const colors = content.match(regex)
  const hexColors = colors?.filter(c => c.startsWith('#'))
  const rgbColors = colors?.filter(c => !c.startsWith('#'))
  console.log('Apple Color')
  rgbColors?.forEach(color => {
    const [_, r, g, b] = color.match(rgbRegex) as RegExpMatchArray
    console.log(
      chalk.bgRgb(Number(r), Number(g), Number(b))(` ${color.padEnd(18, ' ')} `)
    )
  })
  console.log('\nNord Color')
  hexColors?.forEach(color => {
    console.log(chalk.bgHex(color)(` ${color} `))
  })
})

cli.help()
cli.parse()
