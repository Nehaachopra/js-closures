const {once} = require("../src/06-once-function");

describe("once", () => {
    test("Function is called only once", () => {
        const mockFn = jest.fn((a, b) => a + b);
        const onceFn = once(mockFn);
        expect(onceFn(2, 3)).toBe(5);
        expect(mockFn).toHaveBeenCalledTimes(1);
        expect(onceFn(4, 5)).toBe(undefined);
        expect(mockFn).toHaveBeenCalledTimes(1);
    })

    test("Function returns undefined on subsequent calls", () => {
        const mockFn = jest.fn(() => "Hello");
        const onceFn = once(mockFn);
        expect(onceFn()).toBe("Hello");
        expect(onceFn()).toBe(undefined);
        expect(onceFn()).toBe(undefined);
        expect(mockFn).toHaveBeenCalledTimes(1);
    })
})