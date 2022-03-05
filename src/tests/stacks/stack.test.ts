import Stack from "../../stacks/stack";

function TestStack(){
    let myStack : Stack = new Stack()
    for(let i = 1; i <= 7; i++){
        myStack.push(i)
    }
    expect(myStack.length).toBe(7)
}

function TestDelete(){
    let myStack : Stack = new Stack()
    for(let i = 1; i <= 3; i++){
        myStack.push(i)
    }
    myStack.pop()
    expect(myStack.top?.value).toBe(2)
    myStack.pop()
    expect(myStack.top?.value).toBe(1)
    expect(myStack.bottom?.value).toBe(1)
    expect(myStack.length).toBe(1)
    myStack.push(4)
    myStack.push(5)
    expect(myStack.length).toBe(3)
    expect(myStack.top?.value).toBe(5)
    expect(myStack.top?.previous?.value).toBe(4)
}

test("basic functionality of Stack class", TestStack)
test("tests delete method of Stack class",TestDelete)