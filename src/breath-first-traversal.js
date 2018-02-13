'use strict';

module.exports = (graph, startNode, goalNode) => {
  let queue = [];
  let visitedNodes = new Set();
  let parentMap = new Map();

  queue.unshift(startNode);
  visitedNodes.add(startNode);

  while(queue.length > 0){
    let currentNode = queue.pop();

    if(currentNode === goalNode)
      return parentMap;

    let neighbors = graph.getNeighbors(curretNode);

    for(let neighbor of neighbors){
      let neighborNode = neighbor.node;

      if(visitedNodes.has(neighborNode))
        continue;
      else
        visitedNodes.add(neighborNode)

      parentMap.set(neighborNode, currentNode);
      queue.unshift(neighborNode);
    }
  }
  return null;
}