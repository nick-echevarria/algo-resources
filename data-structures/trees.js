//A tree is a data structure that consists of nodes in a
//parent/child relationship

//List are linear, trees are non-linear 

//Root: top node of tree 
//Child: a node directly connected to another node
//when moving away from root
//Parent: the converse notion of a child 
//Sibling: a group of nodes with the same parent
//Leaf: node with no children 
//Edge: the connection between nodes

//Use Cases
//HTML DOM
//Network routing 
//Abstract Syntax Tree
//AI 
//OS folders 

//********************************************************

//Binary Trees
//Each node can, at most, have two children 
//Every node to left of parent is less than the parent and vice versa

//********************************************************

class Node { 
    constructor(value) { 
        this.val = value; 
        this.left = null; 
        this.right = null; 
    }
};

class BinarySearchTree { 
    constructor() { 
        this.root = null; 
    }
    //INSERT (can be coded iteratively or recursively)
    //Create a new node
    //Starting at the root
        //Check if there is a root. If not, the root now becomes that new node
        //If there is a root, check if value of new node is greater than or less than the val of the root.
            //If greater: 
                //Check to see if there is node on right
                    //If yes, move to that node and repeat the steps 
                    //If no, add that node as the right property
            //If less:
                //Check to see if there is a node to the left
                    //If there is, move to that node and repeat those steps
                    //If there is not, add that node as the left property
    insert(value) {
        var newNode = new Node(value);

        if (this.root === null) { 
            this.root = newNode; 
            return this; 
        } else { 
            var current = this.root; 

            while (true) { 
                if (value === current.value) return undefined; 
                if (value < current.value) {
                    if (current.left === null) { 
                        current.left = newNode;
                        return this; 
                    } else { 
                        //we're moving left if it's less
                        current = current.left; 
                    }
                } else if (value > current.value) { 
                    if (current.right === null) { 
                        current.right = newNode; 
                        return this; 
                    } else { 
                        current = current.right; 
                    }
                }
            }

        }
    }
    //FIND
    //Starting at the root
        //Check if there is a root. If not, we're done. 
        //If yes, check if the value of new node is value we are looking for. If so, we're done. 
        //If not, check to see if value is > or < value of the root
        //If greater
            //Check to see if there is right node
                //If there is, move to that node and repeat these steps
                //If there is not, we're done
        //If it is less
            //Check to see if there is node to the left
                //If there is, move to that node and repeat these steps 
                //If there is not, we're done searching
    find(value) { 
        if (this.root === null) return false; 
        let current = this.root; 
        var found = false; 

        while (current && !found) { 
            if (value < current.value) { 
                current = current.left; 
            } else if (value > current.value) { 
                current = current.right; 
            } else { 
                //the only option left is value is equal to current.value
                found = true; 
            }
        }
        if (!found) return false; 
        return current; 
    }
};

//********************************************************

//Big O
//Best & Average Case for Insertion + Searching => O(log n) 
//If you double the number of nodes, you only increase the number of steps of insert/find by 1


