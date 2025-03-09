// Redeclaration
// Redeclaring a variable with var will not throw an error, but let and const will.


var foo = 1;
var foo = 2;
console.log(foo); // 2

let baz = 3;
let baz = 4; // Uncaught SyntaxError: Identifier 'baz' has already been declared
