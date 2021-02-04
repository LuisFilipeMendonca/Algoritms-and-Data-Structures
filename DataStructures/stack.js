class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// ============================================
// BIG O
//
// Insertion => O(1)
// Removal => O(1)
// Searching => O(n)
// Access => O(n)
// ============================================

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldFirst = this.first;
      this.first = newNode;
      newNode.next = oldFirst;
    }

    return ++this.length;
  }

  pop() {
    if (this.length === 0) return null;

    const removedItem = this.first;

    if (this.length === 1) {
      this.last = null;
    }

    this.first = removedItem.next;

    this.length--;

    return removedItem.val;
  }
}

const stack = new Stack();
console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
