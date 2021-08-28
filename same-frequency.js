"use strict";


// add whatever parameters you deem necessary
/*
-input - two positive integers
-output - true or false 
- O(n +m) time complexity
- make map of frequency of each digit in each integer 
- compare freqs, if they are all the same - return true
- else, return false
- create helper function that creates maps
*/

function createFrequencyCounter(iterable) {

    let frequencyCounter = new Map();

    for (let char of iterable) {
        let charCount = frequencyCounter.get(char) || 0;
        frequencyCounter.set(char, charCount + 1)
    }
    return frequencyCounter;
}

function sameFrequency(integer1, integer2) {
    let iterableString1 = integer1.toString();
    let iterableString2 = integer2.toString();

    if (iterableString1.length != iterableString2.length){
        return false;
    }
    
    let integer1Freqs = createFrequencyCounter(iterableString1);
    let integer2Freqs = createFrequencyCounter(iterableString2);

    for (let key of integer1Freqs.keys()) {
        if (integer1Freqs.get(key) != integer2Freqs.get(key)) {
            return false
        }
    }
    return true

}
