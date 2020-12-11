//Given two lists of integers nums, and target, consider an operation where you take some 
//sublist in nums and reverse it.Return whether it's possible to turn nums into target, 
//given you can make any number of operations.

// Constraints

// 0 ≤ n ≤ 100,000 where n is the length of nums
// 0 ≤ m ≤ 100,000 where m is the length of target


class Solution {
    solve(nums, target) {
        //edge case 
        if(nums.length !== target.length) return false; 
        //see if target contains all nums
        // for(let i = 0; i < nums.length; i++){ 
        //     if(nums.includes(target[i]) && target.includes(nums[i])){ 
        //         continue; 
        //     } else { 
        //         return false;
        //     }
        // };
        //compare one array with hash
        let freq = {}; 

        nums.forEach(num => { 
            if(freq[num]){ 
                freq[num]++; 
            } else { 
                freq[num] = 1; 
            }
        })

        for(let i = 0; i < target.length; i++) { 
            if(freq[target[i]]) freq[target[i]]--;
            else return false; 
        }
        
        return true; 
    }
}