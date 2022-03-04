"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(nodeValue) {
        this.value = nodeValue;
        this.next = null;
    }
}
exports.Node = Node;
class Single {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length = this.length + 1;
    }
    preappend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length = this.length + 1;
    }
    getNode(indexValue) {
        let currentNode = this.head.next;
        if (currentNode) {
            while (currentNode.value !== indexValue) {
                let nextNode = currentNode.next;
                if (nextNode) {
                    currentNode = nextNode;
                }
                else {
                    return null;
                }
            }
        }
        else {
            return null;
        }
        return currentNode;
    }
    insertNodeAfter(previousNodeValue, value) {
        let newNode = new Node(value);
        let previousNode = this.getNode(previousNodeValue);
        if (previousNode) {
            let nodeToReplace = previousNode.next;
            previousNode.next = newNode;
            newNode.next = nodeToReplace;
            this.length = this.length + 1;
        }
    }
}
exports.default = Single;
