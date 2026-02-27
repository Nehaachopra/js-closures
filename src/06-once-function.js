// We want to create a function that can run only once.
// The once function should take another function as an argument and return a new function that can only be called once.
// The first time the returned function is called, it should execute the original function and return its result.
// On subsequent calls, it should return undefined without executing the original function.

// example usage:
const add = (a, b) => a + b;
const addOnce = once(add);
console.log(addOnce(2, 3)); // Output: 5
console.log(addOnce(4, 5)); // Output: undefined

function once(fn) {
    //Your code here
}

module.exports = {once}