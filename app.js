const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log("msg", msg)

const greeMsg = chalk.bgWhite.green(msg);
console.log("greeMsg", greeMsg)


