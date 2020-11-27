// Bubble Sort if an algorithm where the largest values
// "bubble" to the top.

// Not commonly used or efficient. Works in niche
// situations. 

// ********************************************************

// Bubble sort uses the idea of "swapping" elements
// depending on conditions. This happens until the 
// collection is completely sorted. 

//How does swapping work? 

//ES5
function swap(arr, idx1, idx2) { 
    let temp = arr[idx1]; 
    arr[idx1] = arr[idx2];
    arr[idx2] = temp; 
}

//ES2015
// const swap = (arr, idx1, idx2) => { 
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 
// }

//********************************************************

//PSEUDOCODE

// 1. Start looping from a variable called i 
// the end of the array towards the beginning.
// 2. Start an inner loop with a variable called j 
// from the beginning until i - 1
// 3. If arr[j] is greater than arr[j+1], swap those two values
// 4. Return the sorted array

//********************************************************

function bubbleSort(arr) { 

    for (let i = arr.length; i > 0; i--) { 
        for (let j = 0; j < i - 1; j++) { 
            if (arr[j] > arr[j + 1]) { 

                swap(arr, j, j + 1)
                
            }
        }
    }

    return arr

}

(console.log(bubbleSort([37, 45, 29, 8])))



