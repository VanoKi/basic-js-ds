const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null; 
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addData(this._root, data);
    function addData(node, data) {
      if (!node) return new Node(data);
      if (data === node.data) return node;
      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasData(this._root, data);
    function hasData(node, data) {
      if (!node) return false;
      if (data === node.data) return true;
      return data < node.data ? hasData(node.left, data) : hasData(node.right, data);
    }
  }

  find(data) {
    let cur = this._root;
    while (cur) {
      if (data < cur.data) {
        cur = cur.left;
      } else if (data > cur.data) {
        cur = cur.right;
      } else {
        return cur;
      }
    }
    return null;
  }

  remove(data) {
    this._root = removeData(this._root, data);
    function removeData(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeData(node.left, data);
      } else if (data > node.data) {
        node.right = removeData(node.right, data);
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeData(node.right, minRight.data);
      }
      return node;
    }
  }

  min() {
    if (!this._root) return null;
    let node = this._root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this._root) return null;
    let node = this._root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};