const repeatString = function (string, num) {
    if (num < 0) {
        return Error;
    }
    let result = " ";
    for (i = 0; i < num; i++) {
        result += string;
    }
    return(result);
};

console.log(repeatString("hello", 10));
// Do not edit below this line
module.exports = repeatString;
