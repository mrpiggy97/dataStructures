"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../arrays/array"));
function testArray() {
    let arry = new array_1.default();
    arry.Push("nyahallo");
    arry.Push("yahallo");
    arry.Push("bruh");
    arry.Push("damn");
    expect(arry.length).toBe(4);
    arry.Delete(0);
    expect(arry.length).toBe(3);
    arry.removeFirst();
    expect(arry.length).toBe(2);
    arry.addToStart("lirolirolirolero");
    expect(arry.length).toBe(3);
}
test("tests push delete and addToFirstMethods", testArray);
