var gulp = require('gulp'),
    webpack = require('webpack-stream'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass       = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpPlugins = require('gulp-load-plugins')(),
    babel = require('gulp-babel'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    webserver = require('gulp-webserver'),
    inject = require('gulp-inject'),
    hash = require('gulp-hash'),
    uglify = require('gulp-uglify'),
    order = require('gulp-order'),
    s3   = require('gulp-s3'),
    cloudfront = require("gulp-cloudfront"),
    livereload = require('gulp-livereload'),
    bs = require('browser-sync').create();

var runSequence = require('run-sequence');


// If you want details of the error in the console
function swallowError (error) {
  gutil.log("ERROR")
  gutil.log(error.toString())
  this.emit('end')
}

gulp.task('default', ['build-js', 'inject', 'webserver', 'watch']);

// Watch JS hints
gulp.task('jshint', function() {
  return gulp.src('source/javascript/**/*.js')
            .pipe(jshint({ esversion: 6 }))
            .pipe(jshint.reporter('jshint-stylish'));
});

// Build the JS
gulp.task('build-js', function() {
  return gulp.src('source/javascript/index.js')
    .pipe(webpack({
      output: {
        filename: '[name].js'
      },
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ["@babel/env",
                "@babel/react"]
              }
            }
          },
          {
            test: /\.css$/, loader: "style-loader!css-loader"
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  outputPath: 'images',
                  // publicPath: 'images'
                },
              },
            ],
          },
        ]
      },
      devtool: '#inline-source-map'
    }))
    .on('error', swallowError)
    .pipe(gulp.dest('app'))
    // .pipe(sourcemaps.init({ loadMaps: true }))
    // .pipe(uglify())
    // .pipe(rename('main.min.js'))
    // // Output files
    // // .pipe(size({title: 'scripts'}))
    // .pipe(sourcemaps.write('.'))
    // .pipe(gulp.dest('public/assets/javascript'));
});

gulp.task('publish-js', function() {
  return gulp.src('source/javascript/index.js')
    .pipe(webpack({
      output: {
        filename: '[name].js'
      },
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ["@babel/env",
                "@babel/react"]
              }
            }
          },
          {
            test: /\.css$/, loader: "style-loader!css-loader"
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  outputPath: 'images'
                },
              },
            ],
          },
          
        ]
      },
      devtool: '#inline-source-map'
    }))
    .on('error', swallowError)
    .pipe(gulp.dest('app'))
    // .on('error', swallowError)
    // .pipe(gulp.dest('.tmp/scripts'))
    // .pipe(sourcemaps.init({ loadMaps: true }))
    // .pipe(uglify())
    // .pipe(rename('main.min.js'))
    // // Output files
    // // .pipe(size({title: 'scripts'}))
    // .pipe(sourcemaps.write('.'))
    // .pipe(gulp.dest('public/assets/javascript'))
    // .on('error', swallowError)
    // .pipe(gulp.dest('public/assets/javascript'));


})

// Watch SASS Files
// gulp.task('build-css', function() {
//     return gulp.src('source/scss/**/*.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass())
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('public/assets/stylesheets'))
//         .pipe(bs.reload({
//             stream: true
//         }));
// });

// Webservice
gulp.task('webserver', function() {
  gulp.src(['app'])
    .pipe(webserver({
      livereload: true,
    }));
});

// Inject
gulp.task('inject', function () {

  var opts = {
    algorithm: 'sha1',
    hashLength: 30 + Math.random() * 40,
    template: '<%= name %><%= ext %>?hash=<%= hash %>'
  }

  var target = gulp.src('source/html/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['app/main.js'], { base: './' })
                      .pipe(hash(opts));

  return target.pipe(inject(sources, { 
                        ignorePath: 'app/assets',
                        transform: function (filepath, file, i, length) {
                          return "<script src='" + filepath.replace('/app/', '/') + "'></script>";
                        }
                    }))
    .pipe(gulp.dest('app'));
});

// Inject
gulp.task('publish-inject', function () {

  var opts = {
    algorithm: 'sha1',
    hashLength: 30 + Math.random() * 40,
    template: '<%= name %><%= ext %>?hash=<%= hash %>'
  }

  var target = gulp.src('source/html/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['app/main.js'], { base: './' })
                      .pipe(hash(opts));

  return target.pipe(inject(sources, { 
                              ignorePath: 'app/assets',
                              transform: function (filepath, file, i, length) {
                                return "<script src='" + filepath.replace('/app/', '/') + "'></script>";
                              }
                          }))
                          .pipe(gulp.dest('app'));
});


gulp.task('watch', function() {
  gulp.watch('source/javascript/**/*.js', ['build-js']);
  gulp.watch('source/javascript/**/*.css', ['build-js']);
  // gulp.watch('source/**', ['inject', 'prepare-export']);
});

gulp.task('publish', function(done) {
  runSequence('publish-js', 'publish-inject', 'prepare-export');
});

gulp.task('prepare-export', function(done) {
  runSequence('export-javascript', 'export-inject');
});

gulp.task('export-javascript', function() {
  return gulp.src('source/javascript/index.js')
    .pipe(webpack({
      output: {
        filename: '[name].js'
      },
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ["@babel/env",
                "@babel/react"]
              }
            }
          },
          {
            test: /\.css$/, loader: "style-loader!css-loader"
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  outputPath: 'images',
                  // publicPath: 'images'
                },
              },
            ],
          },
        ]
      },
      devtool: '#inline-source-map'
    }))
    .on('error', swallowError)
    // .pipe(uglify())
    // .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    // .pipe(rename('main.min.js'))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
});

gulp.task('export-inject', function () {

  var opts = {
    algorithm: 'sha1',
    hashLength: 30 + Math.random() * 40,
    template: '<%= name %><%= ext %>?hash=<%= hash %>'
  }

  var target = gulp.src('source/html/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['dist/main.js'], {read: false})
                      .pipe(hash(opts));

  return target.pipe(
      inject(
          sources,
          {
              ignorePath: 'dist/assets' ,
              transform: function (filepath, file, i, length) {
                return "<script src='" + filepath.replace('/dist/', '/') + "'></script>";
              }
          }
      ), {relative: true}
    )
    .pipe(gulp.dest('dist'));
});

gulp.task('export', function() {
  var AWS = {
    "key":    process.env.AWS_ACCESS_KEY,
    "secret": process.env.AWS_SECRET_KEY,
    "bucket": process.env.AWS_BUCKET_NAME,
    "region": process.env.AWS_REGION,
    "distributionId": process.env.CLOUDFRONT_ID
  }

  gulp.src('./dist/**')
    .pipe(s3(AWS))
    .pipe(cloudfront(AWS));

})
