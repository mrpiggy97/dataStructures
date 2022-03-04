class Node{
    public value : number
    public next  : Node | null
    constructor(nodeValue : number){
        this.value = nodeValue
        this.next = null
    }
}

export default class Single{
    public head : Node
    public tail : Node
    public length : number
    constructor(value : number){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    public append(value : number) : void{
        let newNode : Node = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length = this.length + 1
    }
    public preappend(value : number) : void{
        let newNode : Node = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length = this.length + 1
    }
    public getNode(indexValue : number) : Node | null{
        let currentNode : Node | null = this.head.next
        if (currentNode){
            while(currentNode.value !== indexValue){
                let nextNode : Node | null = currentNode.next
                if (nextNode){
                    currentNode = nextNode
                }else{
                    return null
                }
            }
        }else{
            return null
        }
        return currentNode
    }
    public insertNodeAfter(previousNodeValue : number, value : number) : void{
        let newNode : Node = new Node(value)
        let previousNode : Node | null = this.getNode(previousNodeValue)
        if (previousNode){
            let nodeToReplace : Node | null = previousNode.next
            previousNode.next = newNode
            newNode.next = nodeToReplace
            this.length = this.length + 1            
        }
    }
}

export {Node}