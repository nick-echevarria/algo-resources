//return the digit in num at the given place(i) value
export function getDigit(num, i) { 
    return Math.floor(Math.abs(num) / Math.power(10, i)) % 10; 
}
//returns number of digits in num
export function digitCount(num){ 
    if (num === 0) return 1; 
    //Math.log10: "10 to what power gives us num?"
    return Math.floor(Math.log10(Math.abs(num)));
}
//given an array of numbers, returns the number of digits 
//in the largest numbers in the list
export function mostDigits(nums) { 
    let maxDigits = 0; 
    for (let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCoun(nums[i]));
    }
    return maxDigits; 
}

