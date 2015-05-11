var express = require('express');
var router = express.Router();
var path = require('path');
var mongo = require('mongodb');
var defaults = require('../defaults');

router.get('/', function(req, res, next)
{
  var absolutePath = path.join(path.join(__dirname.substring(0, __dirname.length - 6), 'views'),'tree.html');
  res.sendFile(absolutePath);
});

router.get('/api/posts/tree', function(req, res, next) 
{
  var pid = req.query.projectID;
  console.log('get tree for : ' + pid);
  mongo.connect('mongodb://localhost/tree', function (err, db)
  {
    //find the tree with the newest version for the requested project
    db.collection('tree').find({projectID:pid}).sort({version:-1}).limit(1).toArray(function(err, documents)
    {
      var tree = documents[0];
      console.log(tree);
      res.json(tree);
    });
  });
});

router.get('/api/posts/fields', function(req, res, next) 
{
  mongo.connect('mongodb://localhost/tree', function (err, db) 
  {
    db.collection('fields').find().toArray(function(err, documents) 
    {
      var fields = documents[0];
      res.json(fields);
    });
  });
});

router.get('/api/posts/projects', function(req, res, next) 
{
  mongo.connect('mongodb://localhost/tree', function (err, db) 
  {
    db.collection('projects').find().toArray(function(err, documents) 
    {
      var projects = documents[0];
      
      if(projects === undefined)
      {
        projects = defaults.PROJECTS;
      }
      
      res.json(projects);
    });
  });
});

router.post('/api/posts/tree', function(req, res)
{
  console.log('post received');
  console.log(req.body.json);
  var tree = JSON.parse(req.body.json);
  tree.version++;   //TODO: need to check the database and get the version that we should use
  delete tree._id;  //remove the _id from the tree so that MongoDB will assign a new unique id

  mongo.connect('mongodb://localhost/tree', function (err, db) 
  {
    db.collection('tree').insert(tree, function(err, inserted) { if(err) throw err; console.log('success?: ' + inserted); });
  });

  res.sendStatus(201);
});

router.post('/api/posts/fields', function(req, res)
{
  console.log('post received');
  console.log(req.body);

  mongo.connect('mongodb://localhost/tree', function (err, db)
  {
    db.collection('fields').remove();
    db.collection('fields').insert(req.body.json, function(err, inserted) { if(err) throw err; console.log('success?: ' + inserted); });
  });

  res.sendStatus(201);
});

router.post('/api/posts/addProject', function(req, res)
{
  var newProjectName = req.query.projectName;
  //TODO: check for empty project name
  //TODO: check for non-unique project name

  mongo.connect('mongodb://localhost/tree', function (err, db)
  {
    db.collection('projects').find().toArray(function(err, documents) 
    {
      //read the current project document to get the nextProjectID
      var projectList = documents[0];
      
      if(projectList === undefined)
      {
        projectList = defaults.PROJECTS;
        db.collection('projects').insert(defaults.PROJECTS);
      }
      
      //TODO: fix concurrency problem, another user could add a project between when we read nextProjectID and add the new project
      
      //insert the new project with the next project id, increment the next project id 
      db.collection('projects').update( { _id: 1 }, { $inc: { nextProjectID: 1 }, $push: { projects: {id: projectList.nextProjectID, name: newProjectName }} }, { upsert: true } );
    });
  });

  res.sendStatus(201);
});

module.exports = router;
