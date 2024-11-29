
// const createHelloWorld = function () {
// return function(){
//     return "hello world";
// };
// };

let createHelloWorld = () => { 
    return function() {
        return "Hello World";
    }
}

const f = createHelloWorld();
console.log(f());
;


// const result = createHelloWorld({},null,42);


