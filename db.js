var mongo = require('mongodb');
var db;

mongo.connect('mongodb://localhost/tree', function(err, database) { db = database; console.log('mongodb connected'); });

module.exports = db;