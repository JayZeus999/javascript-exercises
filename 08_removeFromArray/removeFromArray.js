const removeFromArray = function(num) {
    return (!(num >= 1));
};

const array = [1, 2, 2, 3, 2, 4]
const removeArg = array.filter(removeFromArray);
console.log(removeArg);
// Do not edit below this line
module.exports = removeFromArray;
