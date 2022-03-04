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
            console.log(currentNode);
            currentNode = currentNode.next;
        }
    }
}
test("tests that single linked list works as expected", testSingleLinkedList);
