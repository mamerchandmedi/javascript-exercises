const palindromes = function (x) {   
    // Check if the cleaned string is equal to its reverse
    xcleaned=x.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log("xcleand:", xcleaned); 
    return xcleaned === xcleaned.split('').reverse().join('');

};

// Do not edit below this line
module.exports = palindromes;
