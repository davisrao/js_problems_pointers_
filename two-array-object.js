"use strict";
// add whatever parameters you deem necessary

/**
 * inputs: two arrays: first is keys and second is values
 * outputs: object that is the keys and values
 * constraints: if there are not enought vlaues, rest of keys will be null.
 * if not enough keys, ignore rest of values.
 * 
 * create an empty object at beginning of function
 * loop through the array of keys and match 1:1 with the array of values
 * return the object
 */


function twoArrayObject(keys, values) {
    let resultObj = {};
    // can we be more specific on name here? 

    for (let i = 0; i < keys.length; i++) {
        // could do ternary or OR evaluator here to clean up
        
        if (values[i] === undefined) {
            resultObj[keys[i]] = null;
        }
        else {
            resultObj[keys[i]] = values[i];
        }
    }
    return resultObj;
}
