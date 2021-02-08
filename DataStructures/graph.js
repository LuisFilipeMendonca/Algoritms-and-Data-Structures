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
}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addVertex("Hong Kong");
graph.addVertex("Los Angels");
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Tokyo", "Hong Kong");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Dallas", "Hong Kong");
graph.addEdge("Dallas", "Los Angels");
graph.addEdge("Hong Kong", "Los Angels");
console.log(graph.adjacencyList);
graph.removeVertex("Tokyo");
console.log(graph.adjacencyList);
