import swap from '../quadratic/bubbleSort.js.js'

//In order to implement merge sort, it's useful to first
//implement a function responsible for arranging elements, 
//in an array on either side of a pivot. 

//Given an array, this helper function should designate an
//element as the pivot. 

//It should then rearrange elements in the array so that
//all values less than the pivot are moved to the left of 
//the pivot, and all values greater than the pivot
//are moves to the right of the pivot. 

//NOTE: The order of elements on either side of the pivot doesn't
//matter. 

//NOTE: The helper function should do this *in place*, meaning
//it should not create a new array

//When complete, the helper should return the index of the
//pivot. 

//********************************************************

//PICKING A PIVOT

//The runtime of quickSort depends on how a pivot is selected
//Ideally, the pivot should be chosen so that it's roughly
//the median value in the data set you're sorting -- which 
//isn't easy to know since data is unsorted. 

//********************************************************

//PSEUDOCODE

//1. Define a function that takes three args: an array, a start 
//index, and an end index. These can default to 0 and arr.length-1 respectively.
//2. Grab pivot from start of array
//3. Store current pivot index in a variable, which keeps 
//track of where pivot should end up
//4. Loop through tyhe array from the start until the end.
//  a. If pivot is greater than the current element, increment
//  the pivot index variable and then swap the current element
//  with the element at the pivot index. 
//5. Swap the starting element (i.e. the pivot) with the pivot index
//6. Return pivot index

//********************************************************

function pivot(arr, start = 0, end = arr.length - 1) { 
    var pivot = arr[start]; 
    //is a counter keeping track of # of elements less than pivot
    var swapIndex = start; 
    
    for (var i = start + 1; i < arr.length; i++){ 
        if (pivot > arr[i]) { 
            swapIndex++; 
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}





