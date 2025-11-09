import cac from 'cac'
import chalk from 'chalk'
import { getColor } from './index'

const rgbRegex = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/

const cli = cac('colors')

cli.command('[]').action(async () => {
  const [hexColors, rgbColors] = await getColor()
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
