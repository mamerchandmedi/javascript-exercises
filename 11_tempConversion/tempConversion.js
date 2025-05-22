const convertToCelsius = function( ) {
  x=arguments[0];
  return Math.round((x-32)*5/9*10 )/10;
  
};

const convertToFahrenheit = function( ) {
  x=arguments[0];
  return Math.round(10*(x*9/5+32) )/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
