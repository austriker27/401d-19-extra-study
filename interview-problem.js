'use strict';

//-------------------------------------------------------------
// setup
//-------------------------------------------------------------
class BinaryTree{
  constructor(value, weight){
    this.value = value;
    this.left = null;
    this.right = null;
    this.weight = weight;
  }
}

let one = new BinaryTree(1, 1);
let two = new BinaryTree(2, 1);
let three = new BinaryTree(3, 1);
let four = new BinaryTree(4, 1);
let five = new BinaryTree(5, 1);

one.left = two;
one.right = three;

three.left = four;
three.right = five;

let findRootToLefPathWithSum = (root, targetWeight) => {
  return findRootToLefPathWithSum_helper(root, 0, targetWeight);
};

let findRootToLefPathWithSum_helper = (root, weightSoFar, targetWeight) => {
  if(root.left === null && root.right === null){
    console.log(`finding a leaf with a weight ${weightSoFar}`);

  if(root.weight + weightSoFar === targetWeight)
    return true;

  return false;
  } else {
    let leftSideValue = root.left ? findRootToLefPathWithSum_helper(
      root.left,
      root.weight + weightSoFar,
      targetWeight
    ) : false;

  if(leftSideValue === true)
    return true;

  return root.right ? 
    findRootToLefPathWithSum_helper(
      root.right,
      root.weight + weightSoFar,
      targetWeight
    ) : false;
  }
};