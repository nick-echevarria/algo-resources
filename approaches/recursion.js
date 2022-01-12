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

//********************************************************

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

//********************************************************

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

//********************************************************

//Helper Method Recursion
//Used when we're compiling a set of data in an array, 
//for instance. With this, we define a helper function 
//inside another function. 

function collecrtOddValues(arr) { 
    //initialize array we're building
    let result = []; 

    function helper(helperInput) { 
        //edge case
        if (helperInput.length === 0) { 
            return; 
        }
        // check to see if first number in arr is odd
        if (helperInput[0] % 2 !== 0) { 
            result.push(helperInput[0])
        }
        //cuts out first element in arr 
        helper(helperInput.slice(1))
    }
    //recursive call
    helper(arr) 

    return result; 
}

//********************************************************

//Pure Recursion 

function collectOddValues(arr) { 
    //initialize array 
    let newArr = []; 
    //base case below
    if (arr.length === 0) { 
        return newArr
    }
    //if arr[0] is odd, push it into newArr
    if (arr[0] % 2 !== 0) { 
        newArr.push(arr[0]); 
    }
    //line 95 below is the heart of this purely recursive
    //approach. what it does is concat the values that match
    //into one newArr after all return values are tabulated
    newArr = newArr.concat(collectOddValues(arr.slice(1))); 
    return newArr;

}

//Calling collectOddValues would look something like this: 
//
//collectOddValues([1,2,3,4,5])
//      [1].concat(collectOddValues([2,3,4,5]))
//          [].concat(collectOddValues([3,4,5])) (this starts off as empty arr)
//              [3].concat(collectOddValues([4,5]))
//                  [].concat(collectOddValues([5]))
//                      [5].concat(collectOddValues([]))
//                            return newArr (which equals [])

//Pure Recursion Tips
//1. For array, use methods like slice, the spread operator, 
//and concat that make copies as to not mutate them
//2. Strings are immutable, so use methods like slice, 
//substr, or substring to make copies of them
//3. Use Object.assign or the spread operator to
//make copies of objects

//********************************************************

//Common Pitfalls with Recursion
//1. No base case OR base case is wrong
//2. Forgetting to return OR returning the wrong thing
//3. Stack overflow error