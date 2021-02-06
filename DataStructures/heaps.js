// ============================================
// BIG O
//
// Insertion => O(log n)
// Removal => O(log n)
// Search => O(n)
// ============================================

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap(arr, posOne, posTwo) {
    return ([arr[posOne], arr[posTwo]] = [arr[posTwo], arr[posOne]]);
  }

  bubbleUp(arr, position) {
    let parentPosition = Math.floor((position - 1) / 2);

    if (parentPosition >= 0 && arr[parentPosition] < arr[position]) {
      this.swap(arr, parentPosition, position);
      position = parentPosition;
      this.bubbleUp(arr, position);
    }

    return arr;
  }

  insert(val) {
    this.values.push(val);
    return this.bubbleUp(this.values, this.values.length - 1);
  }

  getLeft(index) {
    return index * 2 + 1;
  }

  getRight(index) {
    return index * 2 + 2;
  }

  sinkDOwn() {
    let idx = 0;
    let arr = this.values;
    let leftIdx;
    let rightIdx;
    let swap = null;
    let length = this.values.length;

    while (true) {
      leftIdx = this.getLeft(idx);
      rightIdx = this.getRight(idx);

      if (leftIdx < length) {
        if (arr[leftIdx] > arr[idx]) {
          swap = leftIdx;
        }
      }

      if (rightIdx < length) {
        if (
          (arr[rightIdx] > arr[idx] && swap === null) ||
          (swap !== null && arr[swap] < arr[rightIdx])
        ) {
          swap = rightIdx;
        }
      }

      if (!swap) break;
      this.swap(arr, idx, swap);
      idx = swap;
      swap = null;
    }

    return arr;
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDOwn();
    }

    return max;
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
