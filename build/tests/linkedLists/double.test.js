"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const double_1 = __importDefault(require("../../linkedLists/double"));
function TestDouble() {
    var _a, _b, _c, _d;
    let myDouble = new double_1.default(1);
    myDouble.append(2);
    expect(myDouble.head.value).toBe(1);
    expect((_a = myDouble.head.next) === null || _a === void 0 ? void 0 : _a.value).toBe(2);
    expect((_c = (_b = myDouble.head.next) === null || _b === void 0 ? void 0 : _b.previous) === null || _c === void 0 ? void 0 : _c.value).toBe(1);
    expect(myDouble.length).toBe(2);
    myDouble.append(3);
    expect((_d = myDouble.tail.previous) === null || _d === void 0 ? void 0 : _d.value).toBe(2);
    expect(myDouble.tail.value).toBe(3);
    expect(myDouble.tail.next).toBe(null);
    expect(myDouble.length).toBe(3);
}
function TestPreAppend() {
    var _a, _b, _c, _d;
    let myDouble = new double_1.default(1);
    myDouble.append(2);
    myDouble.preappend(3);
    expect(myDouble.length).toBe(3);
    expect(myDouble.head.value).toBe(3);
    expect((_b = (_a = myDouble.head.next) === null || _a === void 0 ? void 0 : _a.previous) === null || _b === void 0 ? void 0 : _b.value).toBe(3);
    expect((_d = (_c = myDouble.head.next) === null || _c === void 0 ? void 0 : _c.next) === null || _d === void 0 ? void 0 : _d.value).toBe(2);
}
function TestInsertAfter() {
    var _a;
    let myDouble = new double_1.default(1);
    for (let i = 2; i <= 7; i++) {
        myDouble.append(i);
    }
    myDouble.insertDoubleNodeAfter(3, 8);
    let nodeToTest = myDouble.getDoubleNode(3);
    if (nodeToTest) {
        expect((_a = nodeToTest.next) === null || _a === void 0 ? void 0 : _a.value).toBe(8);
    }
    expect(myDouble.length).toBe(8);
}
function TestDelete() {
    var _a, _b;
    let myDouble = new double_1.default(1);
    for (let i = 2; i <= 7; i++) {
        myDouble.append(i);
    }
    myDouble.delete(4);
    let node1 = myDouble.getDoubleNode(3);
    let node2 = myDouble.getDoubleNode(5);
    expect(myDouble.length).toBe(6);
    if (node1 && node2) {
        expect((_a = node1.next) === null || _a === void 0 ? void 0 : _a.value).toBe(node2.value);
        expect((_b = node2.previous) === null || _b === void 0 ? void 0 : _b.value).toBe(node1.value);
    }
}
test("tests create and append functionality for Double linked list", TestDouble);
test("preappend method for Double linked list", TestPreAppend);
test("insertNodeAfter method for Double linked list", TestInsertAfter);
test("delete method for Double linked list", TestDelete);
