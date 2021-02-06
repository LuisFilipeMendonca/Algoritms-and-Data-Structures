class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(arr, posOne, posTwo) {
    return ([arr[posOne], arr[posTwo]] = [arr[posTwo], arr[posOne]]);
  }

  bubbleUp(insertedIdx) {
    let parentIdx = Math.floor((insertedIdx - 1) / 2);

    if (
      parentIdx >= 0 &&
      this.values[insertedIdx].priority < this.values[parentIdx].priority
    ) {
      this.swap(this.values, parentIdx, insertedIdx);
      insertedIdx = parentIdx;
      this.bubbleUp(insertedIdx);
    }

    return this.values;
  }

  sinkDown() {
    let leftIdx;
    let rightIdx;
    let currentIdx = 0;
    let swap;

    while (true) {
      leftIdx = currentIdx * 2 + 1;
      rightIdx = currentIdx * 2 + 2;
      swap = null;

      if (leftIdx < this.values.length) {
        if (this.values[currentIdx].priority > this.values[leftIdx].priority) {
          swap = leftIdx;
        }
      }

      if (rightIdx < this.values.length) {
        if (
          (this.values[currentIdx].priority > this.values[rightIdx].priority &&
            swap === null) ||
          (swap !== null &&
            this.values[rightIdx].priority < this.values[swap].priority)
        ) {
          swap = rightIdx;
        }
      }

      if (!swap) break;
      this.swap(this.values, currentIdx, swap);
      currentIdx = swap;
    }
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    const insertedIdx = this.values.length - 1;
    return this.bubbleUp(insertedIdx);
  }

  dequeue() {
    const removedItem = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return removedItem;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("common cold", 5);
priorityQueue.enqueue("gunshot wound", 1);
priorityQueue.enqueue("high fever", 3);
priorityQueue.enqueue("broken arm", 2);
priorityQueue.enqueue("glass in foot", 4);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
