var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var del = require('del');
var mongo = require('mongodb');
var database = require('./db');
var exampleData = require('./test/data/example-data');

var paths = { scripts: ['src/*'], styles: ['public/css/styles.less'] };

gulp.task('clean', function(cb) 
{
  del(['public/javascripts/hms.min.js'], cb);
});

//concatenate javascripts into a single javascripts, with sourcemaps, and minify
gulp.task('scripts', ['clean'], function() 
{
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('hms.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('styles', function() 
{
  gulp.src(['public/css/styles.less'])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() 
{
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['styles']);
});

gulp.task('seed_large', function()
{
  mongo.connect(database.url, function (err, db) 
  {
    db.collection('tree').remove({});
    db.collection('projects').remove({});
    db.collection('tree').insert(exampleData.largeTree);
    db.collection('projects').insert(exampleData.projects);
  });
});

gulp.task('seed_small', function()
{
  mongo.connect(database.url, function (err, db) 
  {
    db.collection('tree').remove({});
    db.collection('projects').remove({});
    db.collection('tree').insert(exampleData.smallTree);
    db.collection('projects').insert(exampleData.projects);
  });
});