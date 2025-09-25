const removeFromArray = function(num) {
    return (!(num = 1 || num === "hey"));
};

const array = [1, 2, 2, 3, "1", 2, 4, "hey"]
const removeArg = array.filter(removeFromArray);
console.log(removeArg);
// Do not edit below this line
module.exports = removeFromArray;
