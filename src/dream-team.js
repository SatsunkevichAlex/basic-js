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
  if (!Array.isArray(members))
  {
    return false
  }

  var strings = members.filter(t => typeof t === 'string').map(it => it.toLowerCase().trim());
  var mapped = strings.map(it => it.split("")[0]);
  var sorted = mapped.sort().join("");
  return sorted.toUpperCase()
}

module.exports = {
  createDreamTeam
};
