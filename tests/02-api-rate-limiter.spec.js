const {createRateLimiter} = require("../src/02-api-rate-limiter");

describe('createRateLimiter', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        jest.setSystemTime(0);
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('Allows requests within limit', () => {
        const limiter = createRateLimiter(3);
        limiter();
        limiter();
        expect(limiter()).toBe(true);
    })

    test('Return false upon exceeding limit', () => {
        const limiter = createRateLimiter(2);
        limiter();
        limiter();
        expect(limiter()).toBe(false);
    })

    test('Resets after 60 seconds', () => {
        const limiter = createRateLimiter(2);
        limiter();
        limiter();
        limiter();
        jest.advanceTimersByTime(60000);
        expect(limiter()).toBe(true);
    })
})