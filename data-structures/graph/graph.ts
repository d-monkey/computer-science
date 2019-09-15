export default class Graph {
  constructor() {
    this.edges = []
    this.vertices = []
    this.numberOfEdges = 0
    this.numberOfVertices = 0
  }

  /**
   * add a vertex to the graph
   * @param {number} vertex
   */
  addVertex(vertex: number): void {
    this.vertices.push(vertex)
    this.edges[vertex] = []
    this.numberOfVertices += 1
  }

  /**
   * removes a vertex from the graph
   * @param  {number} vertex
   */
  removeVertex(vertex: number): void {
    const index = this.vertices.indexOf(vertex)

    if (index >= 0) {
      this.vertices.splice(index, 1)
    }

    while (this.edges[vertex].length) {
      const adjacentVertex = this.edges[vertex].pop()
      this.removeEdge(adjacentVertex, vertex)
    }

    this.numberOfVertices -= 1
  }

  /**
   * checks if the graph has a vertex
   * @param  {number}  vertex
   * @return {Boolean}
   */
  hasVertex(vertex: number): boolean {
    return this.vertices.includes(vertex)
  }

  /**
   * adds an edge between two existing vertices
   * @param {number} vertex1
   * @param {number} vertex2
   */
  addEdge(vertex1: number, vertex2: number): void {
    this.edges[vertex1].push(vertex2)
    this.edges[vertex2].push(vertex1)
    this.numberOfEdges++
  }

  /**
   * removes an existing edge between two vertices
   * @param  {number} vertex1
   * @param  {number} vertex2
   */
  removeEdge(vertex1: number, vertex2: number): void {
    const index1 = this.edges[vertex1]
      ? this.edges[vertex1].indexOf(vertex2)
      : -1
    const index2 = this.edges[vertex2]
      ? this.edges[vertex2].indexOf(vertex1)
      : -1

    if (index1 >= 0) {
      this.edges[vertex1].splice(index1, 1)
      this.numberOfEdges--
    }

    if (index2 >= 0) {
      this.edges[vertex2].splice(index2, 1)
    }
  }

  /**
   * checks if the graph has an edge between two existing vertices
   * @param  {number}  vertex1
   * @param  {number}  vertex2
   * @return {Boolean}
   */
  hasEdge(vertex1: number, vertex2: number): boolean {
    if (this.hasVertex(vertex1) && this.hasVertex(vertex2)) {
      if (
        this.edges[vertex1].includes(vertex2) &&
        this.edges[vertex2].includes(vertex1)
      ) {
        return true
      }
    }
    return false
  }

  /**
   * returns the size of the graph
   * @return {number}
   */
  size(): number {
    return this.vertices.length
  }

  /**
   * returns the number of edges in the graph
   * @return {[type]} [description]
   */
  relations() {
    return this.numberOfEdges
  }

  /**
   * traverse the graph using using a traversal algorithm
   * @param  {[type]}   vertex starting vertex number
   * @param  {Function} cb     function that is called with each vertex value
   * @param  {[type]}   type   traversal type, default is breadth-first
   * @return {void}
   */
  traverse(vertex, cb, type): void {
    switch (type) {
      case 'dfs':
        break
      default:
        break
    }
  }

  /**
   * prints a representation of the graph
   * @return {string} graph representation as a string
   */
  print(): string {
    const output = this.vertices
      .map(vertex => {
        return `${vertex} -> ${this.edges[vertex].join(', ')}`.trim()
      }, this)
      .join(' | ')

    return output
  }

  /**
   * clears the graph
   * @return {void}
   */
  clear(): void {
    this.edges = []
    this.vertices = []
    this.numberOfEdges = 0
    this.numberOfVertices = 0
  }
}
