class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const previousTail = this.tail;
      this.tail = newNode;
      previousTail.next = this.tail;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let currentNode = this.head;
    let previousNode;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    this.length--;

    if (this.length <= 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = previousNode;
      this.tail.next = null;
    }

    return currentNode;
  }

  get(nodeIdx) {
    if (this.length === 0 || nodeIdx >= this.length || nodeIdx < 0)
      return undefined;

    let currentIdx = 0;
    let currentNode = this.head;

    while (currentIdx < nodeIdx) {
      currentNode = currentNode.next;
      currentIdx++;
    }

    return currentNode;
  }

  insert(nodeIdx, value) {
    if (nodeIdx > this.length || nodeIdx < 0) return false;
    if (this.length === 0 || this.length === nodeIdx) return !!this.push(value);

    const newNode = new Node(value);

    let previousNode = this.get(nodeIdx - 1);

    if (!previousNode) {
      const previousHead = this.head;
      this.head = newNode;
      newNode.next = previousHead;
    } else {
      newNode.next = previousNode.next;
      previousNode.next = newNode;
    }

    this.length++;

    return true;
  }

  rotate(rotateIdx) {
    if (rotateIdx > this.length || rotateIdx === 0) return this;

    const rotationStartIdx =
      rotateIdx < 0 ? this.length + rotateIdx : rotateIdx;

    const newTail = this.get(rotationStartIdx - 1);

    const newHead = this.get(rotationStartIdx);
    const oldHead = this.head;
    const oldTail = this.tail;

    newTail.next = null;

    if (newHead === oldTail) {
      newHead.next = oldHead;
    } else {
      oldTail.next = oldHead;
    }

    this.head = newHead;
    this.tail = newTail;

    return this;
  }

  set(index, val) {
    if (index >= this.length) return false;

    const updatedNode = this.get(index);
    updatedNode.val = val;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    const nextNode = removedNode.next;

    prevNode.next = nextNode;
    removedNode.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return removedNode;
  }

  loop() {
    let currentIdx = 0;
    let current = this.head;

    while (currentIdx < this.length) {
      console.log(current);
      current = current.next;
      currentIdx++;
    }
  }
}

let sll = new SinglyLinkedList();
sll.push(5).push(10).push(15).push(20);
console.log(sll.remove(2).val);
console.log(sll.remove(100));
console.log(sll.length);
console.log(sll.head.val);
console.log(sll.head.next.val);
console.log(sll.head.next.next.val);
