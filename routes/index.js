var express = require('express');
var router = express.Router();
var path = require('path');
//var defaults = require('../defaults');
var db = require('../db');

router.get('/', function(req, res, next)
{
  var absolutePath = path.join(path.join(__dirname.substring(0, __dirname.length - 6), 'views'),'tree.html');
  res.sendFile(absolutePath);
});

router.get('/api/versions', function(req, res, next) 
{
  var pid = parseInt(req.query.projectID);

  //find the tree with the newest version for the requested project
  db.connection.collection('tree').find({projectID:pid}).sort({version:-1}).toArray(function(err, documents)
  {
    if(err) throw err;
    
    var versions = [];
    documents.forEach(function(document){ versions.push({ 'version': document.version }); });
    
    res.json(JSON.stringify({ 'versions': versions }));
  });
});

router.get('/api/version', function(req, res, next) 
{
  var pid = parseInt(req.query.projectID);
  var v = parseInt(req.query.version);

  //find the tree with the newest version for the requested project
  db.connection.collection('tree').find({projectID:pid, version:v}).sort({version:-1}).limit(1).toArray(function(err, documents)
  {
    if(err) throw err;
    var tree = documents[0];
    //TODO: handle case where tree is undefined/null
    res.json(tree);
  });
});

router.get('/api/tree', function(req, res, next) 
{
  var pid = parseInt(req.query.projectID);

  //find the tree with the newest version for the requested project
  db.connection.collection('tree').find({projectID:pid}).sort({version:-1}).limit(1).toArray(function(err, documents)
  {
    if(err) throw err;
    var tree = documents[0];
    //TODO: handle case where tree is undefined/null
    res.json(tree);
  });
});

router.get('/api/projects', function(req, res, next) 
{
  db.connection.collection('projects').find().toArray(function(err, documents) 
  {
    if(err) throw err;
    var projects = documents[0];
    
    // if(projects === undefined)
    // {
    //   projects = defaults.PROJECTS;
    // }
    
    res.json(projects);
  });
});

router.post('/api/tree', function(req, res)
{
  var newTree = JSON.parse(req.body.json);
 
  //find the tree with the newest version for the requested project
  db.connection.collection('tree').find({projectID:newTree.projectID}).sort({version:-1}).limit(1).toArray(function(err, documents)
  {
    if(err) throw err;
    var headTree = documents[0];
    //TODO: handle case where tree is undefined/null
    if(headTree) 
    { 
      newTree.version = headTree.version + 1; 
    }
    else if(newTree.version != 1) 
    {  
      //TODO: handle case where tree is undefined/null and we aren't creating a new project
    }
    
    delete newTree._id;  //remove the _id from the tree so that MongoDB will assign a new unique id
  
    db.connection.collection('tree').insert(newTree, function(err, inserted) 
    { 
      if(err) throw err;    //TODO: handle error
      res.sendStatus(201);
    });
  });
});

router.post('/api/addProject', function(req, res)
{
  var newProjectName = req.query.projectName;
  //TODO: check for empty project name
  //TODO: check for non-unique project name

  db.connection.collection('projects').find().toArray(function(err, documents) 
  {
    if(err) throw err;    //TODO: handle error
    
    //read the current project document to get the nextProjectID
    var projectList = documents[0];
    
    // if(projectList === undefined)
    // {
    //   projectList = defaults.PROJECTS;
    //   db.connection.collection('projects').insert(defaults.PROJECTS);       //TODO: handle db error
    // }
    
    //TODO: fix concurrency problem, another user could add a project between when we read nextProjectID and add the new project
    
    //insert the new project with the next project id, increment the next project id 
    db.connection.collection('projects').update( { _id: 1 }, { $inc: { nextProjectID: 1 }, $push: { projects: {id: projectList.nextProjectID, name: newProjectName }} }, { upsert: true } );      //TODO: handle db error
    res.sendStatus(201);
  });
});

module.exports = router;