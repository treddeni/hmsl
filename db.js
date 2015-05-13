var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var connection;

var serverName = 'mongodb://localhost';
var collection = 'tree';
var url = serverName + '/' + collection;
var url = 'mongodb://hms:hms@ds035162.mongolab.com:35162/hms';

MongoClient.connect(url, function(err, database)
{
  if(err) throw err;
  exports.connection = database;
});