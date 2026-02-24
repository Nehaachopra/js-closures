// Page view tracker
// We might have seen the current page we are on when opened a pdf. 
// Upon scrolling down, the page counter increments and upon scrolling up, the page counter decrements
// We need to recreate same page viewer which increments and decrements by 1.

// We need to create a function createCounter that returns following functions 
// 1. increment()
// 2. decrement()
// 3. getCount()

// Example
// const counter = createCounter();
// counter.increment();
// counter.increment();
// console.log(counter.getCount()); // 2

// Edges
// 1. count cannot be negative
// 2. count cannot be manually set! (counter.count)

export function createCounter() {
    //Your code here
    
}