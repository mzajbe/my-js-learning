

function foo(){
    var x = 10;
    let y = 20;
    const z = 30;


    console.log(x); // 10
    console.log(y); // 20
    console.log(z); // 30
    
}

console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
console.log(z); // ReferenceError: z is not defined



// In the above code snippet, the variables x, y, and z are declared inside the function foo(). These variables are scoped to the function foo() and are not accessible outside of the function. When we try to access these variables outside of the function, we get ReferenceError because they are not defined in the global scope. This demonstrates the concept of function scope in JavaScript.


// In the following example bellow, bar is accessible outside of the if block but baz and quz are not.

if (true) {
    var bar = 1;
    let baz = 2;
    const qux = 3;
  }
  
  // var variables are accessible anywhere in the function scope.
  console.log(bar); // 1
  // let and const variables are not accessible outside of the block they were defined in.
  console.log(baz); // ReferenceError: baz is not defined
  console.log(qux); // ReferenceError: qux is not defined

// In the above code snippet, the variables bar, baz, and qux are declared inside an if block. The var variable bar is accessible outside of the block because var variables are function-scoped. However, the let variable baz and the const variable qux are block-scoped and are not accessible outside of the block they were defined in. This demonstrates the difference between function scope and block scope in JavaScript.


