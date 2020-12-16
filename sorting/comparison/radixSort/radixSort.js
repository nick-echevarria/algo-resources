import './radixSortHelpers';
import { mostDigits } from './radixSortHelpers';
//Can we imporve on  O(n log n)? Yes, but not by making
//comparisons, and only in certain cases. 

//Radix sort is a special sorting algorithm that works only 
//on numbers and not by making direct comparisons between two elements. 
//Instead, it exploits the fact that information about the 
//size of a number is encoded in the number of digits. 

//********************************************************

//PSEUDOCODE

//1. Define a function that accepts a list of numbers + figure 
//   out how many digits the largest number has
//2. Loop from i = 0 up to this largest number of digits
//3. For each loop iteration: 
//   a. Create buckets for each digit (0 to 9)
//   b. Place each number in the corresponding bucket 
//   based on i
//4. Replace existing array with values in our buckets, 
//   starting with 0 and going to 9 
//5. Return list at end

//********************************************************

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; k++){ 
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++){ 
            let digit = getDigit(nums[i], k); 
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}