const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct) {
    if (direct === undefined) {
      direct = true;
    }
    this.direct = direct;
  }

  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let offset = 0;
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const charNumber = str.charCodeAt(i);
      if (charNumber < 65 || charNumber > 90) {
        result += str[i];
        offset++;
        continue;
      }
      result += String.fromCharCode(
        ((charNumber - 65 + key.charCodeAt((i - offset) % key.length) - 65) %
          26) +
          65
      );
    }
    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let offset = 0;
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const charNumber = str.charCodeAt(i);
      if (charNumber < 65 || charNumber > 90) {
        result += str[i];
        offset++;
        continue;
      }
      result += String.fromCharCode(
        ((charNumber -
          65 +
          26 -
          (key.charCodeAt((i - offset) % key.length) - 65)) %
          26) +
          65
      );
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
