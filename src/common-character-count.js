const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let charCount = {};
  for (let i = 0; i < s1.length; i++) {
    if (charCount[s1[i]]) {
      charCount[s1[i]]++;
    } else {
      charCount[s1[i]] = 1;
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (charCount[s2[i]]) {
      charCount[s2[i]]--;
      result++;
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
