// This case study is about the cache. 
// As we are aware of fibonacci numbers - 0, 1, 1,2,3, 5, 8, 13.. (where an item is sum of previous 2 items)
// We need to add functionality to function named memoize(fib), where fib is aray of fibonacci sequence.
// if not in cache, we need to calculate the fibonacci number at nth place and then return the number after cacheing!

function memoize(fib) {
    
}
function fib(n) {
    if (n <= 2) return 1;
    else return fib(n - 1) + fib(n - 2);
}

module.exports = {memoize, fib}