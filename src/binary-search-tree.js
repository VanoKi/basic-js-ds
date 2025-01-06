const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null
  }
  root() {
    return this.root
  }
  add(data) {
    this.root = addData(this.root, data)
    function addData(node, data) {
      if(!node) return new Node(data)
      if (node.data === data) return node
      if (data < node.data) {
        node.left = addData(node.left, data)
      } else {
        node.right = addData(node.right, data)
      }
      return node
    }
  }

  has(data) {
    return hasData(this.root, data)
    function hasData(node, data) {
      if(!node) return false
      if (node.data === data) return true
      return data < node.data ? hasData(node.left, data) : hasData(node.right, data)
    }
  }

  find(data) {
    if(!this.root) return false
    let cur = this.root
    let ans = false
    while(cur && !ans) {
      if(data < cur.data) {
        cur = cur.left;
      } else if(data > cur.data) {
        cur = cur.right;
      } else {
        ans = cur;
      }
    }
    return (!ans)? null : ans;
  }

  remove(data) {
    this.root = removeData(this.root, data)
    function removeData(node, data) {
      if (!node) return null
      if (data < node.data) {
        node.left = removeData(node.left, data)
      } else if (node.data < data) {
        node.right = removeData(node.right, data)
        // return node
      } else {
        if (!node.left && !node.right) return null
        if (!node.left) return node.right
        if (!node.right) return  node.right
        let minRight = node.right
        while (minRight.left) {
          minRight = minRight.left
        }
        node.data = minRight.data
        node.right = removeData(node.right, minRight.data)
        return node
      }
    }
  }

  min() {
    if(!this.root) return null;
    let node = this.root
    while (node.left) {
      node = node.left
    }
    return node.data;
  }

  max() {
    if(!this.root) return null;
    let node = this.root
    while (node.right) {
      node = node.right
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};