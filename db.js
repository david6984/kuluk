//create DB


var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
// var url = "mongodb://localhost:27017/";
var url="mongodb://kulukdatabaseuser:.Kuluk28@ds139138.mlab.com:39138/heroku_p2cqk5m3"

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    addCollections(db);
});


function addCollections(db){
	// var dbase = db.db("kulukdb"); //here
	var dbase= db.db("heroku_p2cqk5m3");
	dbase.createCollection("products");
	dbase.createCollection("places");
	dbase.createCollection("users",function(err, res) {
	    if (err) throw err;
		console.log("Collection users created!");
		res.createIndex( { "usuario": 1 }, { unique: true } )
		// res.insertMany([{username:'admin',name:'admin',password:'admin'},{username:'user',name:'user',password:'user'}]);
		db.close();
	});
}
