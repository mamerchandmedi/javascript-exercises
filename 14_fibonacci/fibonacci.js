const fibonacci = function(nth_fibonacci,memo={}) {
    nth_fibonacci= parseInt(nth_fibonacci);
    if (nth_fibonacci < 0) return "OOPS";
    if (nth_fibonacci === 0) return 0;
    if (nth_fibonacci === 1) return 1;
    // Check if the result is already in the memo
    if (memo[nth_fibonacci]) return memo[nth_fibonacci];

    // Calculate and store the result in the memo
    memo[nth_fibonacci] = fibonacci(nth_fibonacci - 1, memo) + fibonacci(nth_fibonacci - 2, memo);
    return memo[nth_fibonacci];

};

// Do not edit below this line
module.exports = fibonacci;
