class QueueNode{
    public next : QueueNode | null
    public value : number
    constructor(value : number){
        this.value = value
        this.next = null
    }
}

export default class Queue{
    public top : QueueNode | null
    public bottom : QueueNode | null
    public length : number
    constructor(){
        this.bottom = null
        this.top = null
        this.length = 0
    }
    //adds element to end of queue
    public enqueue(value : number){
        let newNode : QueueNode = new QueueNode(value)
        if(this.length === 0){
            this.bottom = newNode
            this.top = newNode
        }else{
            if(this.top){
                this.top.next = newNode
                this.top = newNode
            }
        }
        this.length = this.length + 1
    }
    //removes first element from queue
    public dequeue(){
        if(this.bottom){
            if(this.bottom.next){
                this.bottom = this.bottom.next
            }else{
                console.error("there is no nodes to make bottom")
            }
            this.length = this.length - 1
        }else{
            console.error("there are no nodes to delete")
        }
    }
    //return first element inserted into Queue
    public peek(){
        return this.bottom
    }
}

export {QueueNode}