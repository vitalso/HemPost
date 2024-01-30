const { src, dest, watch , parallel } = require("gulp")
const sass = require("gulp-sass")(require('sass'))
const pug = require("gulp-pug")
const	svgSprite = require('gulp-svg-sprite')
const	browserSync = require("browser-sync")

function css() {
  return src("./src/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./dist/css/"))
    .pipe(browserSync.reload({stream: true}));
}
exports.css = css;


function html() {
  return src("./src/pug/**/*.pug")
    .pipe(pug({pretty: true,}))
    .pipe(dest("./dist"))
    .pipe(browserSync.reload({stream: true}));
}
exports.html = html;

/* SVG sprite */
function spriteSVG() {
  return src('src/images/sprite/*.svg') // svg files for sprite
    .pipe(svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg"  //sprite file name
          }
        },
    }))
    .pipe(dest('dist/images'))
    .pipe(browserSync.reload({stream: true}))
}
exports.spriteSVG = spriteSVG;

function browser() {
  browserSync({
    server: {
      baseDir: 'dist'
    },
    notify: false
  })
}
exports.browser = browser;

function watching() {
	watch("./src/scss/*.scss", css);
  watch("./src/pug/**/*.pug", html);
  watch('./src/images/sprite/*.svg' , spriteSVG);
}

exports.watch = parallel( watching , browser , html , css , spriteSVG );