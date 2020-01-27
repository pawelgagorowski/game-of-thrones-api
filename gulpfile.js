require('colors');

const del = require('del');
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const plumber = require('gulp-plumber');
const nodemon = require('gulp-nodemon');
const sourcemaps = require('gulp-sourcemaps');
const getBabelConfig = require('./babel.config');

const paths = {
  src: 'backend/src/**/*.js',
  dist: 'backend/dist',
  lintSrc: ['backend/src/**/*.js', 'backend/src/**/**/*.js'],
  watchSrc: ['backend/src/**/*.js', 'backend/src/**/**/*.js'],
  del: 'backend/dist/**',
  runDevFile: 'backend/dist/index.js'
};

function clean() {
  const path = paths.del;
  console.log('Gulp deleting directory'.gray, path.toString().yellow);
  return del(path);
}

function make() {
  console.log('Making files'.gray);
  const input = paths.src;
  const output = paths.dist;
  console.log('Input'.gray, input.yellow);
  console.log('Output'.gray, output.yellow);

  return gulp.src([paths.src])
    .pipe(plumber())
    .pipe(babel(getBabelConfig()))
    .pipe(sourcemaps.write('.', {
      sourceRoot: ''
    }))
    .pipe(sourcemaps.init())
    .pipe(gulp.dest(paths.dist));
}

/* eslint no-console: "off" */
function lint() {
  const eslintResult = gulp.src(paths.lintSrc)
    .pipe(eslint())
    .pipe(eslint.format());
  return eslintResult.pipe(eslint.failAfterError());
}

async function run() {
  process.env.NODE_ENV = 'development';
  process.env.NODE_CONFIG_DIR = './backend/dist/config';
  await nodemon({
    script: paths.runDevFile,
    ext: 'js json',
    watch: paths.dist
  });
}

async function watch() {
  await gulp.watch(paths.watchSrc, make);
}

function runDev(done) {
  return gulp.series(clean, make, gulp.parallel(run, watch))(done);
}

gulp.task('run', runDev);

gulp.task('build', function () {
  return make();
});

gulp.task('lint', lint);
