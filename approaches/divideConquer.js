// This pattern involves dividing a data set into
// smaller chunks then repeating a process with
// a subset of data. This pattern can tremendously
// decrease time complexity. It's at the core of many 
// more complex approaches.

// Time - O(logn)
function search(arr, val) { 

    let min = 0; 
    let max = arr.length - 1; 

    while (min <= max) {
        let middle = Math.floor((min + max) / 2); 
        let currentElement = arr[middle];

        if (currentElement < val) {
            min = middle + 1;
        } else if (currentElement > val) { 
            max = middle - 1;
        } else { 
            return middle; 
        }
    }

    return -1; 
    
}