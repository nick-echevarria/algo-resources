// The sliding window problem solving approach involves making a window, 
// which can be an array or number from one position to another, that either 
// increases or decreases in size depending on conditions that are triggered. 
// Using a sliding window is effective when needing to keep track of a subset 
// of data in your dataset.

//time complexity - O(N)

function maxSubarraySum(arr, num) { //takes an arr and a num
    let maxSum = 0; 
    let tempSum = 0; 

    if (arr.length < num) return null; //edge case

    for (let i = 0; i < num; i++) { //loop that sums first num elements
        maxSum += arr[i]; 
    }

    tempSum = maxSum; 

    for (let i = num; i < arr.length; i++) { 
        //sets tempSum to the result of subtracting arr[i - num] 
        //and adding arr[i]
        tempSum = tempSum - arr[i - num] + arr[i];
        //selects the greater of the two and sets it to maxSum
        maxSum = Math.max(maxSum, tempSum); 
    }

    return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)