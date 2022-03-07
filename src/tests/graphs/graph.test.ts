import Graph from "../../graphs/graph";

function TestGraph(){
    let myGraph : Graph = new Graph()
    myGraph.addNode(1)
    myGraph.addNode(3)
    myGraph.addNode(4)
    myGraph.addNode(5)
    myGraph.addNode(6)
    myGraph.addNode(8)
    myGraph.addEdge(3,5)
    myGraph.addEdge(6,3)
    myGraph.addEdge(1,6)
    myGraph.addEdge(1,3)
    myGraph.addEdge(1,4)
    myGraph.addEdge(4,5)
    myGraph.addEdge(4,8)
    expect(myGraph.nodes).toBe(6)

}

test("basic functionality of Graph class", TestGraph)