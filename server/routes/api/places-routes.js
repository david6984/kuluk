'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getPlaces(request, response) {
    console.log('GET place',request.params.id);
    var result;
    try {
        result = await (service.placesService.getPlace(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
    	console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deletePlaces(request, response) {
    console.log('DELETE place');
    var result;
    try {
        result = await (service.placesService.deletePlace(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updatePlaces(request, response) {
    console.log('UPDATE place');
    var result;
    try {
        result = await (service.placesService.updatePlace(request.body.place));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postPlaces(request, response) {
    console.log('POST place');
    var result;
    try {
        result = await (service.placesService.postPlace(request.body.place));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getPlaces));
routes.get('/', async(getPlaces));
routes.delete('/:id', async(deletePlaces));
routes.put('/:id', async(updatePlaces));
routes.post('/', async(postPlaces));

module.exports = routes;