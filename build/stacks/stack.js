"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackNode = void 0;
class StackNode {
    constructor(value) {
        this.value = value;
        this.previous = null;
    }
}
exports.StackNode = StackNode;
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        let newNode = new StackNode(value);
        if (this.length === 0) {
            this.top = newNode;
            this.top.previous = newNode;
            this.bottom = newNode;
        }
        else {
            if (this.top) {
                let previousNode = this.top;
                this.top = newNode;
                this.top.previous = previousNode;
            }
        }
        this.length = this.length + 1;
    }
    pop() {
        if (this.length === 0) {
            console.error("cannot pop last element if Stack is empty");
        }
        else {
            if (this.top) {
                if (this.top.previous) {
                    let newTopNode = this.top.previous;
                    this.top = newTopNode;
                    if (!this.top.previous) {
                        this.bottom = this.top;
                    }
                    this.length = this.length - 1;
                }
            }
            else {
                console.error("there is no top or top.previous to make the new top");
            }
        }
    }
}
exports.default = Stack;
