// @ts-check

const { program } = require('commander')
const fs = require('fs')

program.version('0.0.1')

program
  .command('list-bugs')
  .description('List issues with bug label')
  .action(async () => {
    console.log('Before readFile...')
    const result = await fs.promises.readFile('.prettierrc')
    console.log('readFile result: ', result)
    console.log('List bugs!');
  })

program
  .command('check-prs')
  .description('Check pull request status')
  .action(async () => {
    console.log('Check PRs!')
  })

program.parseAsync()


// program
//   .command('start <service>', 'start named service')
//   .command('stop [service]', 'stop named service, or all if no name supplied');

// Command prepared separately.
// Returns `this` for adding more commands.
// program
//   .addCommand(build.makeBuildCommand());