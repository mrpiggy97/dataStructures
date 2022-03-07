"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
exports.TreeNode = TreeNode;
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            let currentNode = this.root;
            while (currentNode) {
                if (newNode.value < currentNode.value) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    }
                    else {
                        currentNode.left = newNode;
                        break;
                    }
                }
                else {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    }
                    else {
                        currentNode.right = newNode;
                        break;
                    }
                }
            }
        }
    }
    search(nodeValue) {
        if (this.root) {
            if (nodeValue > this.root.value) {
                console.error("node value cannot be bigger than tree.root");
                return null;
            }
            else {
                let currentNode = this.root;
                while (currentNode) {
                    if (currentNode.value === nodeValue) {
                        return currentNode;
                    }
                    else if (nodeValue < currentNode.value) {
                        currentNode = currentNode.left;
                    }
                    else if (nodeValue > currentNode.value) {
                        currentNode = currentNode.right;
                    }
                }
                console.error("there are no nodes with that value");
                return null;
            }
        }
        else {
            console.error("tree has no root");
            return null;
        }
    }
}
exports.default = BinarySearchTree;
