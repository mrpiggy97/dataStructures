"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueNode = void 0;
class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
exports.QueueNode = QueueNode;
class Queue {
    constructor() {
        this.bottom = null;
        this.top = null;
        this.length = 0;
    }
    //adds element to end of queue
    enqueue(value) {
        let newNode = new QueueNode(value);
        if (this.length === 0) {
            this.bottom = newNode;
            this.top = newNode;
        }
        else {
            if (this.top) {
                this.top.next = newNode;
                this.top = newNode;
            }
        }
        this.length = this.length + 1;
    }
    //removes first element from queue
    dequeue() {
        if (this.bottom) {
            if (this.bottom.next) {
                this.bottom = this.bottom.next;
            }
            else {
                console.error("there is no nodes to make bottom");
            }
            this.length = this.length - 1;
        }
        else {
            console.error("there are no nodes to delete");
        }
    }
    //return first element inserted into Queue
    peek() {
        return this.bottom;
    }
}
exports.default = Queue;
