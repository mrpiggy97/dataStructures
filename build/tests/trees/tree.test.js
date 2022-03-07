"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = __importDefault(require("../../trees/tree"));
function TestBinarySearchTree() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
    let myTree = new tree_1.default;
    myTree.insert(3);
    myTree.insert(4);
    myTree.insert(10);
    myTree.insert(2);
    myTree.insert(1);
    myTree.insert(6);
    expect((_b = (_a = myTree.root) === null || _a === void 0 ? void 0 : _a.right) === null || _b === void 0 ? void 0 : _b.value).toBe(4);
    expect((_e = (_d = (_c = myTree.root) === null || _c === void 0 ? void 0 : _c.right) === null || _d === void 0 ? void 0 : _d.right) === null || _e === void 0 ? void 0 : _e.value).toBe(10);
    expect((_j = (_h = (_g = (_f = myTree.root) === null || _f === void 0 ? void 0 : _f.right) === null || _g === void 0 ? void 0 : _g.right) === null || _h === void 0 ? void 0 : _h.left) === null || _j === void 0 ? void 0 : _j.value).toBe(6);
    expect((_m = (_l = (_k = myTree.root) === null || _k === void 0 ? void 0 : _k.right) === null || _l === void 0 ? void 0 : _l.right) === null || _m === void 0 ? void 0 : _m.right).toBe(null);
    expect((_p = (_o = myTree.root) === null || _o === void 0 ? void 0 : _o.left) === null || _p === void 0 ? void 0 : _p.value).toBe(2);
    expect((_s = (_r = (_q = myTree.root) === null || _q === void 0 ? void 0 : _q.left) === null || _r === void 0 ? void 0 : _r.left) === null || _s === void 0 ? void 0 : _s.value).toBe(1);
    expect((_v = (_u = (_t = myTree.root) === null || _t === void 0 ? void 0 : _t.left) === null || _u === void 0 ? void 0 : _u.left) === null || _v === void 0 ? void 0 : _v.left).toBe(null);
}
function TestBinarySearchTreeSearch() {
    let myTree = new tree_1.default;
    myTree.insert(3);
    myTree.insert(4);
    myTree.insert(10);
    myTree.insert(2);
    myTree.insert(1);
    myTree.insert(6);
    let myNode = myTree.search(2);
    let testError = myTree.search(0);
    expect(myNode === null || myNode === void 0 ? void 0 : myNode.value).toBe(2);
    expect(testError).toBe(null);
}
test("basic functionality of BinarySearchTree class", TestBinarySearchTree);
test("search method of BinarySearchTree class", TestBinarySearchTreeSearch);
