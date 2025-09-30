const add = function () {
  let num1 = 20;
  let num2 = 20;
  let sum = num1 + num2;
  return sum;
};
console.log(add());


const subtract = function () {
  let num1 = 30;
  let num2 = 20;
  let diff = num1 - num2;
  return diff;
};
console.log(subtract());


const sum = function () {
  const arr = [];

  let sumArr = 0;
  for (i = 0; i <= arr.length; i++) {
    sumArr += i;
  }
  return sumArr;
};

console.log(sum());


const multiply = function () {
  const arr = [1, 2, 3, 4];

  let product = 1;
  for (let num of arr) {
    product *= num;
  }
  return product;
};

console.log(multiply());


const power = function (base, exponent) {
  let pwr = base ** exponent;
  return pwr;
};
console.log(power(2, 3));

const factorial = function () {
  let num = 8;
  let fact = 1;

  for (i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
};

console.log(factorial());

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

