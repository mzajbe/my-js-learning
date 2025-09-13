//hoisting

/**
 * 1.Global Execution Contex
 */


console.log("value of age is: ",age);

var age = 20;

console.log("value of age is: ",age);



// -------------------------------------------

myfun();

var myfun = function(){
    console.log("fist");
    
}

myfun();

function myfun(){
    console.log("second");
    
}

myfun();

