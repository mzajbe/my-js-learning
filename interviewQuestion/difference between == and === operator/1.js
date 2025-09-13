

42 == '42'; // true
0 == false; // true
null == undefined; // true
[] == false; // true
// Conversion of [ ] to a Number: The empty array [] is first converted to a string, which results in an empty string "". Then, the empty string "" is coerced into a number, which results in 0
// Conversion of false to a Number: The boolean false is also coerced to a number, which results in 0
// Now, the expression becomes 0 == 0, which is true.


'' == false; // true