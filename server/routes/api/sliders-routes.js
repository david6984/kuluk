'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getSliders(request, response) {
    console.log('GET Slider');
    var result;
    try {
        result = await (service.slidersService.getSlider(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}


function deleteSlider(request, response) {
    console.log('DELETE Slider');
    var result;
    try {
        result = await (service.slidersService.deleteSlider(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateSlider(request, response) {
    console.log('UPDATE Slider');
    var result;
    try {
        result = await (service.slidersService.updateUser(request.body.slider));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postSlider(request, response) {
    console.log('POST Slider',request.body);
    var result;
    try {
        result = await (service.slidersService.postSlider(request.body.slider));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getSliders));
routes.get('/', async(getSliders));
routes.delete('/:id', async(deleteSlider));
routes.put('/:id', async(updateSlider));
routes.post('/', async(postSlider));

module.exports = routes;