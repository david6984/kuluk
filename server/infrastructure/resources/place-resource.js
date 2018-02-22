var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
// var url = "mongodb://localhost:27017/";
var url="mongodb://kulukdatabaseuser:.Kuluk28@ds139138.mlab.com:39138/heroku_p2cqk5m3"
var async = require('asyncawait/async');
var await = require('asyncawait/await');

function getPlaces() {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    var Places = await(dbase.collection("places").find({}).toArray());
    db.close();
    return Places;
}

function getPlace(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    var Place = await(dbase.collection("places").findOne({_id: new ObjectId(id)}));
    db.close();
    return Place;
}

function deletePlace(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    var Place = await(dbase.collection("places").deleteOne({_id: new ObjectId(id)}));
    db.close();
    return Place;
}

function updatePlace(Place) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    var id = Place._id;
    delete Place._id; // no se puede enviar el ID de nuevo porque da un error de que _id es inmutable
    var Place = await(dbase.collection("places").replaceOne({_id: new ObjectId(id)}, Place, {upsert: true}));
    db.close();
    return Place;
}

function addPlace(Place) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    var Place = await(dbase.collection("places").insertOne(Product));
    db.close();
    return Place;
}

module.exports = {
    getPlaces: async(getPlaces),
    getPlace: async(getPlace),
    deletePlace: async(deletePlace),
    updatePlace: async(updatePlace),
    addPlace: async(addPlace)
};