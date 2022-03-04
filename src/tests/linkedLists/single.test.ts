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
            console.log(currentNode)
            currentNode = currentNode.next
        }
    }
}

test("tests that single linked list works as expected", testSingleLinkedList)