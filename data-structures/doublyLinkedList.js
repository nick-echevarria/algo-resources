//A doubly linked list is almost identical to it's singly linked counterpart
//except every node has another pointer to the previous node as well. 

//The drawback with a doubly linked list is that it uses more memory. However, 
//since it does, it used more flexibility. 

//********************************************************

class Node { 
    constructor(val){
        this.val = val; 
        this.next = null;
        this.prev = null;
    }
};

class DoublyLinkedList { 
    constructor() { 
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    }
    push(val) {
        let newNode = new Node(val); 
        if (this.length === 0) { 
            this.head = newNode; 
            this.tail = newNode; 
        } else { 
            this.tail.next = newNode; 
            newNode.prev = this.tail; 
            this.tail = newNode; 
        }
        this.length++; 
        return this;    
    }
    pop() { 
        if (!this.head) return undefined; //or this.length === 0
        let poppedNode = this.tail; 
        if (this.length === 1) { 
            this.head = null; 
            this.tail = null; 
        } else { 
            this.tail = poppedNode.prev; 
            this.tail.next = null; 
            poppedNode.prev = null; 
        }
        this.length--; 
        return poppedNode;
    }
    shift() {
        if (this.length === 0) return undefined; 

        let oldHead = this.head; 

        if (this.length === 1) { 
            this.head = null; 
            this.tail = null
        } else { 
            this.head = oldHead.next; 
            this.head.prev = null; 
            oldHead.next = null;
        }

        this.length--; 
        return oldHead; 
    }
}

//********************************************************

//PUSH Pseudocode 
//Create a new node with the value passsed to the function 
//If the head property is null, set the head and tail to be the newly created ndoe
//If not, set the next property on the tail to be that node
//Set the previous property on the newly created node to be the tail
//Set the tail to be the newly created node
//Incrememnt the length
//Return the DLL

//********************************************************

//POP Pseudocode 
//If there is no head, return undefined
//Store the current tail in a variable to return later 
//If the length is 1, set the head and tail to be null 
//Update the tail to be the previous Node
//Set the newTail's next to null
//Decrement the length
//Return the value removed 

//********************************************************

//SHIFT Pseudocode 
//If length is 0, return undefined 
//Store the current head property in a variable 
//If length is one, set head + tail to null 
//Update the head to be the next of the old head 
//Set the head's prev property to null 
//Set the old head's next to nill
//Decrement the length 
//Return old head 
