// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //create real alphabet string
  const charCode = Array.from(Array(26)).map((element, index) => index + 97);
  let actualAlphabet = charCode.map((x) => String.fromCharCode(x));
  //create empty array for coded alphabet
  let code = [];

  function substitution(input, alphabet, encode = true) {
    //return false if no alphabet, alphabet is not 26 characters or alphabet has duplicates
    if (!alphabet || alphabet.length !== 26) return false;
    //create new set to check for unique characters, return false if not 26 characters
    let checkDuplicates = new Set(alphabet);
    if ([...checkDuplicates].length !== 26) return false;

    //split alphabet characters
    alphabet.split('');

    //if encoding, loop through and create key value pairs for real alphabet and coded alphabet
    if (encode) {
      for (let i = 0; i < 25; i++) {
        code[actualAlphabet[i]] = alphabet[i];
      }
      //opposite key value pairs for decoding
    } else {
      for (let i = 0; i < 25; i++) {
        code[alphabet[i]] = actualAlphabet[i];
      }
    }
    //create message variable to change input to lowercase, split characters and map to update message with coded characters but ignore spaces
    let message = input.toLowerCase().split('').map((character) => {
      if (character === ' ') return ' ';
      return code[character];
    });
    //join message back together
    return message.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
