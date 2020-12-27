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
// They provide functionality to a single instance of a 
// student, in this case. For instance, a new Array has the 
// .push() available to it.

class Student { 
    constructor(firstName, lastName) { 
        this.firstName = firstName;
        this.lastName = lastName; 
        this.tardies = 0; 
        this.scores = []; 
    }
    fullName() { 
        return `Your full name is ${this.firstName} ${this.lastName}`; 
    }
    markLate() { 
        this.tardies += 1; 
        if (this.tardies >= 3) { 
            return "You're expelled!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`
    }
    addScore(score) { 
        this.scores.push(score); 
        return this.scores; 
    }
    calculateAverage() { 
        let sum = this.scores.reduce(function (a, b) { return a + b }); 
        return sum / this.scores.length; 
    }
}

// Above, you'll see the fullName() and markLate() instance 
// methods available to every instance of Student. These ensure
// that developers don't directly amend provided data. 






