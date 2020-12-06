//Like mergeSort, quickSort exploits the fact that arrays of
//0 or 1 element are always sorted.

//It works by selecting one element, called the "pivot",
//and finding the index where the pivot should end up in 
//the sorted array. 

//********************************************************

//PSEUDOCODE

//1. Call pivotHelper on array
//2. Recursively call quickSort on the left and right subarrays 
//   of that pivot point. Note that you are NOT making new 
//   subarrays while doing this. 
//NOTE: The base case is when you consider a subarray with 
//less than 2 elements

//********************************************************

function quickSort(arr, left = 0, right = arr.length - 1) { 
    //base case
    if (left < right) {
        //determine pivot point
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr, left, pivotIndex + 1)
    }
    return arr;
}

//********************************************************

//BIG O

//Best/Average - O(n log n)
//Worst (when pivot always chooses first) - O(n2)

//Space - O(log n)
