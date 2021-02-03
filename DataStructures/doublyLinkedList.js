class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
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

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    const oldTail = this.tail;

    if (this.length <= 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      oldTail.next = newNode;
      newNode.prev = oldTail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length <= 0) return undefined;

    const tail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tail.prev;
      this.tail.next = null;
      tail.prev = null;
    }

    this.length--;

    return tail;
  }

  shift() {
    if (this.length <= 0) return undefined;

    const prevHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = prevHead.next;
      this.head.prev = null;
      prevHead.next = null;
    }

    this.length--;

    return prevHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(position) {
    if (position < 0 || position >= this.length) return undefined;

    const middle = Math.round((this.length - 1) / 2);

    let index = position >= middle ? this.length - 1 : 0;
    let current = position >= middle ? this.tail : this.head;

    while (index !== position) {
      current = position >= middle ? current.prev : current.next;
      index = position >= middle ? index - 1 : index + 1;
    }

    return current;
  }

  set(position, val) {
    const item = this.get(position);

    if (item) {
      item.val = val;
      return true;
    }

    return false;
  }

  insert(position, val) {
    if (position < 0 || position > this.length) return false;
    if (position === 0) return !!this.unshift(val);
    if (position === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const prevItem = this.get(position - 1);
    const afterNode = prevItem.next;

    prevItem.next = newNode;
    newNode.prev = prevItem;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;

    return true;
  }

  remove(position) {
    if (position < 0 || position >= this.length) return false;
    if (position === 0) return !!this.shift();
    if (position === this.length - 1) return !!this.pop();

    const item = this.get(position);
    const prevItem = item.prev;
    const afterItem = item.next;

    prevItem.next = afterItem;
    afterItem.prev = prevItem;
    item.prev = null;
    item.next = null;

    this.length--;

    return item;
  }

  loop() {
    let current = this.head;
    let index = 0;

    while (index < this.length) {
      console.log(current);
      current = current.next;
      index++;
    }

    return;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = node.next;
    let next = null;
    let count = 0;

    while (count < this.length - 1) {
      node.next = next;
      node.prev = prev;
      next = node;
      node = prev;
      prev = prev.next;
      count++;
    }

    this.head.next = next;
    this.head.prev = null;

    return this;
  }
}

const list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.unshift(5);
list.insert(1, 7);

list.remove(2);

list.loop();
