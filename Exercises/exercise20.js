// ============================================================================================================================
// Implement the following methods on the Queue class.
// This function adds the value to the end of the queue. This should be an O(1) operation and return the new size of the queue.
// ============================================================================================================================

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const previousLast = this.last;
      previousLast.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }
}

const q = new Queue();
console.log(q.enqueue(10));
console.log(q.size);
console.log(q.enqueue(100));
console.log(q.size);
console.log(q.enqueue(1000));
console.log(q.size);
console.log(q.first);
console.log(q.last);
