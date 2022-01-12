//

function validAnagram(first, second) { 
    //check to see if length is different
    if (first.length !== second.length) { 
        return false;
    }
    //object initialized to track frequency
    const lookup = {};
    //loop over first string to populate lookup variable with data 
    for (let i = 0; i < first.length; i++) { 
        let letter = first[i]; 
        //if letter is found, add 1 to value. 
        //otherwise initialize it with value of 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1; 
    }
    //loop over second string to compare with lookup object 
    for (let i = 0; i < second.length; i++) { 
        let letter = second[i]; 
        //if unable to find letter OR letter is 0, 
        //both inputs aren't anagrams
        if (!lookup[letter]) { 
            //!lookup[letter] with a value of 0 is falsey,
            //so no need to explicitly check for 0
            return false
        } else { 
            lookup[letter] -= 1; 
        }
    }
    return true; 
}