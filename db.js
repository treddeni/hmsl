var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var connection;

var serverName = 'mongodb://localhost';
var collection = 'tree';
var url = serverName + '/' + collection;

MongoClient.connect(url, function(err, database)
{
  if(err) throw err;
  exports.connection = database;
});

exports.url = url;
