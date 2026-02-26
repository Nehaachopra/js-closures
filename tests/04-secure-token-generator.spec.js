const {createAuthSystem} = require("../src/04-secure-token-generator");

describe("createAuthSystem", () => {
    test("login function returns a unique token for new user", () => {
        const auth = createAuthSystem();
        const token = auth.login("neha");

        expect(token).toBeDefined();
        expect(typeof token).toBe("string");
    });

    test('login function returns token assigned to existing user', () => {
        const auth = createAuthSystem();
        const token = auth.login("neha");
        const existingToken = auth.login("Neha");
        expect(existingToken).toBe(token);
    })

    test("different users get different tokens", () => {
        const auth = createAuthSystem();

        const token1 = auth.login("neha");
        const token2 = auth.login("rahul");

        expect(token1).not.toBe(token2);
    });

    test('validate function returns true only if token present in database', () => {
        const auth = createAuthSystem();
        expect(auth.validate("123")).toBe(false);
        expect(auth.validate()).toBe(false);

        const token = auth.login("neha");
        expect(auth.validate(token)).toBe(true);
    })

    test("validate rejects random string even after login", () => {
        const auth = createAuthSystem();
        auth.login("neha");

        expect(auth.validate("fake-token")).toBe(false);
    });

    test("different auth instances do not share tokens", () => {
        const auth1 = createAuthSystem();
        const auth2 = createAuthSystem();

        const token = auth1.login("neha");

        expect(auth2.validate(token)).toBe(false);
    });
})