const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexesMinusOne = [];
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexesMinusOne.push(i);
    } else {
      numbers.push(arr[i]);
    }
  }
  numbers = numbers.sort((a, b) => a - b);
  for (let i = 0; i < indexesMinusOne.length; i++) {
    numbers.splice(indexesMinusOne[i], 0, -1);
  }
  return numbers;
}

module.exports = {
  sortByHeight
};
