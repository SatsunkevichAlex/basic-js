const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN2 = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }

  if (sampleActivity.trim().length === 0){
    return false;
  }

  if (typeof sampleActivity === 'number') {
    return false;
  }

  if (isNaN(sampleActivity)) {
    return false;
  }

  sampleActivity = parseFloat(sampleActivity);

  if (sampleActivity > 15 || sampleActivity <= 0) {
    return false;
  }

  let k = LN2 / HALF_LIFE_PERIOD;
  let ln = Math.log(MODERN_ACTIVITY / sampleActivity);
  let t = ln / k;
  let result = Math.ceil(t);
  return result;
}

module.exports = {
  dateSample
};
