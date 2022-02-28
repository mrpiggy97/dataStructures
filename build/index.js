"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("./arrays/array"));
let arry = new array_1.default();
arry.Push("nyahallo");
arry.Push("yahallo");
arry.Push("bruh");
arry.Push("damn");
arry.PrintMembers();
console.log(arry.length);
arry.Delete(0);
console.log(arry.length);
arry.PrintMembers();
for (let i = 0; i < arry.length; i++) {
    console.log(arry.data[i]);
}
