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

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const previousLast = this.last;
      this.last = newNode;
      previousLast.next = newNode;
    }

    return ++this.length;
  }

  dequeue() {
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

const queue = new Queue();
console.log(queue.enqueue(10));
console.log(queue);
console.log(queue.enqueue(20));
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
