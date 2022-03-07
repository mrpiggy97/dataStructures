class TreeNode{
    public value : number
    public left : TreeNode | null
    public right : TreeNode | null
    constructor(value : number){
        this.value = value
        this.left = null
        this.right = null
    }
}

export default class BinarySearchTree{
    public root : TreeNode | null
    constructor(){
        this.root = null
    }
    public insert(value : number){
        let newNode : TreeNode = new TreeNode(value)
        if(!this.root){
            this.root = newNode
        }else{
            let currentNode : TreeNode = this.root
            while(currentNode){
                if(newNode.value < currentNode.value){
                    if(currentNode.left){
                        currentNode = currentNode.left
                    }else{
                        currentNode.left = newNode
                        break
                    }
                }else{
                    if(currentNode.right){
                        currentNode = currentNode.right
                    }else{
                        currentNode.right = newNode
                        break
                    }
                }
            }
        }
    }

    public search(nodeValue : number) : TreeNode | null{
        if(this.root){
            if(nodeValue > this.root.value){
                console.error("node value cannot be bigger than tree.root")
                return null
            }else{
                let currentNode : TreeNode | null = this.root
                while(currentNode){
                    if(currentNode.value === nodeValue){
                        return currentNode
                    }
                    else if(nodeValue < currentNode.value){
                        currentNode = currentNode.left
                    }
                    else if(nodeValue > currentNode.value){
                        currentNode = currentNode.right
                    }
                }
                console.error("there are no nodes with that value")
                return null
            }            
        }else{
            console.error("tree has no root")
            return null
        }
    }
}

export {TreeNode}