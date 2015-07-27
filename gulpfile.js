var gulp = require('gulp')  
var ts = require('gulp-typescript')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var sourcemaps = require('gulp-sourcemaps')
var nodemon = require('gulp-nodemon')

gulp.task('default', ['ts-ng', 'ts-server', 'watch-ts', 'server'])

gulp.task('build', ['ts-ng', 'ts-server'])

// run server + watch for js changes
gulp.task('server', function() {
  nodemon({
    script: 'wwwroot/server.js',
    ext: 'js',
    ignore: ['wwwroot/ng*', 'wwwroot/public/js*']
  })
})

// typescript angular sources
gulp.task('ts-ng', function() {
  gulp.src(['src/ng/module.js', 'src/ng/**/*.ts'], {base: 'src'})
    .pipe(sourcemaps.init())
      .pipe(ts({module: 'commonjs'}))
      .js
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./wwwroot/public/js'))
})

// typescript server sources
gulp.task('ts-server', function() {  
  gulp.src(['src/controllers/**/*.ts','src/models/**/*.ts', 'src/*.ts'],
    {base: 'src'})
    .pipe(ts({module: 'commonjs'}))
    .js
    .pipe(gulp.dest('./wwwroot'))
})

gulp.task('watch-ts', function() {  
  gulp.watch('./src/**/*.ts', ['ts-ng','ts-server'])
})