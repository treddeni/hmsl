"use strict";
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var del = require('del');
var exampleData = require('./test/data/example-data');

var paths = { scripts: ['src/*', 'src/**/*'], styles: ['public/css/styles.less'] };

gulp.task('clean', function(cb) 
{
  return del(['public/javascripts/hms.min.js'], cb);
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
  return gulp.src(['public/css/styles.less'])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'));
});

// Rerun the task when a file changes
gulp.task('watch', ['scripts', 'styles'], function() 
{
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['styles']);
});

function seed(data)
{
  var mongo = require('mongodb');
  var database = require('./db');
  
  mongo.connect(database.url, function (err, db) 
  {
    db.collection('tree').remove({}, function() 
    { 
      db.collection('tree').insert(data);
    });
    
    db.collection('projects').remove({}, function() 
    { 
      db.collection('projects').insert(exampleData.defaultProjects); 
    });
  });  
}

function seedHeroku(data)
{
  var dbURL = 'mongodb://hms:hms@ds035162.mongolab.com:35162/hms';
  var mongo = require('mongodb');
  
  mongo.connect(dbURL, function (err, db) 
  {
    db.collection('tree').remove({}, function() 
    { 
      db.collection('tree').insert(data);
    });
    
    db.collection('projects').remove({}, function() 
    { 
      db.collection('projects').insert(exampleData.defaultProjects); 
    });
  });  
}

gulp.task('seed_large', function()
{
  seed(exampleData.largeTree);
});

gulp.task('seed_small', function()
{
  seed(exampleData.smallTree);
});

gulp.task('seed_house', function()
{
  seed(exampleData.house);
});

gulp.task('seed_heroku_house', function()
{
  seedHeroku(exampleData.house);
});