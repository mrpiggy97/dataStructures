"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = __importDefault(require("../../queues/queue"));
function TestQueue() {
    var _a, _b, _c;
    let myQueue = new queue_1.default();
    for (let i = 1; i <= 7; i++) {
        myQueue.enqueue(i);
    }
    expect(myQueue.length).toBe(7);
    myQueue.dequeue();
    expect((_a = myQueue.bottom) === null || _a === void 0 ? void 0 : _a.value).toBe(2);
    expect((_c = (_b = myQueue.bottom) === null || _b === void 0 ? void 0 : _b.next) === null || _c === void 0 ? void 0 : _c.value).toBe(3);
    expect(myQueue.length).toBe(6);
}
test("basic functionality of Queue class", TestQueue);
