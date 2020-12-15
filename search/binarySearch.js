//Binary search is a much faster form of search
//Instead of eliminating one element at a time, 
//you eliminate half of the remaining elements

//NOTE: Binary search only works on SORTED arrays
//as it's similar to divide and conquer

//********************************************************

//PSEUDOCODE

//1. Function accepts a sorted array and a value
//2. Create a left pointer and a right pointer
//at the beginning and end of the array 
//3. While the left pointer comes before the right pointer: 
//          -Create a pointer in the middle
//          -If you find value you want, return the index
//          -If val is too small, move left pointer up
//          -If value is too large, move the right pointer down
//4. If you never find value, return -1

//********************************************************

function binarySearch(arr, elem) { 
    let start = 0; 
    let end = arr.length - 1; 
    let mid = Math.floor((start + end) / 2); 

    if (sortedArr.length === 0) return -1;

    while (arr[mid] !== elem && start <= end) { 
        if (elem < arr[mid]) { 
            end = mid - 1; 
        } else { 
            start = mid + 1; 
        }
        mid = Math.floor((start + end) / 2); 
    }
    
    if (sortedArr[mid] === elem) return mid

    return -1

}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15))

//********************************************************

//BIG O

//Best - O(1)
//Average - O(log n)
//Worst - O(log n)
