var gulp = require('gulp')  
var ts = require('gulp-typescript')
var concat = require('gulp-concat')

gulp.task('default', ['ts', 'watch'])

gulp.task('ts-ng', function() {
  gulp.src(['src/ng/**/*.ts'], {base: 'src'})
    .pipe(ts({module: 'commonjs'}))
    .js
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./wwwroot/public/js'))
})

// Compile typescript sources
gulp.task('ts-server', function() {  
  gulp.src(['src/controllers/**/*.ts','src/models/**/*.ts', 'src/*.ts'],
    {base: 'src'})
    .pipe(ts({module: 'commonjs'}))
    .js
    .pipe(gulp.dest('./wwwroot'))
})

gulp.task('watch', function() {  
  gulp.watch('./src/**/*.ts', ['ts'])
})