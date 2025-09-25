const repeatString = function (string, num) {
    for (num = 0; num < 3; num++) {
        return string.splice(2, 0, "hey")
    }
};

let string = "hey"
console.log(repeatString);
// Do not edit below this line
module.exports = repeatString;
