"use strict"

// add whatever parameters you deem necessary & write doc comment

/**
 * inputs are one word and one string of letters
 * function that counts the frequency of letters in each string
 * call frequency counter on each of the two strings to create 2 maps
 * loop through frequency of letters in the word and compare to frequency in second string
 *  if letter doesnt exist return false
 *  if the frequency in the second string is less than the first, return false 
 * else return true
 */
 function createCounterFromString (str){
     let stringCounter = new Map();

     for(let letter of str){
        let count = stringCounter.get(letter) || 0;
        stringCounter.set(letter, count + 1);
     }
     console.log("this is the string counter: ", stringCounter);
    return stringCounter;
 }


function canConstructWord(string1, string2) {
    let map1 = createCounterFromString(string1);
    let map2 = createCounterFromString(string2);

    if(!string2){
        return false
    }



    for(let letter of map1.keys()){
        if(map2.get(letter) === -1){
            return false
        }
        else if(map1.get(letter) > map2.get(letter)){
            return false
        }
    }
    return true;
};
