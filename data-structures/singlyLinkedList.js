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
}

let list = new SinglyLinkedList();
list.push("Hello")
list.push("Goodbye") 

