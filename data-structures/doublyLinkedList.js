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
    //PUSH Pseudocode 
    //Create a new node with the value passsed to the function 
    //If the head property is null, set the head and tail to be the newly created ndoe
    //If not, set the next property on the tail to be that node
    //Set the previous property on the newly created node to be the tail
    //Set the tail to be the newly created node
    //Incrememnt the length
    //Return the DLL
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
    //POP Pseudocode 
    //If there is no head, return undefined
    //Store the current tail in a variable to return later 
    //If the length is 1, set the head and tail to be null 
    //Update the tail to be the previous Node
    //Set the newTail's next to null
    //Decrement the length
    //Return the value removed 
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
    //SHIFT Pseudocode 
    //If length is 0, return undefined 
    //Store the current head property in a variable 
    //If length is one, set head + tail to null 
    //Update the head to be the next of the old head 
    //Set the head's prev property to null 
    //Set the old head's next to nill
    //Decrement the length 
    //Return old head 
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
    //UNSHIFT Pseudocode 
    //Create new node with passed in value 
    //If length is 0, set head + tail to be new node
    //Otherwise: 
    //set the prev prop on the head of the list to be the new node 
    //Set the next property on the new node to be the head prop
    //Update the head to be the new node
    unshift(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //GET Pseudocode 
    //If index is less than 0 or greater or equal to length, return null
    //If index is less than or equal to half the length of the list: 
        //Loop through list starting from head and loop towards middle
        //Return the node once it's found
    //IF index is greater than half the length of the list: 
        //Loop through list starting from tail and loop towards middle
        //Return node once found 
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        
        if (idx <= this.length / 2) {
            let count = 0; 
            let current = this.head;

            while (count !== idx) { 
                current = current.next; 
                count++; 
            }    
        } else { 
            let count = this.length - 1; 
            let current = this.tail;

            while (count !== idx) { 
                current = current.prev; 
                count--; 
            }
        }        

        return current; 
    }
    //SET Pseudocode (replacing the value of a node)
    //Create a variable which is the result of the get method at the index 
    //passed to the function
        //If the get  method returns a valid node, set the value of that 
        //node to be the value passed to the function + return true
    //Otherwise, return false
    set(idx, val) { 
        let foundNode = this.get(idx);

        if (foundNode !== null ) { 
            foundNode.val = val; 
            return true; 
        }

        return false; 
    }
    //INSERT Pseudocode 
    //If index is less than zero or greater than or equal to the length, return false 
    //If index is 0, unshift
    //If index is the same as the length, push
    //Use get method to access the index - 1
    //Set the next and prev props on the correct nodes to link everything together
    //Incrememnt length
    //Return true 
    insert(idx, val) { 
        if (idx < 0 || idx > this.length) return false; 
        if (idx === 0) return this.unshift(val); 
        if (idx === this.length) return this.push(val); 

        let newNode = newNode(val); 
        let beforeNode = this.get(idx - 1); 
        let afterNode = beforeNode.next; 

        beforeNode.next = newNode, newNode.prev = beforeNode; //pair of connections
        newNode.next = afterNode, afterNode.previous = newNode; 

        this.length++;    
        return true; 
    }
    //REMOVE Pseudocode 
    //If index is lwess than 0 or greater than or equal to the length, return undefined
    //If index is 0, shift
    //If the index is the same as the length - 1, pop
    //Use the get method to retrieve the item to be removed
    //Update the next and prev props to remove the found node from the list 
    //Set next and prev to null on the found node
    //Decrement the length
    remove(idx) { 
        if (idx < 0 || idx >= this.length) return undefined; 
        if (idx === 0) return this.shift(); 
        if (index === this.length - 1) return this.pop(); 

        let removedNode = this.get(idx); 

        removedNode.prev.next = removedNode.next, removedNode.next.prev = removedNode.prev; 
        removedNode.next = null, removedNode.prev = null; 

        this.length--
        return removedNode; 

    }
}
//********************************************************

//BIG O
//Insertion + Removal O(1) (constant)
//Searching + Access O(n) (Technically O(n/2) but still O(n)





