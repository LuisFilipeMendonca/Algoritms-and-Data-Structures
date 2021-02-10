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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2] || !weight)
      return;

    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start, end) {
    const distances = {};
    const previous = {};
    const priorityQueue = new PriorityQueue();
    let path = [];
    let currentVertex;

    // build up initial state
    for (let key in this.adjacencyList) {
      distances[key] = Infinity;
      previous[key] = null;
    }
    distances[start] = 0;

    for (let key in distances) {
      priorityQueue.enqueue(key, distances[key]);
    }

    // As long there is something to visit
    while (priorityQueue.values.length) {
      currentVertex = priorityQueue.dequeue();

      if (currentVertex.val === end) {
        while (previous[currentVertex.val]) {
          path.push(currentVertex.val);
          currentVertex.val = previous[currentVertex.val];
        }
        break;
      }

      for (let value of this.adjacencyList[currentVertex.val]) {
        let newDistance = distances[currentVertex.val] + value.weight;

        if (newDistance < distances[value.node]) {
          // updating new smallest distance to neighbor
          distances[value.node] = newDistance;
          // updating previous - How we got to neighbor
          previous[value.node] = currentVertex.val;
          // enqueue in priority queue with new priority
          priorityQueue.enqueue(value.node, newDistance);
        }
      }
    }
    return path.concat(currentVertex.val).reverse();
  }
}

const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "F", 1);
g.addEdge("D", "E", 3);
g.addEdge("F", "E", 1);
console.log(g.dijkstra("A", "E"));
