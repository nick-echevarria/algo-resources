//Define what a queue is
    //A FIFO data structure - First In First Out 
//Use Cases 
    //Background tasks 
    //Waiting for a spot in a game lobby 
    //Uploading resources 
    //Printing / Task processing 

//********************************************************

//Array Implementation 

//we can add to beginning or end using unshift/pop or shift/push because order doesn't matter,  
//but creating a class is advised if concerned with speed

//********************************************************

//Class Implementation 

class Node {
    constructor(val) {
        this.value = val; 
        this.next = null; 
    }
}

class Queue { 
    constructor() { 
        this.first = null; 
        this.last = null; 
        this.size = 0; 
    }
    //ENQUEUE Pseudocode
    //The function accepts some value 
    //Create a new node using passed value 
    //If no nodes in queue, set this node to be first + last prop of queue
    //Otherwise, set next prop on current last to be new node, 
    //then set last prop of queue to be that node 
    enqueue(val) { 
        let newNode = new Node(val);   

        if (this.size === 0) { 
            this.first = newNode; 
            this.last = newNode;
        } else { 
            this.last.next = newNode; 
            this.last = newNode; 
        }

        return ++this.size;         
    }
    //DEQUEUE Pseudocode
    //If no first, return null
    //Store first prop in a variable
    //See if first === last. If so, set first + last to be null
    //If more than 1 node, set first to be next
    //Decrement by 1
    dequeue() { 
        if (!this.first) return null; 

        let temp = this.first; 

        if (this.first === this.last) { 
            this.last = null; 
        }

        this.first = this.first.next; 
        this.size--; 

        return temp.value; 
    }
}

//********************************************************

//Big O
//Insertion + Removal O(1)
//Searching + Access (which you shouldn't be using a queue anyway) O(n)


