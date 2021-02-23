// A linked list is a ordered data structure that stores any
// kind of data you'd like. It contains a head, a 
// tail, and a length property. 

// Linked lists consists of nodes and each node has a
// value and a pointer to another node or null. 

// Comparison With Arrays //

// Lists //
// Don't have indexes
// Connected via nodes with a next pointer
// Random access not allowed

// Arrays // 
// Indexed in order
// Insertion/deletion can be expensive
// Can quickly be accessed at a specific index

//********************************************************

// Piece of data = val
// Reference to next node = next 

class Node { 
    constructor(val){
        this.val = val; 
        this.next = null; 
    }
}

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

class SinglyLinkedList{ 
    constructor() { // singlylinkedlists are not initialized with any data
        this.length = 0; 
        this.head = null; 
        this.tail = null; 
    }
    push(val){ 
        // the function should accept a value
        // create a new node with val passed 
        let newNode = new Node(val); 
        // edge case: if no head (empty list), set head + tail to be newly create node
        if (!this.head) { 
            this.head = newNode; 
            this.tail = this.head; 
        // edge case: if no head (empty list), set head + tail to be newly create node
        } else { 
            this.tail.next = newNode; 
            this.tail = newNode; 
        }
        this.length++; 
        return this; 
        // increment by 1
    }
    pop() {
        //edge case
        if (!this.head) return undefined; 
        //loop through list
        var current = this.head; 
        var newTail = current; 
        //while there is a next, we move forward in this loop
        while (current.next) { 
            newTail = current; 
            current = current.next; 
        }
        //move tail to point to newTail 
        this.tail = newTail; 
        //severs connection of node 
        this.tail.next = null; 
        //change list length 
        this.length--; 
        //edge case: if length === 0 ; able to be refactored into one line 
        if (this.length === 0) { 
            this.head = null; 
            this.tail = null; 
        }
        return current; 
    }
    shift() { 
        if (!this.head) return undefined; 
        var currentHead = this.head; 
        this.head = currentHead.next; 
        this.length--; 
        if (this.length === 0) { 
            this.tail = null; 
        }
        return currentHead; 
    }
    unshift(val) {
        let newNode = new Node(val); 
        if (!this.head) {
            this.head = newNode; 
            this.tail = this.head; 
        }  
        newNode.next = this.head; 
        this.head = newNode; 
        this.length++; 
        return this; 
    }
    get(index) { 
        if (index < 0 || index >= this.length) return null; 
        let counter = 0; 
        let current = this.head; 
        while(counter !== index) { 
            current = current.next; 
            counter++; 
        }
        return current 
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) { 
            foundNode.val = val; 
            return true; 
        }
        return false; 
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false; 
        //push + unshift currently do not return booleans. Instead of
        //changing original instance methods, we can add !! to doubly-
        //negate and coerce a boolean value from functions that do not.
        if (index === this.length) return !!this.push(val); // same as multi-line conditional: executes function then returns true or faslse
        if (index === 0) return !!this.unshift(val);
        
        let newNode = new Node(val); 
        let prev = this.get(index - 1);
        let temp = prev.next; 

        prev.next = newNode; //we don't to delete the prev node
        newNode.next = temp; 
        this.length++; 
        return true; 
    }
    remove(index) { 
        if (index < 0 || index >= this.length) return undefined; 
        if (index === 0) return this.shift(); 
        if (index === this.length - 1) return this.pop(); 

        let prevNode = this.get(index - 1); 
        let removed = prevNode.next; 
        prevNode.next = removed.next; 

        return removed; 
    }
    reverse() {
        let node = this.head;
        this.head = this.tail; 
        this.tail = node; 
        let prev = null; 
        let next;

        for (let i = 0; i < this.length; i++) { 
            next = node.next; 
            node.next = prev; 
            prev = node; 
            node = next; 
        }
        
        return this;
    }
}

//********************************************************

//POP involves going through the entire list from the beginning since
//we have no backwards pointer 

//PSEUDOCODE

// If there are no nodes in the list, return undefined (mo head, if length === 0)
// Loop through the list until you reach the tail
// Set the next property of the 2nd to lasty node to be null
// Set the tail to be the 2nd to last node 
// Decrement the length of the list by 1
// Return the value of the node removed

//********************************************************

//SHIFT

//PSEUDOCODE

// If there aren't any nodes, return undefined. This is our main edge case. 
// Store the current head property in a variable. 
// Set the head property to be the current head's next property. 
// Decrement the length by 1. 
// Finally, return the value of the node removed.

//********************************************************

//UNSHIFT

//PSEUDOCODE
// The function shoulkd accept a value 
// Create a new node using the value passed to the function 
// If there is no head property on the list, set the head and tail to be newly created node
// Otherwise, set the newly created node's next property to be the current head 
// property on the list 
// Set the head property on the list to be that newly created node
// Increment the length of the list by 1 
// Return the linked list

//********************************************************

//GET retrieves a node by it's positon in the linked list 

//PSEUDOCODE
// The function should accept a value 
// If the index is less than zero or gretaer than the length of the list, return null
// Loop through the list until you reach the index and return the node at that specific index 

/********************************************************

//SET changes the value of a node based on its position in the Linked List

//PSEUDOCODE
// The function should accept a index and value
// Use get function to find the specific node
// If node is not found, return false
// If it is, set value of that node to be the value passed to the function and return true

/********************************************************

//INSERT adds a node to the Linked List at a specific position

//PSEUDOCODE
// The function should accept an index and value
// If index is less than zero or greater than the length, return false 
// If index is the same as the length. push a new node to the end of the lisst. 
// If index is 0, unshift a new node to the start of the list
// Use get function, pass in index - 1 (because we need the node before it) 
// to find the specific node 
// Set the next property on that node to be the new node 
// Set the next property omn that new node to be thge previous next
// Increment the length 
// Return true 

//********************************************************

//REMOVE removes a node from the given index

//PSEUDOCODE
// If the index is less than zero or greater than the length, return undefined
//If the index is the same as the length-1, pop
//If the index is 0, shift 
//Otherwise, using get, access the node at the index 0-1 
//Set the next property on that node to be the next of the next node
//Decrement the length 
//Return the value of the node removed 

//********************************************************

//REVERSE reverses a singly linked list in place (that is, don't make a copy)

//PSEUDOCODE
//Swap the head and the tail 
//Create variables called next and prev 
//Create a variable called node and initialize it to the head property
//Loop through the list 
//Set next to be the next property on whatver node is
//Set the next property on the node to be whatver prev is 
//Set prev to be the balue of the node variable
//Set the node varibale to the value of the next variable. 

//********************************************************

//BIG O

//Insertion O(1)(constant)
//Removal O(1) or O(n)
//Searching O(n)
//Access O(n)














