// We need to recreate debounce function.
// The debounce function should take another function and a delay as arguments and return a new function that delays the execution of the original function until after the specified delay has passed since the last time the returned function was called.
// The returned function should also have a cancel method that can be used to cancel the delayed execution of the original function.

// example usage:
// const log = (message) => console.log(message);
// const debouncedLog = debounce(log, 1000);
// debouncedLog("Hello"); // Will log "Hello" after 1 second
// debouncedLog("World"); // Will cancel the previous log and log "World" after 1 second

function debounce(fn, delay) {
    let called;
    //Your code here
    return function (...args) {
        clearTimeout(called);
        called = setTimeout(() => fn(...args), delay);
    }
}

module.exports = {debounce}