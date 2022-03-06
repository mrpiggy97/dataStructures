import Queue from "../../queues/queue";

function TestQueue(){
    let myQueue : Queue = new Queue()
    for(let i=1; i <= 7; i++){
        myQueue.enqueue(i)
    }
    expect(myQueue.length).toBe(7)
    myQueue.dequeue()
    expect(myQueue.bottom?.value).toBe(2)
    expect(myQueue.bottom?.next?.value).toBe(3)
    expect(myQueue.length).toBe(6)
}

test("basic functionality of Queue class", TestQueue)