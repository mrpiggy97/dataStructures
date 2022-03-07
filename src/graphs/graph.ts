//we will make a non directional graph

type AdjacentList = {
    [key : number] : number[]
}

export default class Graph{
    public nodes : number
    public list : AdjacentList
    constructor(){
        this.nodes = 0
        this.list = {}
    }

    public addNode(newNode : number) : void{
        this.list[newNode] = []
        this.nodes = this.nodes + 1
    }

    public addEdge(node1 : number, node2 : number) : void{
        this.list[node1].push(node2)
        this.list[node2].push(node1)
    }
}