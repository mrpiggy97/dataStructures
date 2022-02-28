import MyArray from "./arrays/array";

let arry : MyArray = new MyArray()
arry.Push("nyahallo")
arry.Push("yahallo")
arry.Push("bruh")
arry.Push("damn")
arry.PrintMembers()
console.log(arry.length)
arry.Delete(0)
console.log(arry.length)
arry.PrintMembers()

for (let i = 0; i < arry.length; i++){
    console.log(arry.data[i])
}