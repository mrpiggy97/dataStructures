class DoubleNode{
    public value : number
    public next  : DoubleNode | null
    public previous : DoubleNode | null
    constructor(DoubleNodeValue : number){
        this.value = DoubleNodeValue
        this.next = null
        this.previous = null
    }
}

export default class Double{
    public head : DoubleNode
    public tail : DoubleNode
    public length : number
    constructor(value : number){
        this.head = new DoubleNode(value)
        this.tail = this.head
        this.length = 1
    }
    //introduce element to end of LinkedList
    public append(value : number) : void{
        let newDoubleNode : DoubleNode = new DoubleNode(value)
        newDoubleNode.previous = this.tail
        this.tail.next = newDoubleNode
        this.tail = newDoubleNode
        this.length = this.length + 1
    }
    //introduce element to beggining of LinkedList
    public preappend(value : number) : void{
        let newDoubleNode : DoubleNode = new DoubleNode(value)
        newDoubleNode.next = this.head
        let previousHead : DoubleNode = this.head
        this.head = newDoubleNode
        previousHead.previous = this.head
        this.head = newDoubleNode
        this.length = this.length + 1
    }
    //get node with value indexValue
    public getDoubleNode(indexValue : number) : DoubleNode | null{
        let currentDoubleNode : DoubleNode | null = this.head
        if (currentDoubleNode){
            while(currentDoubleNode.value !== indexValue){
                let nextDoubleNode : DoubleNode | null = currentDoubleNode.next
                if (nextDoubleNode){
                    currentDoubleNode = nextDoubleNode
                }else{
                    return null
                }
            }
        }else{
            return null
        }
        return currentDoubleNode
    }
    //introduce element after node with value previousDoubleNodeValue
    public insertDoubleNodeAfter(previousDoubleNodeValue : number, value : number) : void{
        let newDoubleNode : DoubleNode = new DoubleNode(value)
        let previousDoubleNode : DoubleNode | null = this.getDoubleNode(previousDoubleNodeValue)
        if (previousDoubleNode){
            let DoubleNodeToReplace : DoubleNode | null = previousDoubleNode.next
            previousDoubleNode.next = newDoubleNode
            newDoubleNode.next = DoubleNodeToReplace
            newDoubleNode.previous = previousDoubleNode
            if(DoubleNodeToReplace){
                DoubleNodeToReplace.previous = newDoubleNode
            }
            this.length = this.length + 1            
        }else{
            console.error("there is no DoubleNode ")
        }
    }
    //delete element with value DoubleNodeValue
    public delete(DoubleNodeValue : number) : void{
        let DoubleNodeToDelete : DoubleNode | null = this.getDoubleNode(DoubleNodeValue)
        if(DoubleNodeToDelete){
            let nextDoubleNode : DoubleNode | null = DoubleNodeToDelete.next
            let previousDoubleNode : DoubleNode | null = DoubleNodeToDelete.previous
            if(previousDoubleNode){
                if(nextDoubleNode){
                    previousDoubleNode.next = nextDoubleNode
                    nextDoubleNode.previous = previousDoubleNode
                }else{
                    previousDoubleNode.next = null
                    this.tail = previousDoubleNode
                }
            }else{
                if(this.head.next){
                    this.head = this.head.next
                }
            }
            this.length = this.length - 1
        }else{
            console.error("there is no DoubleNode with such value")
        }
    }
}

export {DoubleNode}