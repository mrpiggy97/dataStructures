"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    //get element from index <index>
    Get(index) {
        return this.data[index];
    }
    //introduce element with index <this.length>
    Push(newMember) {
        this.data[this.length] = newMember;
        this.length = this.length + 1;
    }
    //delete element that comes from index <index>
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
    //add element to beggining of array
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
    //remove first element from array
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
    //print all members from array
    PrintMembers() {
        let formattedString = "";
        for (let i = 0; i < this.length; i++) {
            formattedString = formattedString + ` ${this.data[i]}`;
        }
        console.log(formattedString);
    }
}
exports.default = MyArray;
