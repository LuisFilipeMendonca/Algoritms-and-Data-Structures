// ====================================================================================================================================================
// Write a function on the BinarySearchTree class.
// insert - accepts a value and inserts it into the BST in the correct position. The function should return the binary search tree.
// findIteratively - should find a node in a binary tree. It should return the node if found, otherwise return undefine.
// dfsPreOrder - should search through each node in the binary search tree using pre-order depth first search and return an array with all nodes value.
// dfsInOrder - should search through each node in the binary search tree using in-order depth first search and return an array with all nodes value.
// dfsInOrder - should search through each node in the binary search tree using post-order depth first search and return an array with all nodes value.
// ====================================================================================================================================================

class Node {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;

      while (true) {
        if (current.value < newNode.value) {
          if (current.right !== null) {
            current = current.right;
          } else {
            current.right = newNode;
            break;
          }
        } else {
          if (current.left !== null) {
            current = current.left;
          } else {
            current.left = newNode;
            break;
          }
        }
      }
    }
    return this;
  }

  find(val) {
    let current = this.root;
    let foundNode;

    while (current !== null && !foundNode) {
      if (current.value === val) foundNode = current;
      else if (val > current.value) current = current.right;
      else current = current.left;
    }

    return foundNode;
  }

  dfsPreOrder() {
    const arr = [];

    function traverse(node) {
      arr.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return arr;
  }

  dfsInOrder() {
    const arr = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      arr.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return arr;
  }

  dfsPostOrder() {
    const arr = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      arr.push(node.value);
    }
    traverse(this.root);

    return arr;
  }

  bfs() {
    const arr = [];
    const queue = [];
    let currentValue;

    if (!this.root) return arr;

    arr.push(this.root.value);
    queue.push(this.root);

    while (queue.length) {
      currentValue = queue.shift();

      if (currentValue.left) {
        arr.push(currentValue.left.value);
        queue.push(currentValue.left);
      }

      if (currentValue.right) {
        arr.push(currentValue.right.value);
        queue.push(currentValue.right);
      }
    }

    return arr;
  }
}

const bst = new BinarySearchTree();
bst.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);
console.log(bst.bfs());
