"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    Get(index) {
        return this.data[index];
    }
    Push(newMember) {
        this.data[this.length] = newMember;
        this.length = this.length + 1;
    }
    Delete(index) {
        if (index >= this.length) {
            console.error("index out of bounds");
        }
        else {
            let currentIndex = 0;
            let newArray = {};
            for (let i = 0; i < this.length; i++) {
                if (i !== index) {
                    newArray[currentIndex] = this.data[i];
                    currentIndex = currentIndex + 1;
                }
            }
            this.length = this.length - 1;
            this.data = newArray;
        }
    }
    addToStart(member) {
        let newArray = {};
        let currentIndex = 1;
        newArray[0] = member;
        for (let i = 0; i < this.length; i++) {
            newArray[currentIndex] = this.data[i];
            currentIndex = currentIndex + 1;
        }
        this.data = newArray;
        this.length = this.length + 1;
    }
    removeFirst() {
        let newArray = {};
        let currentIndex = 0;
        for (let i = 1; i < this.length; i++) {
            newArray[currentIndex] = this.data[i];
            currentIndex = currentIndex + 1;
        }
        this.data = newArray;
        this.length = this.length - 1;
    }
    PrintMembers() {
        let formattedString = "";
        for (let i = 0; i < this.length; i++) {
            formattedString = formattedString + ` ${this.data[i]}`;
        }
        console.log(formattedString);
    }
}
exports.default = MyArray;
