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
    myTable.set("county", "orange county");
    let bucket = myTable.get("county");
    expect(bucket[0].value).toBe("orange county");
}
function testHashTableDeleteBucket() {
    let myTable = new HashTable_1.default();
    myTable.set("name", "john");
    myTable.set("name", "adams");
    myTable.set("ty", "dade");
    myTable.deleteBucket(myTable.get("name"));
    expect(myTable.data.length).toBe(1);
    expect(myTable.get("ty").length).toBe(1);
}
function testHashTableDelete() {
    let myTable = new HashTable_1.default();
    myTable.set("country", "usa");
    myTable.set("country", "spain");
    myTable.set("country", "canada");
    myTable.set("greeting", "hello");
    myTable.delete("country");
    expect(myTable.data.length).toBe(1);
}
function testGetAllBucketKeys() {
    let myTable = new HashTable_1.default();
    myTable.set("car", "bmw");
    myTable.set("car", "honda");
    myTable.set("driver", "fred");
    let myKeys = myTable.getAllBucketKeys("car");
    expect(myKeys.length).toBe(2);
}
test("basic set elements of hashTable", testHashTableSet);
test("delete a bucket from hashTable", testHashTableDeleteBucket);
test("delete all keys and values from a bucket", testHashTableDelete);
test("get all keys from a bucket", testGetAllBucketKeys);
