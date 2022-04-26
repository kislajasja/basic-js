const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = options.additionRepeatTimes
    ? Array(options.additionRepeatTimes)
        .fill(String(options.addition))
        .join(options.additionSeparator ? options.additionSeparator : '|')
    : options.addition
    ? options.addition
    : '';
  return Array(options.repeatTimes)
    .fill(str + addition)
    .join(options.separator ? options.separator : '+');
}

module.exports = {
  repeater
};
