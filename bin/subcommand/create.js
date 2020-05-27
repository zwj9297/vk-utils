const path = require('path')
const gulp = require('gulp')
const inquirer = require('inquirer')
const ora = require('ora')
const chalk = require('chalk')
const through = require('through2')
const jsonModify = require('gulp-json-modify')
const { exec } = require('child_process');
const tempPath = path.resolve(__dirname, '../../template')

function create(projectName, to) {
  return prompt(projectName, to).then(clone)
}

function prompt(projectName, to) {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'version',
      message: chalk.blue('请输入版本号：'),
      default: '1.0.0',
      prefix: chalk.blue('?'),
      validate: (value) => {
        return /^[1-9]\d*\.([1-9]\d*|0)\.([1-9]\d*|0)$/.test(value)
      }
    }
  ]).then(res => ({...res, name: projectName, to }))
}

function clone(options) {
  const spinner = ora({
    color: 'blue',
    text: 'creating...'
  })
  spinner.start()
  const projectPath = options.to+'/'+options.name
  gulp
    .src(`${tempPath}/package.json`)
    .pipe(jsonModify({ key: 'name', value: options.name }))
    .pipe(jsonModify({ key: 'version', value: options.version }))
    .pipe(gulp.src([`${tempPath}/**/*.*`, `!${tempPath}/package.json`]))
    .pipe(gulp.dest(projectPath))
    .pipe(through.obj((chunk, enc, callback) => {
      exec(`cd ${projectPath} && npm install`, (err, stdout, stderr) => {
        if(err) spinner.fail('fail!')
        else spinner.succeed('success!')
        process.exit(0)
      })
    }))
}

exports.create = create