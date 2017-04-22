import gulp from 'gulp';
import config from '../config';
import ap from 'gulp-append-prepend';
import autoprefixer from 'gulp-autoprefixer';
import cssmin from 'gulp-cssmin';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import stripCssComments from 'gulp-strip-css-comments';
import util from 'gulp-util';

gulp.task('css', ['css:dev', 'css:prod'],() => {});

gulp.task('css:dev', () => {
  return gulp.src(config.path.src.scss.main)
    .pipe(plumber({errorHandler: util.log}))
    .pipe(sass(config.scss.dev))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(ap.prependFile(config.path.src.normalize))
    .pipe(ap.prependText(config.license))
    .pipe(gulp.dest(config.absolute(config.path.dist.css)));
});

gulp.task('css:prod', () => {
  return gulp.src(config.path.src.scss.main)
    .pipe(plumber({errorHandler: util.log}))
    .pipe(sass(config.scss.dist))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(ap.prependFile(config.path.src.normalize))
    .pipe(stripCssComments({preserve: false}))
    .pipe(cssmin())
    .pipe(ap.prependText(config.license))
    .pipe(rename(config.filenames.min))
    .pipe(gulp.dest(config.absolute(config.path.dist.css)));
});
