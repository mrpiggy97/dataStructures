"use strict";
//we will make a non directional graph
Object.defineProperty(exports, "__esModule", { value: true });
class Graph {
    constructor() {
        this.nodes = 0;
        this.list = {};
    }
    addNode(newNode) {
        this.list[newNode] = [];
        this.nodes = this.nodes + 1;
    }
    addEdge(node1, node2) {
        this.list[node1].push(node2);
        this.list[node2].push(node1);
    }
}
exports.default = Graph;
