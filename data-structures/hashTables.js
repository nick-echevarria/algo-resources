//Hash tables are used to store key-value pairs.
//They are like arrays, but the keys are not ordered. 
//Unlike arrays, hash tables are fast for all the following
//operations: finding, adding, and removing values.

//Python has dictionaries (dict)
//JS has Objects and Maps (obj / new Map())
//Java, Go & Scala have Maps
//Ruby has Hashes

//In order to look up values by key, we need a way to convert keys 
//into valid array indices. A function that performs this task is called a hash function.

//********************************************************

//A hash function takes data of an arbitrary size and spits out data of a fixed size.

//What makes a good hash function?

//Fast (i.e. constant time)
//Distrubutes things uniformly and avoids clusters
//Deterministic (same input yields same output)

//********************************************************

//Simple Hash Example 

function hash(key, arrayLen) { 
    let total = 0; 
    for (let char of key) { 
        //map "a" to 1, "b" to 2, "c" to 3, etc. 
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen; 
    }
    return total; 
}

//Problems with this function: 

//Only hashes strings
//Not constant time since complexity scales with input size 
//Could be more random 

//A refined version of this function, faster and more random:

function hash(key, arrayLen) { 
    let total = 0; 
    //hash functions commonly use prime numbers to reduce collusions
    //since prime number length hash tables more uniformly spreads  
    let WEIRD_PRIME = 31; 
    //Math.min is there to cap number of loops; not a perfect solution
    for (let i = 0; i < Math.min(key.length, 100); i++) { 
        let char = key[i]; 
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen; 
    }
    return total; 
}

//********************************************************

//Collisions are inevitable no matter how large an array or great a hash function is.

//There are two strategies to handle collisions: separate chaining and linear probing: 

//With separate chaining, at each index in our array we store values using a more sophisticated data structure
//like an array or a linked list. This allows us to store multiple key-value pairs at the same index. 

//With linear probing, when we find a collision, we search through the array to find the next empty slot. 
//Unlike with separate chaining, this allows us to store a single key-value at each index. 

//********************************************************

class HashTable{
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) { 
        let total = 0; 
        let WEIRD_PRIME = 31; 
    
        for (let i = 0; i < Math.min(key.length, 100); i++) { 
            let char = key[i]; 
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length; 
        }
    return total; 
    }
    //SET accepts a key + value 
    //Hashes the key 
    //Stores the key-value pair in the hash table array via separate chaining
    set(key, value) { 
        let index = this._hash(key); 
        //checking to see if that index has something in it already
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value])
    }
    //GET accepts a key
    //Hashes the key
    //Retrieves the key-value in the hash table 
    //If key isn't found, returns undefined
    get(key) { 
        let index = this._hash(key);
        if (this.keyMap[index]) { 
            for (let i = 0; i < this.keyMap[index].length; i++){ 
                if (this.keyMap[index][i][0] === key) {
                    //return 'value' of that array
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined
    }
    //KEYS loops through hash table array and returns an array of keys 
    //in the table
    keys() {
        let keysArr = []; 

        for (let i = 0; i < this.keyMap.length; i++) { 
            if (this.keyMap[i]) { 
                //loop over subarray
                for (let j = 0; j < this.keyMap[i].length; j++){
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr; 
    }
    //VALUES loops through the hash table array and retuns and array of 
    //values in the table 
    values() {
        let valuesArr = []; 

        for (let i = 0; i < this.keyMap.length; i++) { 
            if (this.keyMap[i]) { 
                //loop over subarray
                for (let j = 0; j < this.keyMap[i].length; j++){
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr; 
    }
}

//********************************************************

//BIG O of Hash Tables 

//Insert: O(1)
//Deletion: O(1)
//Access: O(1)





