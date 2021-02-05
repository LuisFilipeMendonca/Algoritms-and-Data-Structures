class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ============================================
// BIG O
//
// Insertion => O(log n)
// Searching => O(log n)
// ============================================

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
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            break;
          }

          current = current.left;
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            break;
          }

          current = current.right;
        } else {
          return;
        }
      }
    }

    return this;
  }

  find(val) {
    if (!this.root) return null;
    let current = this.root;

    while (true) {
      if (val === current.val) {
        return current;
      } else if (val < current.val && current.left) {
        current = current.left;
      } else if (val > current.val && current.right) {
        current = current.right;
      } else {
        return null;
      }
    }
  }

  // Breath first search
  bfs() {
    if (!this.root) return [];

    const queue = [];
    const data = [];
    let current;
    queue.push(this.root);

    while (queue.length > 0) {
      current = queue.shift();
      data.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return data;
  }

  // Depth first search -> PreOrder
  dfsPreOrder() {
    const data = [];

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }

  dfsPostOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);

    return data;
  }

  dfsInOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(8);
tree.insert(3);
tree.insert(15);
tree.insert(20);
console.log(tree.bfs());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());
