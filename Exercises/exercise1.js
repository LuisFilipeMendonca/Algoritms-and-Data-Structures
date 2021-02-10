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
console.log("-------------------------------");
console.log("-----------POP TESTS-----------");
console.log("-------------------------------");
console.log(sll.push(5));
console.log(sll.length);
console.log(sll.head.val);
console.log(sll.tail.val);
console.log("--------------------");
console.log(sll.push(10));
console.log(sll.length);
console.log(sll.head.val);
console.log(sll.head.next.val);
console.log(sll.tail.val);
console.log("--------------------");
console.log(sll.push(15));
console.log(sll.length);
console.log(sll.head.val);
console.log(sll.head.next.val);
console.log(sll.head.next.next.val);
console.log(sll.tail.val);
console.log("--------------------");
console.log(sll.pop().val);
console.log(sll.tail.val);
console.log(sll.length);
console.log(sll.pop().val);
console.log(sll.length);
console.log(sll.pop().val);
console.log(sll.length);
console.log(sll.pop());
console.log(sll.length);
console.log("-------------------------------");
console.log("-------------------------------");
console.log("-----------GET TESTS-----------");
console.log("-------------------------------");
sll = new SinglyLinkedList();
sll.push(5).push(10).push(15).push(20);
console.log(sll.get(0).val);
console.log(sll.get(1).val);
console.log(sll.get(2).val);
console.log(sll.get(3).val);
console.log(sll.get(4));
console.log("-------------------------------");
console.log("-------------------------------");
console.log("---------INSERT TESTS----------");
console.log("-------------------------------");
sll = new SinglyLinkedList();
sll.push(5).push(10).push(15).push(20);
console.log(sll.insert(0, 12));
console.log(sll.insert(100, 12));
console.log(sll.length);
console.log(sll.head.val);
console.log(sll.head.next.val);
console.log(sll.head.next.next.val);
console.log(sll.head.next.next.next.val);
console.log(sll.head.next.next.next.next.val);
console.log(sll.insert(5, 25));
console.log(sll.head.next.next.next.next.next.val);
console.log(sll.tail.val);
console.log("-------------------------------");
console.log("-------------------------------");
console.log("---------ROTATE TESTS----------");
console.log("-------------------------------");
sll = new SinglyLinkedList();
sll.push(5).push(10).push(15).push(20).push(25);
console.log(sll.head.val);
console.log(sll.tail.val);
sll.rotate(3);
console.log(sll.head.val);
console.log(sll.head.next.val);
console.log(sll.head.next.next.val);
console.log(sll.head.next.next.next.val);
console.log(sll.head.next.next.next.next.val);
console.log(sll.tail.val);
console.log(sll.tail.next);
console.log("-------------------------------");
sll = new SinglyLinkedList();
sll.push(5).push(10).push(15).push(20).push(25);
console.log(sll.head.val);
console.log(sll.tail.val);
sll.rotate(100);
console.log(sll.head.val);
console.log(sll.head.next.val);
console.log(sll.head.next.next.val);
console.log(sll.head.next.next.next.val);
console.log(sll.head.next.next.next.next.val);
console.log(sll.tail.val);
console.log(sll.tail.next);
console.log("-------------------------------");
sll = new SinglyLinkedList();
sll.push(5).push(10).push(15).push(20).push(25);
console.log(sll.head.val);
console.log(sll.tail.val);
sll.rotate(-1);
console.log(sll.head.val);
console.log(sll.head.next.val);
console.log(sll.head.next.next.val);
console.log(sll.head.next.next.next.val);
console.log(sll.head.next.next.next.next.val);
console.log(sll.tail.val);
console.log(sll.tail.next);
console.log("-------------------------------");
console.log("-------------------------------");
console.log("-----------SET TESTS-----------");
console.log("-------------------------------");
sll = new SinglyLinkedList();
sll.push(5).push(10).push(15).push(20).push(25);
console.log(sll.set(0, 10));
console.log(sll.set(1, 2));
console.log(sll.length);
console.log(sll.head.val);
console.log(sll.set(10, 10));
console.log(sll.set(3, 10));
console.log(sll.head.next.next.next.val);
