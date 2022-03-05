"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const single_1 = __importDefault(require("../../linkedLists/single"));
function testSingleLinkedList() {
    let mySingleLinkedList = new single_1.default(1);
    expect(mySingleLinkedList.head.value).toBe(1);
    mySingleLinkedList.append(2);
    mySingleLinkedList.preappend(0);
    mySingleLinkedList.insertNodeAfter(1, 3);
    expect(mySingleLinkedList.length).toBe(4);
    expect(mySingleLinkedList.head.value).toBe(0);
    let currentNode = mySingleLinkedList.head;
    if (currentNode) {
        while (currentNode !== null) {
            currentNode = currentNode.next;
        }
    }
}
function testSingleLinkedListDelete() {
    var _a, _b;
    let mySingleLinkedList = new single_1.default(1);
    for (let i = 2; i <= 7; i++) {
        mySingleLinkedList.append(i);
    }
    expect(mySingleLinkedList.length).toBe(7);
    mySingleLinkedList.delete(2);
    expect(mySingleLinkedList.length).toBe(6);
    expect((_a = mySingleLinkedList.head.next) === null || _a === void 0 ? void 0 : _a.value).toBe(3);
    mySingleLinkedList.delete(1);
    expect(mySingleLinkedList.head.value).toBe(3);
    mySingleLinkedList.delete(5);
    let nodeToTest = mySingleLinkedList.getNode(4);
    if (nodeToTest) {
        expect((_b = nodeToTest.next) === null || _b === void 0 ? void 0 : _b.value).toBe(6);
    }
    mySingleLinkedList.delete(7);
    expect(mySingleLinkedList.tail.next).toBe(null);
    expect(mySingleLinkedList.tail.value).toBe(6);
    expect(mySingleLinkedList.length).toBe(3);
}
test("tests that single linked list works as expected", testSingleLinkedList);
test("delete method from Single", testSingleLinkedListDelete);
