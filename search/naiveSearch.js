//Suppose uou want to count the number of times a
//smaller string appears in a longer string

//********************************************************

//PSEDUOCODE

//1. Define a function that takes two strings
//2. Loop over longer string
//3. Loop over the shorter string
//4. If chars do't match, break out of inner loop.
//If they do, keep going
//5. If inner loop completes and there's a match
//increment the count of matches.
//6. Return the count.

//********************************************************

function naiveSearch(long, short) {

    let matchCount = 0; 

    for (let i = 0; i < long.length; i++) { //looping over long string
        for (let j = 0; j < short.length; j++) { //looping over short string
            //if the short string's element is not the long string's 
            //element + 1, break out of loop
            if (short[j] !== long[i + j]) {
                break;
            }
            //if we find a whole match, the element's index
            //will be the same, thus we increment matchCount
            if (j === short.length - 1) {
                matchCount++;
            }
        }
    }

    return matchCount; 

}

naiveSearch("lorie loled", "lol")
