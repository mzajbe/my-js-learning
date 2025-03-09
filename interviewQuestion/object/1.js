// What are the possible ways to create objects in JavaScript?

// i. Object literal syntax:
var object = {
  name: "zajbe",
  age: 24,
};

console.log(object);

console.log("\n");

// ii. Object constructor:
// var object = Object();

let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};
let carProps = {
  type: {
    value: "Volkswagen",
  },
  model: {
    value: "Golf",
  },
};

let car = Object.create(vehicle);
console.log(car);
