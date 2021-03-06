// In order to implement merge sort, it's useful to have a 
// function for merging sorted arrays into a larger, sorted 
// array. 

// The function should run in O(n + m) time and O(n+m) space 
// and should not modify the parameters passed to it. 

//********************************************************

//PSUEDOCODE

// 1. Create an empty array and take a look at the smallest values 
// in both arrays
// 2. While i/j have not hit the end of their respective arrays:

//      a. If the value in the first array is smaller than 
//      the value in the second array, push the value in the first 
//      array into our results and move on to the next value in the
//      first array

//      b. If the value in the first array is larger than 
//      the value in the second array, push the value in the second 
//      array into our results and move on to the next value in the
//      second array

//      c. Once we exhaust one array, push in all remaining
//      values from the other array

//********************************************************

export function merge(arr1, arr2){ 
    let results = []; 
    let i = 0; 
    let j = 0; 
    while (i < arr1.length && j < arr2.length) { 
        if (arr2[j] > arr1[i]) {
            results.push[arr1[i]];
            i++;
        } else {
            results.push(arr2[j]);
            j++; 
        }
    }
    while (i < arr1.length) { 
        results.push(arr1[i]); 
        i++
    }
    while (j < arr2.length) { 
        results.push(arr2[j]); 
        j++;
    }
    return results; 
}

