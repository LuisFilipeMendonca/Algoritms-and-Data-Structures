class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);

    return this.adjacencyList;
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;

    const v1Idx = this.adjacencyList[vertex1].findIndex((v) => v === vertex2);
    const v2Idx = this.adjacencyList[vertex2].findIndex((v) => v === vertex1);
    this.adjacencyList[vertex1].splice(v1Idx, 1);
    this.adjacencyList[vertex2].splice(v2Idx, 1);
  }

  removeVertex(vertex) {
    for (let key in this.adjacencyList) {
      if (key !== vertex) {
        this.removeEdge(vertex, key);
      }
    }

    delete this.adjacencyList[vertex];
  }

  dfsRecursive(start) {
    const result = [];
    const visited = {};

    function dfsHelper(graph, vertex) {
      visited[vertex] = true;
      result.push(vertex);

      if (graph[vertex].length <= 0) return;

      for (let i = 0; i < graph[vertex].length; i++) {
        if (!visited[graph[vertex][i]]) {
          dfsHelper(graph, graph[vertex][i]);
        }
      }
    }
    dfsHelper(this.adjacencyList, start);

    return result;
  }

  dfsIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      for (let i = 0; i < this.adjacencyList[currentVertex].length; i++) {
        const neighbor = this.adjacencyList[currentVertex][i];
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }
    return result;
  }

  bfs(start) {
    const result = [];
    const queue = [start];
    const visited = {};
    visited[start] = true;
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.bfs("A"));
