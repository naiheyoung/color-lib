import chalk from 'chalk'
import ora from 'ora'

export async function hello(name: string) {
  const spinner = ora(`Resolving ${name}...`).start()
  spinner.color = 'magenta'
  await new Promise(resolve => setTimeout(resolve, 3000))
  spinner.succeed(chalk.green(`Hello, ${name}!`))
}
