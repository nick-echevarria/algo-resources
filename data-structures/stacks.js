//What is a stack?
    //A LIFO data structure: the last element added to 
    //the stack will be the first element removed from the stack. Think
    //a stack of plates you start washing: you grab the top one first.
    //There's more than one way to build a stack. 
//Understand use cases for a stack
    //Managing function invocations
    //Undo/redo
    //Routing  
//Implement operations on a stack

//********************************************************

//Array Implementation 
//We can use an array and use push+pop to be efficient (as opposed to 
//using shuft + unshift where you need to re-index all elements). It's
//a heavier-handed approach since it comes with a ton of methods by itself)

//********************************************************

//Linked List Implementation

class Node { 
    constructor(value) { 
        this.value = value; 
        this.next = null; 
    }
}

class Stack {
    constructor() { 
        this.first = null; 
        this.last = null; 
        this.size = 0; 
    }
    //Push Pseudocode
    //The function should accept a value 
    //Create a new node with that value 
    //If there are no nodes in stack, set first + last prop to be new node
    //If there is at least one node, create a variable that stores the current first prop on the stack
    //Reset the first prop to be the newly create node
    //Set the next prop on the node to be the previously created variable. 
    //Increment size of stack by 1 
    push(val) { 
        let newNode = new Node(val); 

        if (this.size === 0) {
            this.first = newNode; 
            this.last = newNode; 
        } else {
            let temp = this.first; 
            this.first = newNode; 
            this.first.next = temp; 
        }

        return ++this.size; 
    }
    //Pop Pseudocode
    //If there are no nodes in stack, return null
    //Create a temp variable to store first prop on stack
    //If only one node, set first+last prop to null
    //If there is more than one node, set the first prop to be the next prop on the current first 
    //Decrement size by 1
    //Return the value of the node removed
    pop() { 
        if (this.size === 0) return null; 

        let temp = this.first; 
        
        if (this.first === this.last) { 
            this.last = null;
        }

        this.first = this.first.next; 
        this.size--; 
        
        return temp.value 
    }
}

//********************************************************

//Big O 
//Insertion + Removal O(1) (constant) 
//Searching + Access O(n)


