'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var SlidesRsrc = require(__base + 'server/infrastructure/resources').slide;

function getSlider(id) {
    var result;
    console.log('get Slider by ' + id);
    try {
        if(id){
            result = await (SlidesRsrc.getSlider(id));
        } else {
            result = await (SlidesRsrc.getSliders());
        }
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { slide : result };
}


function updateSlider(slide) {
    var result;
    console.log('update slider by ' + slide.id);
    try {
        result = await (SlidesRsrc.updateSlider(slide));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return {slide: result};
}

function deleteSlider(id) {
    var result;
    console.log('delete slider by ' + id);
    try {
        result = await (SlidesRsrc.deleteSlider(id));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return {slide: result};
}

function postSlider(slide) {
    var result;
    console.log('post Slider service',slide);
    try {
        result = await (SlidesRsrc.addSlider(slide));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return {slide: result};
}

module.exports.getSlider = async(getSlider);
module.exports.updateSlider = async(updateSlider);
module.exports.deleteSlider = async(deleteSlider);
module.exports.postSlider = async(postSlider);