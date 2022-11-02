// const imprt = require('./exportModule');
// console.log(imprt.sum(5, 4));
// console.log(imprt.sub(5, 4));
// console.log(imprt.div(5, 4));
// console.log(imprt.mul(5, 4));

// console.log(imprt.name)

// or

const {sum, sub, mul, div, name} = require('./exportModule');
console.log(sum(5, 4));
console.log(sub(5, 4));
console.log(div(5, 4));
console.log(mul(5, 4));
console.log(name)