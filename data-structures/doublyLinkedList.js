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
    
}