const sumAll = function() {
    totalout = 0;

    if (arguments.length != 2 || arguments[0] < 0 || arguments[1] < 0 || !Number.isInteger(arguments[0]) || !Number.isInteger(arguments[1])) {
        return 'ERROR';
    }
    let min = Math.min(arguments[0], arguments[1]);
    let max = Math.max(arguments[0], arguments[1]);
    for (let i = min; i <= max; i++) {
        totalout += i;
    }
    return totalout;

};

// Do not edit below this line
module.exports = sumAll;
