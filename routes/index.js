var express = require('express');
var router = express.Router();
var path = require('path');
var mongo = require('mongodb');

router.get('/', function(req, res, next)
{
  var absolutePath = path.join(path.join(__dirname.substring(0, __dirname.length - 6), 'views'),'tree.html');
  res.sendFile(absolutePath);
});

router.get('/api/posts/tree', function(req, res, next) {
  mongo.connect('mongodb://localhost/tree', function (err, db) {
    db.collection('tree').find().toArray(function(err, documents) {
      var tree = documents[0];
      console.log(tree);
      res.json(tree);
    });
  });
});

router.get('/api/posts/fields', function(req, res, next) {
  mongo.connect('mongodb://localhost/tree', function (err, db) {
    db.collection('fields').find().toArray(function(err, documents) {
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

  mongo.connect('mongodb://localhost/tree', function (err, db) {
    console.log('mongodb connected');
    db.collection('tree').remove();
    db.collection('tree').insert(JSON.parse(req.body.json), function(err, inserted) { if(err) throw err; console.log('success?: ' + inserted); });
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
