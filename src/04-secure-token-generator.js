// We are building a login system.
// Each user gets a token that
// 1. cannot be modified externally
// 2. can only be validated through provided function

// Goal - 
// const auth = createAuthSystem();

// const token = auth.login("neha");
// auth.validate(token); // true
// auth.validate("random"); // false

function createAuthSystem() {
    const tokens = {};
    return {
        login: (username) => {
            const name = username.toLowerCase();
            if (tokens[name]) return tokens[name];
            const token = crypto.randomUUID();
            tokens[name] = token; 
            return token;
        },
        validate: (token) => {
            if (Object.values(tokens).includes(token)) return true;
            return false;
        }
    }
}

module.exports = {createAuthSystem};