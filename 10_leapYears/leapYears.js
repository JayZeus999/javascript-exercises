const leapYears = function(year) {
    if((year % 4 === 0) && (year % 100 !== 0)){
        return ("leap year")
    }else if((year % 4 === 0) && (year % 100 === 0) && (year % 400 !== 0)){
        return ("not leap year")
    }else if((year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0)){
        return ("leap year")
    }
};

const leapYr = leapYears(2004);
console.log(`${leapYr}`);
// Do not edit below this line
module.exports = leapYears;


