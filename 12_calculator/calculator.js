const add = function() {
  return arguments[0] + arguments[1];
	
};

const subtract = function() {
  return arguments[0] - arguments[1];
	
};

const sum = function(x) {
  let total = 0;
  for (let i = 0; i < x.length; i++) {
    total += x[i];
  }
  return total;
	
};

const multiply = function(x) {
  let total = 1;
  for (let i = 0; i < x.length; i++) {
    total *= x[i];
  }
  return total;

};

const power = function() {
  return Math.pow(arguments[0], arguments[1]);
	
};

const factorial = function() {
  if (arguments[0] === 0) {
    return 1;
  } else {
    let total = 1;
    for (let i = 1; i <= arguments[0]; i++) {
      total *= i;
    }
    return total;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
