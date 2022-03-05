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
        let currentNode = this.head;
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
        else {
            console.error("there is no node ");
        }
    }
    getPreviousNode(node) {
        if (this.length < 1) {
            console.error("there are no elements to delete");
            return null;
        }
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.next === null) {
                return null;
            }
            else if (currentNode.next !== node && currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            else if (currentNode.next === node) {
                break;
            }
        }
        return currentNode;
    }
    delete(nodeValue) {
        let nodeToDelete = this.getNode(nodeValue);
        if (nodeToDelete) {
            let nextNode = nodeToDelete.next;
            let previousNode = this.getPreviousNode(nodeToDelete);
            if (previousNode) {
                if (nextNode) {
                    previousNode.next = nextNode;
                }
                else {
                    previousNode.next = null;
                    this.tail = previousNode;
                }
            }
            else {
                if (this.head.next) {
                    this.head = this.head.next;
                }
            }
            this.length = this.length - 1;
        }
        else {
            console.error("there is no node with such value");
        }
    }
}
exports.default = Single;
