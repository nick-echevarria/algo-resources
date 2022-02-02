//////// What is Big O? ////////

//Scale (From fastest to slowest)

//O(1) - Constant
//O(logn) 
//O(n) - Linear
//O(nlog n)
//O(n^2) - Quadratic 


// A system used to compare code, a vocabulary to describe how code performs and the trade-offs involved, a tool used 
// to help debug code, a "way to formalize fuzzy counting", allow us to talk about how the runtime of an algorithm grows
// as the inputs grow.

// Instead of using time, which is variable affected on machine used, etc., we can count the number of
// simple operations a computer needs to perform. However, we don't care too much about the number of operations, 
// but rather about the general trends. We're concerned with the order of magnitude. 

// f(n) could be linear (f(n) = n)
// f(n) could be quadratic (f(n) = n^2)
// f(n) could be constant (f(n) = 1)
// f(n) could be entirely different

//////// How do we simplify Big O expressions? ////////

//1. Constants don't matter (O(2n) -> O(n) / O(500) -> O(1) / O(13n^2) -> O(n^2))
//2. Smaller terms don't matter 
 
//Other notes: 

//Aritmentic operations are constant 
//Variable assignment is constant 
//Accessing elements in an array (by index) or object(by key) is constant 
//In a loop, complexity is runtime of loop times whatever is happening inside the loop

//////// What is space complexity? //////////

//Everything above is about time. Let's talk about space instead: the amount of memory taken up. 

//Here, we care about the space required by the algo, unless otherwise noted (i.e. auxilliary space complexity)

//Rules of thumb: 

//Most primitives are constant space
//Strings require O(n) space (where n is string length)
//Reference types are generally O(n), where n is the length (arrays) or number of keys (for objects)

//////// What's a log? ////////

//Represents the opposite of exponentiation. It answers the question "X to what power gives us Y?"


