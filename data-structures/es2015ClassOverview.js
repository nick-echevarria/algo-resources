// JS doesn't support OO programming, but 2015 introduced the 
// Class syntax. 

// What is a class? //
// A blueprint for creating objects with pre-defined properties 
// and methods. 

// Why do we need to learn this? 
// We'll be defining data structures as classes. 

//********************************************************

// The method to create new objects must be called constructor.
// The class keyworkd creates a constant, so you cannot redefine
// it. Watch out for the syntax as well. 

class Student { 
    constructor(firstName, lastName) { 
        this.firstName = firstName;
        this.lastName = lastName; 
    }
}

// To instantiate new objects from a class, use the new keyword. 

let firstStudent = new Student("Nick", "Echevarria"); 
let secondStudent = new Student("Giulia", "Marchini"); 

//********************************************************

// Instance Methods 



