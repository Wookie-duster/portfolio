var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	cssnano = require('gulp-cssnano'),
	imagemin = require('gulp-imagemin'),
	uglify = require('gulp-uglifyjs'),
	useref = require('gulp-useref'),
	notify = require('gulp-notify'),
	del = require('del'),
	svgmin = require('gulp-svgmin'),
	cheerio = require('gulp-cheerio'),
	replace = require('gulp-replace'),
	include = require('gulp-file-include'),
	svgstore = require('gulp-svgstore'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer');

// Sass compiler & autoprefixer
gulp.task('sass', function() {
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass())
		.on('error', function(err) {
            notify().write(err);
            this.emit('end');
        })
		.pipe(autoprefixer({browsers: ['last 50 versions']}))
		.pipe(cssnano({autoprefixer: {browsers: ['last 50 versions']}}))
		.pipe(gulp.dest('build/assets/css'))
		.pipe(browserSync.stream())
});

// Svg sprite generator
gulp.task('svgsprite', function () {
	return gulp.src('src/img/svg/icons/*.svg')
		.pipe(svgmin())
		.pipe(svgstore({ fileName: 'icons.svg', inlineSvg: true }))
		.pipe(cheerio({
	      run: function ($, file) {
	          $('svg').addClass('hide');
	          $('symbol').each(function(){
	              if ($(this).attr('id').indexOf('--clr')<0) {
	                $(this).find('[fill]').removeAttr('fill');
	              }
	          });
	          // $('[stroke]').removeAttr('stroke');
	      },
	      parserOptions: { xmlMode: true }
	    }))
	    .pipe(rename({basename: 'icons'}))
		.pipe(gulp.dest('src/img/svg/icons/sprite'))
		.pipe(browserSync.stream())
});

// Svg sprite cleaner
gulp.task('svg-clean', function() {
	return del('src/img/svg/icons/sprite/*')
});

// Svg
gulp.task('svg', function() {
	gulp.src('src/img/svg/*.svg')
		.pipe(svgmin())
		.pipe(gulp.dest('build/assets/img/svg'))
		.pipe(browserSync.stream())
});

// Html
gulp.task('html-include', function() {
	return gulp.src('src/**/*.html')
		.pipe(include({
          prefix: '@@',
          basepath: '@file'
        }))
        // .pipe(rename({basename: 'index'}))
		.pipe(gulp.dest('build'))
		.pipe(browserSync.stream())
});

// Watch
gulp.task('watch', function() {
	browserSync.init({
		server: {
			baseDir: "build"
		},
		// browser: "google chrome"
});

	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/**/*.html', ['html-include']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/img/svg/icons/*', ['svgsprite', 'html-include']);
	gulp.watch('src/img/svg/*.svg', ['svg']);
	gulp.watch('src/img/*', ['img']);
	gulp.watch('src/fonts/*', ['sass', 'fonts']);
});

// Image compressor
gulp.task('img', function() {
	gulp.src('src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/assets/img'))
		.pipe(browserSync.stream())
});

// favicon
gulp.task('favicon', function() {
    return gulp.src('src/favicons/*')
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
});

// Fonts
gulp.task('fonts', function() {
	gulp.src('src/fonts/*')
	 .pipe(gulp.dest('build/assets/fonts/'))
	 .pipe(browserSync.stream())
});

// JavaScript
gulp.task('js', function() {
	return gulp.src('src/js/*.js')
		.pipe(useref())
		.pipe(uglify())
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest('build/assets/js'))
		.pipe(browserSync.stream())
});

// Clean dist
gulp.task('clean', function() {
	return del('build')
});

// Default
gulp.task('default', ['html-include', 'sass', 'fonts', 'img', 'favicon' , 'svg', 'svgsprite', 'js', 'watch']);
