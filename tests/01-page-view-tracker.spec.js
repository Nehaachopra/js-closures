const { createCounter } = require("../src/01-page-view-tracker");

describe("createCounter", () => {
    test("initial count is 0", () => {
        const counter = createCounter();
        expect(counter.getCount()).toBe(0);
    })
    test("increments correclty", () => {
        const counter = createCounter();
        counter.increment();
        counter.increment();
        counter.increment();
        counter.increment();
        expect(counter.getCount()).toBe(4);
    })
    test("increments and decrements correctly", () => {
        const counter = createCounter();
        counter.increment();
        counter.increment();
        counter.decrement();
        const result = counter.getCount();
        expect(result).toBe(1);
    })
    test("count cannot be negative", () => {
        const counter = createCounter();
        counter.decrement();
        expect(counter.getCount()).toBe(0);
    }) 
    test("unaffected count upon changing manually", () => {
        const counter = createCounter();
        counter.count = 100;
        const result = counter.getCount();
        expect(result).toBe(0);
    })
    test("each counter instance maintains independent state", () => {
        const counter1 = createCounter();
        const counter2 = createCounter();

        counter1.increment();
        counter2.increment();

        counter1.increment();
        
        expect(counter1.getCount()).toBe(2);
        expect(counter2.getCount()).toBe(1);
    })
})