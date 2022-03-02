"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HashTable_1 = __importDefault(require("../../hashes/HashTable"));
function testHashTableSet() {
    let myTable = new HashTable_1.default();
    myTable.set("name", "fabian");
    myTable.set("name", "chris");
    myTable.set("greeting", "hello");
    let address = myTable.hashMethod("greeting");
    expect(myTable.data[address][0].value).toBe("hello");
}
function testHashTableDelete() {
    let myTable = new HashTable_1.default();
    myTable.set("name", "john");
    myTable.set("county", "orange county");
    myTable.deleteBucket("name");
    expect(myTable.data.length).toBe(1);
}
test("basic set elements of hashTable", testHashTableSet);
test("delete a bucket from hashTable", testHashTableDelete);
