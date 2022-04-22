// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //return false if shift isn't present, is 0, > 25 or < -25
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    //if decoding, shift opposite direction
    if (!encode) shift *= -1;

    //change input to lowercase
    input = input.toLowerCase();

    //create variable to store completed message
    let message = "";

    //loop through input
    for (let i = 0; i < input.length; i++) {
      let character = input[i];

      //should match only letters
      if (character.match(/[a-z]/)) {
        //add shift value to character at index
        let codedCharacter = input.charCodeAt(i) + shift;

        //wrap around alphabet
        if (codedCharacter > 122) {
          codedCharacter = codedCharacter - 26;
        }
        if (codedCharacter < 97) {
          codedCharacter = codedCharacter + 26;
        }

        //new variable for storing updated character
        let newCharacter = String.fromCharCode(codedCharacter);

        //add new characters to message
        message += newCharacter;
      } else {
        message += character;
      }
    }
    return message;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
