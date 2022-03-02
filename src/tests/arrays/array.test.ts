import MyArray from "../../arrays/array";

function testArray(){
    let arry : MyArray<string> = new MyArray<string>()
    arry.Push("nyahallo")
    arry.Push("yahallo")
    arry.Push("bruh")
    arry.Push("damn")
    expect(arry.length).toBe(4)
    arry.Delete(0)
    expect(arry.length).toBe(3)

    arry.removeFirst()
    expect(arry.length).toBe(2)
    arry.addToStart("lirolirolirolero")
    expect(arry.length).toBe(3)
}

test("tests push delete and addToFirstMethods",testArray)