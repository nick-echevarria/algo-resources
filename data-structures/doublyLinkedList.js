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

