'use strict';

module.exports = (graph, startNode, goalNode) => {
  let stack = [];
  let visitedNodes = new Set();
  let parentMap = new Map();

  stack.push(startNode);
  visitedNodes.add(startNode);

  while(stack.length > 0){
    let currentNode = stack.pop();

    if(currentNode === goalNode)
      return parentMap;

    let neighbors = graph.getNeighbors(currentNode);

    for(let neighbor of neighbors){
      let neighborNode = neighbor.node;

    if(visitedNodes.has(neighborNode))
      continue;
    else  visitedNodes.add(neighborNode);

    parentMap.set(neighborNode, currentNode);
    stack.push(neighborNode);
    }
  }
  return null;
}