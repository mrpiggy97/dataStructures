class StackNode{
    public previous : StackNode | null
    public value : number
    constructor(value : number){
        this.value = value
        this.previous = null
    }

}

export default class Stack{
    public top : StackNode | null
    public bottom : StackNode | null
    public length : number
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }
    //return last element inserted into Stack
    public peek() : StackNode | null{
        return this.top
    }
    //introduce new element at the end of stack
    public push(value : number){
        let newNode : StackNode | null = new StackNode(value)
        if(this.length === 0){
            this.top = newNode
            this.top.previous = newNode
            this.bottom = newNode
        }else{
            if(this.top){
                let previousNode : StackNode | null = this.top
                this.top = newNode
                this.top.previous = previousNode
            }
        }
        this.length = this.length + 1
    }
    //delete last element introduced to Stack
    public pop(){
        if(this.length === 0){
            console.error("cannot pop last element if Stack is empty")
        }else{
            if (this.top){
                if(this.top.previous){
                    let newTopNode : StackNode = this.top.previous
                    this.top = newTopNode
                    if(!this.top.previous){
                        this.bottom = this.top
                    }
                    this.length = this.length - 1
                }
            }else{
                console.error("there is no top or top.previous to make the new top")
            }
        }
    }
}

export {StackNode}