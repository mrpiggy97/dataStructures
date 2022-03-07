import BinarySearchTree,{TreeNode} from "../../trees/tree";

function TestBinarySearchTree(){
    let myTree : BinarySearchTree = new BinarySearchTree
    myTree.insert(3)
    myTree.insert(4)
    myTree.insert(10)
    myTree.insert(2)
    myTree.insert(1)
    myTree.insert(6)
    expect(myTree.root?.right?.value).toBe(4)
    expect(myTree.root?.right?.right?.value).toBe(10)
    expect(myTree.root?.right?.right?.left?.value).toBe(6)
    expect(myTree.root?.right?.right?.right).toBe(null)
    expect(myTree.root?.left?.value).toBe(2)
    expect(myTree.root?.left?.left?.value).toBe(1)
    expect(myTree.root?.left?.left?.left).toBe(null)

}

function TestBinarySearchTreeSearch(){
    let myTree : BinarySearchTree = new BinarySearchTree
    myTree.insert(3)
    myTree.insert(4)
    myTree.insert(10)
    myTree.insert(2)
    myTree.insert(1)
    myTree.insert(6)
    let myNode : TreeNode | null = myTree.search(2)
    let testError : TreeNode | null = myTree.search(0)
    expect(myNode?.value).toBe(2)
    expect(testError).toBe(null)
}

test("basic functionality of BinarySearchTree class",TestBinarySearchTree)
test("search method of BinarySearchTree class",TestBinarySearchTreeSearch)