// Insertion sort is similar to selection and bubble 
// sort, but there are key distinctions and other 
//things it does better. 

// It works by gradually creating a larger left half
// which is always sorted. 

// ********************************************************

//PSEUDOCODE

// 1. Start by picking the second element in the Array
// 2. Compare the second element with the one before it. 
// Swap if necessary.
// 3. Continue to the next element and if it is in the
// incorrect order, iterate through the sorted portion
// (i.e.the left side) to place the element in its correct 
// place
// 4. Repeat until array is sorted. 

// ********************************************************

function insertSort(arr) { 
    for (var i = 1; i < arr.length; i++){ 
        var currentVal = arr[i]; 
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr; 
}

insertionSort([2, 1, 9, 76, 4])

// ********************************************************

//Big O

// Worst Case On^2