var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
// var url = "mongodb://localhost:27017/";
var url="mongodb://kulukdatabaseuser:.Kuluk28@ds139138.mlab.com:39138/heroku_p2cqk5m3"
var async = require('asyncawait/async');
var await = require('asyncawait/await');

function getSliders() {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    var sliders= await(dbase.collection("sliders").find({}).toArray());
    db.close();
    return sliders;
}

function getSlider(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    var slider = await(dbase.collection("sliders").findOne({_id: new ObjectId(id)}));
    db.close();
    return slider;
}


function deleteSlider(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    try{
        var slider = await(dbase.collection("sliders").deleteOne({_id: new ObjectId(id)}));    
    }catch(e){
        console.log(e);
    }
    
    db.close();
    return slider;
}

function updateSlider(slider) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    var id = slider._id;
    delete slider._id; // no se puede enviar el ID de nuevo porque da un error de que _id es inmutable
    var slider = await(dbase.collection("sliders").replaceOne({_id: new ObjectId(id)}, slider, {upsert: true}));
    
    db.close();
    return slider;
}

function addSlider(Slider) {
    console.log('add user',slider)
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_p2cqk5m3");
    var slider = await(dbase.collection("sliders").insertOne(slider));
    db.close();
    return slider;
}

module.exports = {
    getSliders: async(getSliders),
    getSlider: async(getSlider),
    deleteSlider: async(deleteSlider),
    updateSlider: async(updateSlider),
    addSlider: async(addSlider)
};