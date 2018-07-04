'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var SlidersRsrc = require(__base + 'server/infrastructure/resources').slider;

function getSlider(id) {
    var result;
    console.log('get Slider by ' + id);
    try {
        if(id){
            result = await (SlidersRsrc.getSlider(id));
        } else {
            result = await (SlidersRsrc.getSliders());
        }
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { slider : result };
}


function updateSlider(slider) {
    var result;
    console.log('update slider by ' + slider.id);
    try {
        result = await (SlidersRsrc.updateSlider(slider));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return {slider: result};
}

function deleteSlider(id) {
    var result;
    console.log('delete slider by ' + id);
    try {
        result = await (SlidersRsrc.deleteSlider(id));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return {slider: result};
}

function postSlider(slider) {
    var result;
    console.log('post Slider service',slider);
    try {
        result = await (SlidersRsrc.addSlider(slider));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return {slider: result};
}

module.exports.getSlider = async(getSlider);
module.exports.updateSlider = async(updateSlider);
module.exports.deleteSlider = async(deleteSlider);
module.exports.postSlider = async(postSlider);