const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const a = n.toString().split('');
  let prev;
  let next;
  for (let i = 0; i < a.length; i++) {
    prev = a.splice(i, 1);
    next = a.splice(i + 1, 1);
    let max = prev;
    if (prev < next) {
      max = next;
    }
  }
  return a;
}

console.log(deleteDigit(482));

module.exports = {
  deleteDigit
};
