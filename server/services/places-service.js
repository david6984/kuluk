'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var PlacesRsrc = require(__base + 'server/infrastructure/resources').place;

function getPlace(id) {
    var result;
    console.log('get place by ' + id);
    try {
    	if(id){
        	result = await (PlacesRsrc.getPlace(id));
        } else {
        	result = await (PlacesRsrc.getPlaces());
        }   
    } catch(error) {
        throw error;
    }
    return { place: result };
}

function updatePlace(place) {
    var result;
    console.log('update place by ' + place.id);
    try {
        result = await (PlacesRsrc.updatePlace(place));
    } catch(error) {
        throw error;
    }
    return { place: result };
}

function deletePlace(id) {
    var result;
    console.log('delete place by ' + id);
    try {
        result = await (PlacesRsrc.deletePlace(id));
    } catch(error) {
        throw error;
    }
    return { place: result };
}

function postPlace(place) {
    var result;
    console.log('post place');
    try {
        result = await (PlacesRsrc.addPlace(place));
    } catch(error) {
        throw error;
    }
    return { place: result };
}

module.exports.getPlace = async(getPlace);
module.exports.updatePlace = async(updatePlace);
module.exports.deletePlace = async(deletePlace);
module.exports.postPlace = async(postPlace);