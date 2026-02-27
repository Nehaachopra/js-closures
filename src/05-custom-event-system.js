// We might have seen event listeners like onclick, onChange, etc. 
// In this task, we will implement a custom event system that allows us to register event listeners and emit events with arguments.

// The createEmitter function should return an object with two methods:
// - on(eventName, listener): Registers a listener function for the specified event name.
// - emit(eventName, ...args): Emits the specified event, calling all registered listeners for that event with the provided arguments.

// example usage:
// const emitter = createEmitter();
// emitter.on("greet", (name) => {
//     console.log(`Hello, ${name}!`);
// });
// emitter.emit("greet", "Alice"); // Output: Hello, Alice!

function createEmitter() {
    const events = {};
    return {
        on: (eventName, listener) => {
            if (!events[eventName]) events[eventName] = [];
            events[eventName].push(listener);
        },
        emit: (eventName, ...args) => {
            if (!events[eventName]) return;
            for (const listener of events[eventName]) {
                listener(...args)
            }
        }
    }
}

module.exports = {createEmitter}