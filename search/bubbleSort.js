//Bubble Sort if an algorithm where the largest values
//"bubble" to the top.

//Not commonly used or efficient. Works in niche
//situations. 

//********************************************************

//Bubble sort uses the idea of "swapping" elements
//depending on conditions. This happens until the 
//collection is completely sorted. 

//How does swapping work? 

//ES5
function swap(arr, idx1, idx2) { 
    let temp = arr[idx1]; 
    arr[idx1] = arr[idx2];
    arr[idx2] = temp; 
}

//ES2015
const swap = (arr, idx1, idx2) => { 
    [arr[idx1[], arrisx2]] = [arr[idx2], arr[idx1]]; 
}



