// Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed.

// 1. Variable Hoisting
// ````````````````````````````````````````````````````````````````````````

// a. var Hoisting

console.log(x); // undefined
var x = 5;
console.log(x); // 5

// b. let and const Hoisting
// let and const: These variables are also hoisted but not initialized until their actual declaration line.

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // 10

// let y is hoisted, but accessing it before the declaration results in a ReferenceError because it is in the temporal dead zone.The temporal dead zone (TDZ) refers to the period of time during which a variable is in a "hoisted" state but has not yet been initialized.

// 2. Function Hoisting
// ````````````````````````````````````````````````````````````````````````

// a. Function Declarations
// Function declarations are fully hoisted, meaning both the function name and its implementation are moved to the top of the scope.


foo(); // "Hello, World!"
function foo() {
  console.log("Hello, World!");
}

// b. Function Expressions
// Function expressions, whether using var, let, or const, are not fully hoisted. Only the variable declaration is hoisted, not the function assignment.

bar(); // TypeError: bar is not a function
var bar = function() {
    console.log("Hello, World!");
};


// 3. Class Hoisting
// Class declarations are hoisted, but they are not initialized until the declaration is encountered. This means you cannot use a class before it is declared.

const obj = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization
class MyClass {}


// 4. Hoisting in Different Scopes
// a. Global Scope
// In the global scope, variables and functions are hoisted to the top of the global context.

console.log(globalVar); // undefined
var globalVar = "I'm global";

// b. Function Scope
// Inside a function, variables and functions are hoisted to the top of the function scope.

function test() {
    console.log(localVar); // undefined
    var localVar = "I'm local";
}
test();

// c. Block Scope

// Variables declared with let and const are hoisted to the top of the block scope, but they are not initialized until the declaration is encountered.

if (true) {
    console.log(blockVar); // ReferenceError: Cannot access 'blockVar' before initialization
    let blockVar = "I'm in a block";
}


// 5. Hoisting with var in Loops
// When var is used in a loop, the variable is hoisted to the top of the function or global scope, not the block scope.

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3
    }, 100);
}
// The variable i is hoisted to the top of the function or global scope, so all iterations of the loop share the same i.


// 6. Hoisting with let in Loops
// When let is used in a loop, the variable is hoisted to the top of the block scope, creating a new i for each iteration.

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 0, 1, 2
    }, 100);
}

// Each iteration of the loop has its own i, so the setTimeout callback captures the correct value of i.

// 7. Hoisting with const in Loops
// const behaves similarly to let in loops, but it cannot be reassigned.
for (const i = 0; i < 3; i++) { // TypeError: Assignment to constant variable.
    console.log(i);
}
// const cannot be reassigned, so using it in a loop like this will result in an error.


// 8. Hoisting with Arrow Functions
// Arrow functions are not hoisted in the same way as function declarations. They behave like function expressions.
arrowFunc(); // TypeError: arrowFunc is not a function
var arrowFunc = () => {
    console.log("I'm an arrow function");
};

// 9. Hoisting with import Statements
// import statements are hoisted to the top of the module, but they are executed in the order they appear in the code.

console.log(myModule); // ReferenceError: Cannot access 'myModule' before initialization
import myModule from './myModule.js';
// import statements are hoisted, but they are not accessible until the module is fully loaded.

// 10. Hoisting with export Statements
// export statements are not hoisted. They must be at the top level of the module and cannot be inside blocks or functions.

// export const myVar = "I'm exported"; // This is valid
// if (true) {
//     export const myVar = "I'm exported"; // SyntaxError: Unexpected token 'export'
// }
// export statements must be at the top level of the module and cannot be conditionally executed.



// Summary
// var: Declarations are hoisted and initialized to undefined.

// let and const: Declarations are hoisted but not initialized (temporal dead zone).

// Function Declarations: Fully hoisted, including the function body.

// Function Expressions: Only the variable declaration is hoisted, not the function assignment.

// Classes: Hoisted but not initialized until the declaration is encountered.

// Arrow Functions: Behave like function expressions, only the variable declaration is hoisted.

// import and export: import statements are hoisted, but export statements must be at the top level.

