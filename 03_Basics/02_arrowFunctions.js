//  Do check out my '01_this.js for better understanding'
const subtract = function(num1,num2){
    num3 = num2 - num1
    console.log(this) // lots of things inside a object
    console.log(this.num3) // answer
    console.log(num3)

}

subtract(3,7)

const multiply = (num1,num2) => {
    num3 = num2 * num1
    console.log(this) // {}
    console.log(this.num3) // undefined
    console.log(num3) // answer

    return num3;

}

multiply(3,7)

// syntax of arrow function

// --- 1. THE SIMPLE CALL ---
const sayHi = () => console.log("Hi!");
sayHi(); // Result: "Hi!"


// --- 2. PASSING ARGUMENTS ---
const square = x => x * x;
const result = square(5); // Result: 25


// --- 3. MULTIPLE ARGUMENTS ---
const add = (a, b) => a + b;
console.log(add(10, 5)); // Result: 15


// --- 4. CALLING WITH AN OBJECT (Destructuring) ---
const greet = ({ name }) => `Hello, ${name}`;
const user = { name: "Gemini", age: 2 };

// You pass the whole object, the function "unpacks" the name
console.log(greet(user)); // Result: "Hello, Gemini"


// --- 5. THE "IMMEDIATE" CALL (IIFE) ---
// If you want to define AND run a function at the same time without naming it
// a)
((name) => {
    console.log("Running immediately for " + name);
})("Node User");

// b)
const prices = [10, 20, 30];
prices.forEach(p => console.log(p * 1.1));
