const removeFromArray = function(num) {
    return num != 2;
};

const array = [1, 2, 3, 4]
const removeArg = array.filter(removeFromArray);
console.log(removeArg);
// Do not edit below this line
module.exports = removeFromArray;
