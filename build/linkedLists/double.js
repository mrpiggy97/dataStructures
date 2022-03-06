"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleNode = void 0;
class DoubleNode {
    constructor(DoubleNodeValue) {
        this.value = DoubleNodeValue;
        this.next = null;
        this.previous = null;
    }
}
exports.DoubleNode = DoubleNode;
class Double {
    constructor(value) {
        this.head = new DoubleNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    //introduce element to end of LinkedList
    append(value) {
        let newDoubleNode = new DoubleNode(value);
        newDoubleNode.previous = this.tail;
        this.tail.next = newDoubleNode;
        this.tail = newDoubleNode;
        this.length = this.length + 1;
    }
    //introduce element to beggining of LinkedList
    preappend(value) {
        let newDoubleNode = new DoubleNode(value);
        newDoubleNode.next = this.head;
        let previousHead = this.head;
        this.head = newDoubleNode;
        previousHead.previous = this.head;
        this.head = newDoubleNode;
        this.length = this.length + 1;
    }
    //get node with value indexValue
    getDoubleNode(indexValue) {
        let currentDoubleNode = this.head;
        if (currentDoubleNode) {
            while (currentDoubleNode.value !== indexValue) {
                let nextDoubleNode = currentDoubleNode.next;
                if (nextDoubleNode) {
                    currentDoubleNode = nextDoubleNode;
                }
                else {
                    return null;
                }
            }
        }
        else {
            return null;
        }
        return currentDoubleNode;
    }
    //introduce element after node with value previousDoubleNodeValue
    insertDoubleNodeAfter(previousDoubleNodeValue, value) {
        let newDoubleNode = new DoubleNode(value);
        let previousDoubleNode = this.getDoubleNode(previousDoubleNodeValue);
        if (previousDoubleNode) {
            let DoubleNodeToReplace = previousDoubleNode.next;
            previousDoubleNode.next = newDoubleNode;
            newDoubleNode.next = DoubleNodeToReplace;
            newDoubleNode.previous = previousDoubleNode;
            if (DoubleNodeToReplace) {
                DoubleNodeToReplace.previous = newDoubleNode;
            }
            this.length = this.length + 1;
        }
        else {
            console.error("there is no DoubleNode ");
        }
    }
    //delete element with value DoubleNodeValue
    delete(DoubleNodeValue) {
        let DoubleNodeToDelete = this.getDoubleNode(DoubleNodeValue);
        if (DoubleNodeToDelete) {
            let nextDoubleNode = DoubleNodeToDelete.next;
            let previousDoubleNode = DoubleNodeToDelete.previous;
            if (previousDoubleNode) {
                if (nextDoubleNode) {
                    previousDoubleNode.next = nextDoubleNode;
                    nextDoubleNode.previous = previousDoubleNode;
                }
                else {
                    previousDoubleNode.next = null;
                    this.tail = previousDoubleNode;
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
            console.error("there is no DoubleNode with such value");
        }
    }
}
exports.default = Double;
