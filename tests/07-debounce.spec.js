const {debounce} = require('../src/07-debounce');
describe("debounce", () => {
    jest.useFakeTimers();

    test("Function is called after the specified delay", () => {
        const mockFn = jest.fn();
        const debouncedFn = debounce(mockFn, 1000);
        debouncedFn();
        expect(mockFn).not.toHaveBeenCalled();
        jest.advanceTimersByTime(1000);
        expect(mockFn).toHaveBeenCalled();
    })

    test("Function is not called if debounced function is called again within the delay", () => {
        const mockFn = jest.fn();
        const debouncedFn = debounce(mockFn, 1000);
        debouncedFn();
        jest.advanceTimersByTime(500);
        debouncedFn();
        jest.advanceTimersByTime(500);
        expect(mockFn).not.toHaveBeenCalled();
        jest.advanceTimersByTime(500);
        expect(mockFn).toHaveBeenCalled();
    })
})