const {memoize, fib} = require("../src/03-memoize-fibonacci");

describe('Memoize using Fibonacci', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    })
    test("returns correct fibonacci value", () => {
        const memorizedFib = memoize(fib);
        expect(memorizedFib(5)).toBe(5);
        expect(memorizedFib(6)).toBe(8);
    })

    test('calls original function only once for same input', () => {
        const spyFib = jest.fn(fib);
        const memorizedFib = memoize(spyFib);
        
        memorizedFib(20);
        memorizedFib(20);
        memorizedFib(20);

        expect(spyFib).toHaveBeenCalledTimes(1);
    })

    test('calls original function for new input', () => {
        const spyFib = jest.fn(fib);
        const memorizedFib = memoize(spyFib);

        memorizedFib(10);
        memorizedFib(20);

        expect(spyFib).toHaveBeenCalledTimes(2);
    })
})