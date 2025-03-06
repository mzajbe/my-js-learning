for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
} 

//   var Scope: The variable i is declared with var, which has function scope (or global scope if not inside a function). This means i is shared across the entire loop.

// Closure Behavior: The setTimeout callback captures the same i variable for each iteration. By the time the callback runs (after 1 millisecond), the loop has already completed, and i has the value 3.

// output: 3 3 3

// =================================================================================================================



for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
} 

// let Scope: The variable i is declared with let, which has block scope. This means a new i is created for each iteration of the loop.

// Closure Behavior: Each setTimeout callback captures the i specific to its iteration. When the callback runs, it logs the value of i at the time it was created.

// output: 0 1 2


for(var x=0; x<3; x++){
  setTimeout(() => console.log(x), 1);
}
console.log('x= ',x); 
// here x can accessible from anywhere but if i declare it with let then it will not accessible from anywhere except loop. 


