const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (typeof date === 'undefined'){
    return 'Unable to determine the time of year!'
  }

  let parsed = Date.parse(date);
  if (isNaN(parsed))
  {
    var error = new Error("Invalid date!");
    throw error;
  }  

  try {
    date.getMonth();
    date.getUTCMonth()
  } catch {
    var error = new Error("Invalid date!");
    throw error;
  }

  let month = date.getMonth() + 1;
  if (month >= 3 && month <= 5)
  {
    return 'spring';
  }
  if (month >= 5 && month <= 8)
  {
    return 'summer';
  }
  if (month >= 9 && month <= 11){
    return 'autumn';
  }
  else return 'winter';
}

module.exports = {
  getSeason
};