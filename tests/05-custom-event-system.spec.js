const {createEmitter} = require("../src/05-custom-event-system")

describe("createEmitter", () => {
    test("Event correctly registered", () => {
        const emitter = createEmitter();
        const mockListener = jest.fn();
        emitter.on("testEvent", mockListener);
        emitter.emit("testEvent", "arg1", "arg2");
        expect(mockListener).toHaveBeenCalledWith("arg1", "arg2");
    })

    test("Multiple listeners for the same event", () => {
        const emitter = createEmitter();
        const mockListener1 = jest.fn();
        const mockListener2 = jest.fn();
        emitter.on("testEvent", mockListener1);
        emitter.on("testEvent", mockListener2);
        emitter.emit("testEvent", "arg1");
        expect(mockListener1).toHaveBeenCalledWith("arg1");
        expect(mockListener2).toHaveBeenCalledWith("arg1");
    })

    test("No function triggered for unregistered event", () => {
        const emitter = createEmitter();
        const mockListener = jest.fn();
        emitter.on("testEvent", mockListener);
        emitter.emit("unregisteredEvent", "arg1");
        expect(mockListener).not.toHaveBeenCalled();
    })
})