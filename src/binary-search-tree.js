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

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};