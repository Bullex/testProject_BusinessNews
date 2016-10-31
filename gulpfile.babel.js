'use strict';

// This gulpfile makes use of new JavaScript features.
// Babel handles this without us having to do anything. It just works.
// You can read more about the new JavaScript features here:
// https://babeljs.io/docs/learn-es2015/

import path from 'path';
import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import swPrecache from 'sw-precache';
import gulpLoadPlugins from 'gulp-load-plugins';
import {output as pagespeed} from 'psi';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const historyApiFallback = require('connect-history-api-fallback');

// Lint JavaScript
gulp.task('lint', () =>
  gulp.src('app/**/*.js')
    .pipe($.if(!browserSync.active, $.eslint.failOnError()))
);

// Optimize images
gulp.task('images', () =>
  gulp.src('app/assets/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/assets/images'))
    .pipe($.size({title: 'images'}))
);

// Copy all files at the root level (app)
gulp.task('copy', () =>
  gulp.src([
    'app/*',
    'app/**/*',
    '!app/**/*.html',
    '!app/**/*.scss',
    '!app/**/*.php',
    '!app/**/*.js',
    '!app/assets/styles/components'
    //'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
    .pipe($.size({title: 'copy'}))
);

// Compile and automatically prefix stylesheets
gulp.task('styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    'app/assets/styles/main.scss',
    'app/assets/styles/**/*.css'
  ])
    .pipe($.newer('.tmp/styles'))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('.tmp/styles'))
    // Concatenate and minify styles
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.size({title: 'styles'}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/assets/styles'));
});

// Concatenate and minify JavaScript. Optionally transpiles ES2015 code to ES5.
// to enable ES2015 support remove the line `"only": "gulpfile.babel.js",` in the
// `.babelrc` file.
gulp.task('scripts', () =>
    gulp.src([
        'app/app.js',
        'app/common/common.date-filter.js',
        'app/common/common.focus-service.js',
        'app/common/common.focus-directive.js',
        'app/news/news.js',
        'app/news/news.config.js',
        'app/news/news.controller.js',
        'app/news/news.service.js',
        'app/news/article/article.js',
        'app/news/article/article.config.js',
        'app/news/article/article.controller.js',
        'app/news/modal/modal.js',
        'app/news/modal/modal.directive.js',
        'app/statistics/statistics.js',
        'app/statistics/statistics.chart-directive.js',
        'app/statistics/statistics.config.js',
        'app/statistics/statistics.controller.js',
        'app/statistics/statistics.service.js',
        'app/about/about.js',
        'app/about/about.config.js',
        'app/about/about.controller.js',
        'app/about/about.service.js',
        'app/contacts/contacts.js',
        'app/contacts/contacts.config.js',
        'app/contacts/contacts.controller.js',
        'app/404/404.js',
        'app/404/404.config.js',
        'app/404/404.controller.js'
    ])
      .pipe($.newer('.tmp/scripts'))
      .pipe($.sourcemaps.init())
      .pipe($.babel())
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest('.tmp/scripts'))
      .pipe($.concat('main.min.js'))
      .pipe($.uglify({preserveComments: 'some'}))
      // Output files
      .pipe($.size({title: 'scripts'}))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest('dist/scripts'))
);

// Scan your HTML for assets & optimize them
gulp.task('html', () => {
  return gulp.src('app/**/*.html')
    .pipe($.useref({
      searchPath: '{.tmp,app}',
      noAssets: true
    }))

    // Minify any HTML
    .pipe($.if('*.html', $.htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: true
    })))
    // Output files
    .pipe($.if('*.html', $.size({title: 'html', showFiles: true})))
    .pipe(gulp.dest('dist'));
});

// Clean output directory
gulp.task('clean', () => del(['.tmp', 'dist/*', '!dist/.git'], {dot: true}));

// Watch files for changes & reload
gulp.task('serve', ['scripts', 'styles'], () => {
  browserSync({
    notify: false,
    // Customize the Browsersync console logging prefix
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    baseDir: "dist",
    middleware: [ historyApiFallback() ],
    server: ['.tmp', 'app'],
    port: 3000
  });

  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/assets/styles/**/*.{scss,css}'], ['styles', reload]);
  gulp.watch(['app/**/*.js'], ['lint', 'scripts', reload]);
  gulp.watch(['app/assets/images/**/*'], reload);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], () =>
  browserSync({
    notify: false,
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    baseDir: "dist",
    middleware: [ historyApiFallback() ],
    server: 'dist',
    port: 3001
  })
);

// Build production files, the default task
gulp.task('default', ['clean'], cb =>
  runSequence(
    'styles',
    ['lint', 'html', 'scripts', 'images', 'copy'],
    cb
  )
);

// Run PageSpeed Insights
gulp.task('pagespeed', cb =>
  // Update the below URL to the public URL of your site
  pagespeed('example.com', {
    strategy: 'mobile'
    // By default we use the PageSpeed Insights free (no API key) tier.
    // Use a Google Developer API key if you have one: http://goo.gl/RkN0vE
    // key: 'YOUR_API_KEY'
  }, cb)
);

// Copy over the scripts that are used in importScripts as part of the generate-service-worker task.
gulp.task('copy-sw-scripts', () => {
  return gulp.src(['node_modules/sw-toolbox/sw-toolbox.js', 'app/scripts/sw/runtime-caching.js'])
    .pipe(gulp.dest('dist/scripts/sw'));
});