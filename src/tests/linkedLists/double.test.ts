import Double,{DoubleNode} from "../../linkedLists/double";

function TestDouble(){
    let myDouble : Double = new Double(1)
    myDouble.append(2)
    expect(myDouble.head.value).toBe(1)
    expect(myDouble.head.next?.value).toBe(2)
    expect(myDouble.head.next?.previous?.value).toBe(1)
    expect(myDouble.length).toBe(2)
    myDouble.append(3)
    expect(myDouble.tail.previous?.value).toBe(2)
    expect(myDouble.tail.value).toBe(3)
    expect(myDouble.tail.next).toBe(null)
    expect(myDouble.length).toBe(3)
}

function TestPreAppend(){
    let myDouble : Double = new Double(1)
    myDouble.append(2)
    myDouble.preappend(3)
    expect(myDouble.length).toBe(3)
    expect(myDouble.head.value).toBe(3)
    expect(myDouble.head.next?.previous?.value).toBe(3)
    expect(myDouble.head.next?.next?.value).toBe(2)
}

function TestInsertAfter(){
    let myDouble : Double = new Double(1)
    for(let i = 2; i <= 7; i++){
        myDouble.append(i)
    }
    myDouble.insertDoubleNodeAfter(3,8)
    let nodeToTest : DoubleNode | null = myDouble.getDoubleNode(3)
    if (nodeToTest){
        expect(nodeToTest.next?.value).toBe(8)
    }
    expect(myDouble.length).toBe(8)
}

function TestDelete(){
    let myDouble : Double = new Double(1)
    for(let i = 2; i <= 7; i++){
        myDouble.append(i)
    }

    myDouble.delete(4)
    let node1 : DoubleNode | null = myDouble.getDoubleNode(3)
    let  node2 : DoubleNode | null = myDouble.getDoubleNode(5)
    expect(myDouble.length).toBe(6)
    if(node1 && node2){
        expect(node1.next?.value).toBe(node2.value)
        expect(node2.previous?.value).toBe(node1.value)
    }
}

test("tests create and append functionality for Double linked list", TestDouble)
test("preappend method for Double linked list",TestPreAppend)
test("insertNodeAfter method for Double linked list",TestInsertAfter)
test("delete method for Double linked list",TestDelete)