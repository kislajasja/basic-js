const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || !members.length) {
    return false;
  }
  return members
    .filter((m) => typeof m === 'string')
    .map((m) => m.toUpperCase().trim())
    .sort()
    .map((m) => m[0])
    .join('');
}

module.exports = {
  createDreamTeam
};
