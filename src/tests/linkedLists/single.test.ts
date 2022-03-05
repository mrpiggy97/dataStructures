import Single,{Node} from "../../linkedLists/single";

function testSingleLinkedList(){
    let mySingleLinkedList : Single = new Single(1)
    expect(mySingleLinkedList.head.value).toBe(1)
    mySingleLinkedList.append(2)
    mySingleLinkedList.preappend(0)
    mySingleLinkedList.insertNodeAfter(1,3)
    expect(mySingleLinkedList.length).toBe(4)
    expect(mySingleLinkedList.head.value).toBe(0)
    let currentNode : Node | null = mySingleLinkedList.head
    if(currentNode){
        while(currentNode !== null){
            currentNode = currentNode.next
        }
    }
}

function testSingleLinkedListDelete(){
    let mySingleLinkedList : Single = new Single(1)
    for(let i = 2; i <= 7; i++){
        mySingleLinkedList.append(i)
    }
    expect(mySingleLinkedList.length).toBe(7)
    mySingleLinkedList.delete(2)
    expect(mySingleLinkedList.length).toBe(6)
    expect(mySingleLinkedList.head.next?.value).toBe(3)
    mySingleLinkedList.delete(1)
    expect(mySingleLinkedList.head.value).toBe(3)
    mySingleLinkedList.delete(5)
    let nodeToTest : Node | null = mySingleLinkedList.getNode(4)
    if(nodeToTest){
        expect(nodeToTest.next?.value).toBe(6)
    }
    mySingleLinkedList.delete(7)
    expect(mySingleLinkedList.tail.next).toBe(null)
    expect(mySingleLinkedList.tail.value).toBe(6)
    expect(mySingleLinkedList.length).toBe(3)
}

test("tests that single linked list works as expected", testSingleLinkedList)
test("delete method from Single",testSingleLinkedListDelete)