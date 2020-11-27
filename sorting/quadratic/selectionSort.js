// Selection sort is similar to bubble sort, but
// instead of first placing large values into 
// sorted position, it places small values into 
// sorted position. 

// For example: 

// [5, 3, 4, 1, 2] becomes [1, 3, 4, 5, 2]

// ********************************************************

//PSUEDOCODE

// 1. Store the first eleemnt as the smallest value
// you've seen so far.
// 2. Compare this item to the next item in the
// array until you find a smaller number.
// 3. If a smaller number is found, designate that smaller number
// to be the new minimum and continue until the end of the array.
// 4. If the min is not the value(index) you began
// with, swap the values. 
// 5. Repeat this with the next element until the
// next array is sorted.

// ********************************************************

function selectionSort(arr) { 
    for (var i = 0; i < arr.length; i++){ 
        var lowest = i; 
        for (var j = i + 1; j < arr.length; j++){ 
            if (arr[j] < arr[lowest]) { 
                lowest = j; 
            }
        }
        //swap
        if (i !== lowest) {
            var temp = arr[i]; 
            arr[i] = arr[lowest]; 
            arr[lowest] = temp; 
        }        
    }
    return arr; 
}

selectionSort([34, 22, 10, 19, 17])

// ********************************************************

// BIG O

//Not terribly efficient, so On^2
