const palindromes = function () {
    let string = "racecar"
    let palin = string.split("").reverse().join("");
    
    if (palin === string){
        return true;
    }
};
console.log(palindromes());

// Do not edit below this line
module.exports = palindromes;
