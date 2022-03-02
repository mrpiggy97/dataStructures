import HashTable from "../../hashes/HashTable";

function testHashTableSet(){
    let myTable : HashTable<string> = new HashTable<string>()
    myTable.set("name","fabian")
    myTable.set("name","chris")
    myTable.set("greeting","hello")
    let address : number = myTable.hashMethod("greeting")
    expect(myTable.data[address][0].value).toBe("hello")
}

function testHashTableDelete(){
    let myTable : HashTable<string> = new HashTable<string>()
    myTable.set("name","john")
    myTable.set("county", "orange county")
    myTable.deleteBucket("name")
    expect(myTable.data.length).toBe(1)
}

test("basic set elements of hashTable", testHashTableSet)
test("delete a bucket from hashTable", testHashTableDelete)