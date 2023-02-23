const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
const cache = require("gulp-cache");
const imagemin = require('gulp-imagemin');
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function css(done) {
    src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest('build/css'));

    done();
}

function versionWebp(done) {

    const opciones = {quality: 50};

    src('src/img/**/*.{jpg,png}')
    .pipe(webp(opciones))
    .pipe(dest('build/img'));

    done();
}

function versionAvif(done) {

    const opciones = {quality: 50};

    src('src/img/**/*.{jpg,png}')
    .pipe(avif(opciones))
    .pipe(dest('build/img'));

    done();
}

function imagenes(done) {
    
    const opciones = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{jpg,png}')
    .pipe(cache(imagemin(opciones)))
    .pipe(dest('build/img'));

    done();
}

function dev(done) {
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", javascript);

    done();
}

function javascript(done) {
    src('src/js/**/*.js')
    .pipe(dest('build/js'));

    done();
}

exports.css = css;
exports.js = javascript;
exports.versionWebp = versionWebp;
exports.imagenes = imagenes;
exports.versionAvif = versionAvif;
exports.dev = parallel(javascript,versionAvif,imagenes,versionWebp,dev);