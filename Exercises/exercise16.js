// ==================================================
// Implement the following methods on the Stack class
// ==================================================

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // PUSH - takes in a node and puts it at the top of the stack. Return stack size
  push(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.last = newNode;
    } else {
      const lastTopNode = this.first;
      newNode.next = lastTopNode;
    }

    this.first = newNode;

    return ++this.size;
  }

  // POP - removes the node at the top of the stack and return the value of that node
  pop() {
    if (this.size === 0) return undefined;

    const removedNode = this.first;
    this.first = removedNode.next;
    this.size--;

    if (this.size === 0) {
      this.first = null;
      this.last = null;
    }

    return removedNode.val;
  }
}

var stack = new Stack();
console.log(stack.push(10));
console.log(stack.push(100));
console.log(stack.push(1000));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
