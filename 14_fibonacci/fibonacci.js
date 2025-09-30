const fibonacci = function(num) {

    let a = 1;
    let b = 1;

    for (i = 2; i < num; i++){
        let tempNum = a + b;

        a = b;
        b = tempNum;
    }
    return b;
};

console.log(fibonacci(4)); // returns the 4th member of the series: 3  (1, 1, 2, 3)
console.log(fibonacci(6)); // returns 8

// Do not edit below this line
module.exports = fibonacci;
