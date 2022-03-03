"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("./arrays/array"));
const HashTable_1 = __importDefault(require("./hashes/HashTable"));
let arry = new array_1.default();
console.log(arry);
let myTable = new HashTable_1.default();
myTable.set("name", "john");
myTable.set("name", "adams");
myTable.set("county", "orange county");
let bucket = myTable.get("county");
console.log(bucket);
