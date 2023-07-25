const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const babel = require('gulp-babel');

//minificacao de html
function minificaHTML() {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
}

//compilacao do sass
function compilaSass() {
  return gulp.src('./source/styles/main.scss')
    .pipe(sourceMaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./build/source/styles'))
}

//compressao de imagens
function comprimeImagens() {
  return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/source/images'))
}

//minificacao de js
function minificaJS() {
  return gulp.src('./source/scripts/*.js')
    .pipe(babel({ presets: ['@babel/env'] })) //converte o js para uma versao mais antiga e compativel
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/source/scripts'))
}

//tarefas de gulp
exports.default = function() {
  gulp.watch('*.html', { ignoreInitial: false}, gulp.series(minificaHTML)),
  gulp.watch('./source/images/*', { ignoreInitial: false}, gulp.series(comprimeImagens)),
  gulp.watch('./source/styles/*.scss', { ignoreInitial: false}, gulp.series(compilaSass)),
  gulp.watch('./source/scripts/*.js', { ignoreInitial: false}, gulp.series(minificaJS))
};