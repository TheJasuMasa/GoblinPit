class Graph {
  constructor(pattern) {
    this.pattern = pattern;
    this.nodes = Object.keys(pattern);
    this.matrix = this.makeAdjMatrix(this.pattern);
  }

  makeAdjMatrix(pattern) {
    const yArray = [];
    this.nodes.forEach((i) => {
      const xArray = [];
      this.nodes.forEach((j) => {
        pattern[j].includes(i) ? xArray.push(1) : xArray.push(0);
      });
      yArray.push(xArray);
    });
    return yArray;
  }

  setAdjArray(edge1, edge2, vertices, adjArray) {
    adjArray[vertices.indexOf(edge1)][vertices.indexOf(edge2)] = 1;
    adjArray[vertices.indexOf(edge2)][vertices.indexOf(edge1)] = 1;
  }

  checkAdj(edge1, edge2) {
    if (
      this.matrix[this.nodes.indexOf(edge1)][this.nodes.indexOf(edge2)] === 1
    ) {
      return true;
    } else if (
      this.matrix[this.nodes.indexOf(edge2)][this.nodes.indexOf(edge1)] === 1
    ) {
      return true;
    } else {
      return false;
    }
  }
}
