//multiple pointers employs the use of
//dual pointers. each is acted on by different
//triggers. together, they search the data
//in the array 

//this function has pointers at the beginning 
//and end of an array
function sumZero(arr) { 
    let left = 0; 
    let right = arr.length - 1;
    while (left < right) { 
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) { 
            right--;
        } else {
            left++
        }
    }
}

//this function has two pointers at the beginning
//of an array 
function countUniqueValues(arr) { 
    //this checks to see if arr is 0 before anything
    if (arr.length === 0) return 0; 
    //this is the first pointer's index
    let i = 0; 
    //p inside this for loop is the second 
    //pointer's index
    for (let p = 1; p < arr.length; j++) { 
        if (arr[i] !== arr[p]) { 
            i++; 
            arr[i] = arr[p]; 
        }
    }
    return i + 1;
}