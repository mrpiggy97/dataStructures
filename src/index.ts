import MyArray from "./arrays/array";
import HashTable, { Hash } from './hashes/HashTable'

let arry : MyArray<string> = new MyArray()
console.log(arry)

let myTable : HashTable<string> = new HashTable()
myTable.set("name","john")
myTable.set("name","adams")
myTable.set("county", "orange county")
let bucket : Hash<string>[] = myTable.get("county")
console.log(bucket)