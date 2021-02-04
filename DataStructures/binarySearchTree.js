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
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(7);
tree.insert(15);
tree.insert(13);
console.log(tree);
console.log(tree.find(15));
