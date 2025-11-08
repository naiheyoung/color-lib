import cac from 'cac'
import { hello } from './index.js'

const cli = cac('hello-cli')

cli
  .command('<name>', 'Greet someone.')
  .option('--caps', 'Uppercase the name')
  .action(async (name, options) => {
    const _name = options.caps ? name.toUpperCase() : name
    await hello(_name)
  })

cli.help()
cli.parse()
