var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
// var url = "mongodb://localhost:27017/";
var url="mongodb://kulukdatabaseuser:.Kuluk28@ds139138.mlab.com:39138/heroku_p2cqk5m3"
var async = require('asyncawait/async');
var await = require('asyncawait/await');

function getUsers() {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    var users = await(dbase.collection("users").find({}).toArray());
    db.close();
    return users;
}

function getUser(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    var user = await(dbase.collection("users").findOne({_id: new ObjectId(id)}));
    db.close();
    return user;

function getUserByUserName(username) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    var user = await(dbase.collection("users").findOne({usuario: new ObjectId(usuario)}));
    db.close();
    return user;
}


function deleteUser(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    var user = await(dbase.collection("users").deleteOne({_id: new ObjectId(id)}));
    db.close();
    return user;
}

function updateUser(user) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    var id = user._id;
    delete user._id; // no se puede enviar el ID de nuevo porque da un error de que _id es inmutable
    var user = await(dbase.collection("users").replaceOne({_id: new ObjectId(id)}, user, {upsert: true}));
    
    db.close();
    return user;
}

function addUser(user) {
    console.log('add user',user)
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    var user = await(dbase.collection("users").insertOne(user));
    db.close();
    return user;
}

module.exports = {
    getUsers: async(getUsers),
    getUsersByUserName: async(getUsersByUserName),
    getUser: async(getUser),
    deleteUser: async(deleteUser),
    updateUser: async(updateUser),
    addUser: async(addUser)
};