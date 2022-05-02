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
  alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  constructor(straight) {
    this.straight = straight;
  }

  encrypt(phrase, key) {
    let args = [...arguments];
    if (args.length < 2 || 
      args.some(it => typeof it === 'undefined')){
      throw new Error('Incorrect arguments!');
    }

    let correction = 0;
    phrase = phrase.toLowerCase();
    key = key.toLowerCase();
    let result = "";
    let normalizedKey = key.repeat(Math.ceil(phrase.length / key.length));
    for (let i = 0; i < phrase.length; i++) {
      let currChar = phrase[i];
      if (currChar === " ") {
        correction++;
      }

      if (this.alphabet.indexOf(phrase[i]) === -1) {
        result += phrase[i];
        continue;
      }

      let keyChar = normalizedKey[i - correction];
      let indexInArrayKeyChar = this.alphabet.indexOf(keyChar);
      let indexInArrayChar = this.alphabet.indexOf(currChar);
      let newIndex = indexInArrayChar + indexInArrayKeyChar;
      if (newIndex > this.alphabet.length - 1) {
        newIndex -= this.alphabet.length;
      }
      result += this.alphabet[newIndex];
    }

    if (this.straight === false) {
      return result.split('').reverse().join("").toUpperCase();
    }
    return result.toUpperCase();
  }

  decrypt(phrase, key) {
    let args = [...arguments];
    if (args.length < 2 || 
      args.some(it => typeof it === 'undefined')){
      throw new Error('Incorrect arguments!');
    }

    let correction = 0;
    phrase = phrase.toLowerCase();
    key = key.toLowerCase();
    let result = "";
    let normalizedKey = key.repeat(Math.ceil(phrase.length / key.length));
    for (let i = 0; i < phrase.length; i++) {
      let currChar = phrase[i];
      if (currChar === " ") {
        correction++;
      }

      if (this.alphabet.indexOf(phrase[i]) === -1) {
        result += phrase[i];
        continue;
      }

      let keyChar = normalizedKey[i - correction];
      let indexInArrayKeyChar = this.alphabet.indexOf(keyChar);
      let indexInArrayChar = this.alphabet.indexOf(currChar);
      let newIndex = indexInArrayChar - indexInArrayKeyChar;
      if (newIndex < 0) {
        newIndex += this.alphabet.length;
      }
      result += this.alphabet[newIndex];
    }

    if (this.straight === false) {
      return result.split('').reverse().join("").toUpperCase();
    }
    return result.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};


 //const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);

 //console.log(directMachine.encrypt('Samelengthkey', 'Samelengthkey'));// => 'AEIHQX SX DLLU!'
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));// => 'ATTACK AT DAWN!'
// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'));// => '!ULLD XS XQHIEA'
// console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));// => '!NWAD TA KCATTA'