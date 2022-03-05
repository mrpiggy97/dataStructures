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
        let currentNode : Node | null = this.head
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
        }else{
            console.error("there is no node ")
        }
    }
    public getPreviousNode(node : Node) : Node | null{
        if(this.length < 1){
            console.error("there are no elements to delete")
            return null
        }

        let currentNode : Node | null = this.head
        while(currentNode){
            if (currentNode.next === null){
                return null
            }
            else if(currentNode.next !== node && currentNode.next !== null){
                currentNode = currentNode.next
            }
            else if(currentNode.next === node){
                break
            }
        }
        return currentNode
    }

    public delete(nodeValue : number) : void{
        let nodeToDelete : Node | null = this.getNode(nodeValue)
        if(nodeToDelete){
            let nextNode : Node | null = nodeToDelete.next
            let previousNode : Node | null = this.getPreviousNode(nodeToDelete)
            if(previousNode){
                if(nextNode){
                    previousNode.next = nextNode
                }else{
                    previousNode.next = null
                    this.tail = previousNode
                }
            }else{
                if(this.head.next){
                    this.head = this.head.next
                }
            }
            this.length = this.length - 1
        }else{
            console.error("there is no node with such value")
        }
    }
}

export {Node}