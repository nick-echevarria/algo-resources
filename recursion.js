//Recursion is way of writing the solution to
//a problem.

//It uses the call stack to execute.

//Seen everywhere, from DOM traversal methods 
//like getElementById()(the DOM is a tree, 
//after all) to methods like JSON.parse. 

//Two Essential Parts to Recursive Function
//1. Base Case: the condition when the recursion 
//ends
//2. Different Input: A modified parameter(s) that 
//are then used as a parameter for the recursive call


//Example 1 - Very Simple Recursive Function

function countDown(num) { 
    if (num <= 0) { //Base Case
        console.log("All done!"); 
        return; 
    }
    console.log(num);
    num--;//To create Different Input 
    countDown(num); 
}

//Example 2 - Another Simple Resursive Structure

function sumRange() { 
    if(num === 1) return 1; 
    return num + sumRange(num - 1)
}

//A representation of the call stack after
//sumRange(3) is executed. To read, 
//work your way UP. (FILO)

// sumRange(3) -> returns 6
//      return 3 + sumRange(2) -> sumRange(2) returns 3 -> 3 + 3 = 6
//          return 2 + sumRange(1) -> sumRange (1) returns 1
//              return 1 -> returns 1

//Keep in mind: the base case's return is important!
