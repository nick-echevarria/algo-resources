import merge from './mergeSortHelper.js'

// Combination of splitting, sorting and merging actions

// Exploits the fact that arrays of 0 or 1 element are
// always sorted.

// Works by decomposing an array into smaller arrays of 0 to 
// 1 elements, then building up a newly sorted array

//********************************************************

//PSEUDOCODE

// 1. Break arrays (and subarrays) into halves using slice() 
//   recursively
// 2. Then, merge smaller sorted arrays into one sorted array
// 3. Return the newly sorted + merged array

//********************************************************

function mergeSort(arr) { 
    //we have to use mergeSort recursively, 
    //so let's start with the base case
    if (arr.length <= 1) return arr; 
    let mid = Math.floor(arr.length / 2);
    //call mergeSort on the left and right halves 
    //of the array 
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

//********************************************************

//Best/Average/Worst Time O(n log n)
//Space O(n)