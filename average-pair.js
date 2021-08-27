"use strict"

/*
 - inputs: sorted array and target value
 - output: true or false
 - make pointers that are assigned to the outside elements of the array
 - check if average of pointers is equal to target value 
    - if equal, return true
    - if higher, move right pointer to the left and recheck average
    - if lower, move left pointer to the right and recheck average
    - if pointers are adjacent or equal elements, return false
 * make sure the average of pointers evaluates to a float not an integer
*/
// add whatever parameters you deem necessary



function averagePair(arr1, targetValue) {

    let leftPointer = 0;
    let rightPointer = arr1.length - 1;

    while (leftPointer < rightPointer){
        let pointerAvg = (arr1[leftPointer] + arr1[rightPointer])/2;
        if (pointerAvg < targetValue){
            leftPointer += 1;
        }
        else if (pointerAvg > targetValue){
            rightPointer -= 1;
        }
        else{
            return true;
        }
    }
return false

}
