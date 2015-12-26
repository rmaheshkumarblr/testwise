var MongoClient = require('mongodb').MongoClient,
	test = require('assert');
// Connection url
var url = 'mongodb://localhost:27017/testwise';
// Connect using MongoClient
// MongoClient.connect(url, function(err, db) 
// {
// 	// Use the admin database for the operation
// 	var adminDb = db.admin();
//     // List all the available databases
//     adminDb.listDatabases(function(err, dbs) 
//     {
//         test.equal(null, err);
//         test.ok(dbs.databases.length > 0);
//         db.close();
//     });
// });

MongoClient.connect(url, function(err, db) 
{
    test.equal(null, err);
    // Create the collection
    db.createCollection('test', function(err, result) 
    {
        // Retry to get the collection, should work as it's now created
        db.collection('test', {strict:true}, function(err, col3) 
        {
            test.equal(null, err);
        });

        db.createCollection('course', function(err, result) 
        {
            db.collection('course', {strict:true}, function(err, col3) 
            {
                test.equal(null, err);
            });

            db.createCollection('questions', function(err, result) 
            {
                db.collection('questions', {strict:true}, function(err, col3) 
                {
                    test.equal(null, err);
                });

                db.createCollection('answers', function(err, result) 
                {
                    db.collection('answers', {strict:true}, function(err, col3) 
                    {
                        test.equal(null, err);
                        db.close();
                    });
                });
            });
        });
    });
});