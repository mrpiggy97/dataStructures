"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = __importDefault(require("../../stacks/stack"));
function TestStack() {
    let myStack = new stack_1.default();
    for (let i = 1; i <= 7; i++) {
        myStack.push(i);
    }
    expect(myStack.length).toBe(7);
}
function TestDelete() {
    var _a, _b, _c, _d, _e, _f;
    let myStack = new stack_1.default();
    for (let i = 1; i <= 3; i++) {
        myStack.push(i);
    }
    myStack.pop();
    expect((_a = myStack.top) === null || _a === void 0 ? void 0 : _a.value).toBe(2);
    myStack.pop();
    expect((_b = myStack.top) === null || _b === void 0 ? void 0 : _b.value).toBe(1);
    expect((_c = myStack.bottom) === null || _c === void 0 ? void 0 : _c.value).toBe(1);
    expect(myStack.length).toBe(1);
    myStack.push(4);
    myStack.push(5);
    expect(myStack.length).toBe(3);
    expect((_d = myStack.top) === null || _d === void 0 ? void 0 : _d.value).toBe(5);
    expect((_f = (_e = myStack.top) === null || _e === void 0 ? void 0 : _e.previous) === null || _f === void 0 ? void 0 : _f.value).toBe(4);
}
test("basic functionality of Stack class", TestStack);
test("tests delete method of Stack class", TestDelete);
