//Given an array, the simplest way to search for a value
//is to look at every element in the array and check if
//it's the value we want. This is linear search. 

//Methods ike indexOf(), includes(), find(), and findIndex()
//are all built-in JS methods 

//Pseudocode 
//1. The function accepts an array and a value 
//2. Loop through array and check if current element 
//is equal to the value 
//3. If yes, return the index of element. If not, return -1

//Example 1 - Linear Search
function linearSearch(arr, val){
    if(arr.length === 0) return -1; 
    
    for(let i = 0; i < arr.length;i++){
        if(arr[i] === val) return i
    }

    return -1 //the "else"
}

console.log(linearSearch([10, 15, 20, 25, 30], 15))

//********************************************************

//Big O - Linear Search

//Best - O(1)
//Average - O(n)
//Worst - O(n)
