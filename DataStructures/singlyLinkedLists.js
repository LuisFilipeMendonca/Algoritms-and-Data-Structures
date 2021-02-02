// piece of data -> val
// reference to next node -> next

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
// Removal => Beginning O(1) => End O(n)
// Searching => O(n)
// Access => O(n)
// ============================================

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length <= 0) return undefined;

    let current = this.head;
    let previous;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;

    if (this.length <= 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (this.length <= 0) return undefined;

    let current = this.head;

    this.head = current.next;
    this.length--;

    if (this.length <= 0) {
      this.tail = null;
    }

    return current;
  }

  unshift(val) {
    const newNode = new Node(val);

    let currentHead = this.head;

    if (!this.head) {
      this.tail = newNode;
    }
    this.head = newNode;
    this.head.next = currentHead;

    this.length++;

    return this;
  }

  get(position) {
    if (position < 0 || position >= this.length) return null;

    let index = 0;
    let item = this.head;

    while (index < position) {
      item = item.next;
      index++;
    }
    return item;
  }

  set(position, val) {
    const item = this.get(position);

    if (item) {
      item.val = val;
      return true;
    }

    return false;
  }

  loop() {
    let index = 0;
    let item = this.head;

    while (index < this.length) {
      console.log(item);
      item = item.next;
      index++;
    }

    return;
  }

  insert(position, val) {
    if (position < 0 || position > this.length) return false;
    if (position === 0) return !!this.unshift(val);
    if (position === this.length) return !!this.push(val);

    const newNode = new Node(val);

    const previousItem = this.get(position - 1);

    newNode.next = previousItem.next;
    previousItem.next = newNode;
    this.length++;

    return true;
  }

  remove(position) {
    if (position < 0 || position >= this.length) return undefined;
    if (position === 0) return this.shift();
    if (position === this.length - 1) return this.pop();

    const previousItem = this.get(position - 1);
    const removeItem = previousItem.next;

    previousItem.next = removeItem.next;
    this.length--;

    return removeItem;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;
    let index = 0;

    while (index < this.length) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
      index++;
    }

    return this;
  }
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");
list.push("<3");
list.push(":)");
list.remove(2);
// list.loop();
list.reverse();
list.loop();
