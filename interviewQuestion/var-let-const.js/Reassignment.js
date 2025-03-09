// let and const differ in that var and let allow reassigning the variable's value while const does not.


var foo = 1;
foo = 2; // This is fine.

let bar = 3;
bar = 4; // This is fine.

const baz = 5;
baz = 6; // Uncaught TypeError: Assignment to constant variable.
