class Graph {
  constructor(pattern) {
    this.pattern = pattern;
    this.matrix = makeAdjMatrix(this.pattern);
  }

  makeAdjMatrix(vertices, edges) {
    const yArray = [];
    vertices.forEach((i) => {
      const xArray = [];
      vertices.forEach((j) => {
        if (
          edges.some(
            (edge) =>
              (edge[0] === i && edge[1] === j) ||
              (edge[0] === j && edge[1] === i)
          )
        ) {
          xArray.push(1);
        } else {
          xArray.push(0);
        }
      });
      console.log(xArray);
      yArray.push(xArray);
    });
    return yArray;
  }

  setAdjArray(edge1, edge2, vertices, adjArray) {
    adjArray[vertices.indexOf(edge1)][vertices.indexOf(edge2)] = 1;
    adjArray[vertices.indexOf(edge2)][vertices.indexOf(edge1)] = 1;
  }

  checkAdj(edge1, edge2, vertices, adjArray) {
    if (adjArray[vertices.indexOf(edge1)][vertices.indexOf(edge2)] === 1) {
      return true;
    } else if (
      adjArray[vertices.indexOf(edge2)][vertices.indexOf(edge1)] === 1
    ) {
      return true;
    } else {
      return false;
    }
  }
}

//   const arrayTown = makeAdjArray(limbArray, arraySeed);
//   checkAdj("head", "torso", limbArray, arrayTown);
//   limbArray.forEach((i) => {
//     limbArray.forEach((j) => {
//       console.log(i, j);
//       console.log(checkAdj(i, j, limbArray, arrayTown));
//     });
//   });
