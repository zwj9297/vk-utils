const gulp = require("gulp");
const del = require('del')
const less = require('gulp-less')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const through = require('through2')
const rename = require('gulp-rename')

gulp.task('cleanTask', function() {
  return del(['lib/**/*.*'])
})

gulp.task('lessTask', function() {
  return gulp.src([
    './src/style.less',
    './src/components/**/*.less'
  ])
  .pipe(less())
  .pipe(postcss([
    autoprefixer({ overrideBrowserslist: ['> 1%', 'last 2 versions', 'not dead'] }),
    // cssnano()
  ]))
  .pipe(rename(file => {
    file.basename = 'style'
  }))
  .pipe(gulp.dest('lib'))
})

gulp.task('copyTask', function() {
  return gulp.src('./src/index.js')
  .pipe(through.obj(function(chunk, enc, callback) {
    chunk._contents = new Buffer(chunk._contents.toString().replace(/\/components/g, ''))
    this.push(chunk)
    callback()
  }))
  .pipe(gulp.src(['./src/components/**/*.js', './src/components/**/*.vue']))
  .pipe(gulp.dest('lib'))
})

gulp.task('watchTask', function() {
  gulp.watch('./src/**/*.less', gulp.series(['lessTask']))
  gulp.watch(['./src/**/*.js', './src/**/*.vue'], gulp.series(['copyTask']))
})

gulp.task('packTask', gulp.series(['cleanTask', gulp.parallel(['copyTask', 'lessTask'])]))

gulp.task('default', gulp.series(['packTask', 'watchTask']))