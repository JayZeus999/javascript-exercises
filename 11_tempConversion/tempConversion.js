const convertToCelsius = function(temp) {
  let finalTempC = (((temp - 32) * 5) / 9);
  let roundTempC = Math.round(finalTempC * 10) / 10;
  return (roundTempC);
};

const finalCTemp = convertToCelsius(32);
console.log(`${finalCTemp} is the temp in Celsius`);

const convertToFahrenheit = function(temp) {
  let finalTempF = (((temp * 9) / 5) + 32); 
  let roundTempF = Math.round(finalTempF * 10) / 10;
  return (roundTempF);
};

const finalFTemp = convertToFahrenheit(0);
console.log(`${finalFTemp} is the temp in Fahrenheit`);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
