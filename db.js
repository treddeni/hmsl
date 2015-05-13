var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

var serverName = 'mongodb://localhost';
var collection = 'tree';

var url = process.env.DB_URL;

if(url == undefined)
{
  url = serverName + '/' + collection;
}

MongoClient.connect(url, function(err, database)
{
  if(err) throw err;
  exports.connection = database;
});