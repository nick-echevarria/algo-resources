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

//Shift

//PSEUDOCODE

// If there aren't any nodes, return undefined. This is our main edge case. 
// Store the current head property in a variable. 
// Set the head property to be the current head's next property. 
// Decrement the length by 1. 
// Finally, return the value of the node removed.



//********************************************************

//Unshift

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

//Get
//Retrieve a node by it's positon in the linked list 

//PSEUDOCODE
// The function should accept a value 
// If the index is less than zero or gretaer than the length of the list, return null
// Loop through the list until you reach the index and return the node at that specific index 










