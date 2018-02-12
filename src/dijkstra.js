'use strict';

const PriorityQueue = require('js-priority-queue');

module.exports = (graph, startNode, goalNode) => {
  let PriorityQueue = new PriorityQueue();
  let visitedNodes = newSet();
  let parentMap = new Map();
  let shortestPathSoFar = new Map();

  let priorityQueue = new PriorityQueue({
    comparator: (a, b) => a.priority - b.priority,
  });

  priorityQueue.queue({
    node: startNode,
    priority: 0,
  });
  shortestPathSoFar.set(startNode, 0);

  while(priorityQueue.length > 0){


  // david - enqueue the start node
  // david - initialize the shortest path so far

  // david - while loop over the queue
  // dequeue
  // check for visited nodes
  // check for goal node
  // update shortest path so far
  
    let currentNode = priorityQueue.dequeue().node;
    
    if(visitedNodes.has(currentNode))
      continue;

    visitNodes.add(currentNode);

    if(currentNode === goalNode)
      return parentMap;

    let neighbors = graph.getNeighbors(currentNode);

    for(let neighbor of neighbors){
      let neighborWeight = neighbor.weight;
      let neighborNode = neighbor.node;

      if(visitedNodes.has(neighborNode))
        continue;

      let newPathWeight = shortestPathSoFar.get(currentNode) + neighborWeight;

      if(!shortestPathSoFar.has(neighbor) || newPathWeight < shortestPathSoFar.get(neighborNode) ){

        shortestPathSoFar.set(neighborNode, newPathWeight);
        parentMap.set(neighborNode, currentNode);

        priorityQueue.queue({
          node: neighborNode,
          priority: shortestPathSoFar.get(neighborNode),
        });
      }
    }
  } 
  return null;
}