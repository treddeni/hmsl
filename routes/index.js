var express = require('express');
var router = express.Router();
var path = require('path');
var mongo = require('mongodb');

router.get('/', function(req, res, next)
{
  var absolutePath = path.join(path.join(__dirname.substring(0, __dirname.length - 6), 'views'),'tree.html');
  res.sendFile(absolutePath);
});

router.get('/api/posts/tree', function(req, res, next) 
{
  var pid = parseInt(req.query.projectID);
  
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
      console.log(fields);
      res.json(fields);
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

  mongo.connect('mongodb://localhost/tree', function (err, db) {
    console.log('mongodb connected');
    //db.collection('tree').remove();
    db.collection('tree').insert(tree, function(err, inserted) { if(err) throw err; console.log('success?: ' + inserted); });
    console.log('inserted in db');
  });

  res.send(201);
});

router.post('/api/posts/fields', function(req, res)
{
  console.log('post received');
  console.log(req.body);

  mongo.connect('mongodb://localhost/tree', function (err, db) {
    console.log('mongodb connected');
    db.collection('fields').remove();
    db.collection('fields').insert(req.body.json, function(err, inserted) { if(err) throw err; console.log('success?: ' + inserted); });
    console.log('inserted in db');
  });

  res.send(201);
});

module.exports = router;
