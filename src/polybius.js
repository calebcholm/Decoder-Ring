// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //create variables for identifying cipher encode and decode
  const encoding = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };

  const decoding = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function polybius(input, encode = true) {
    //change input to lowercase
    input = input.toLowerCase();

    //if encoding input, map input for special characters using charCodeAt()
    if (encode) {
      let codedInput = [...input].map((char) => {
        if (char.charCodeAt() < 97 || char.charCodeAt() > 122) return char;
        return encoding[char];
      });
      return codedInput.join("");
    } else {
      //if input code is not even, return false
      if (Math.abs(input.split(" ").join("").length % 2) == 1) return false;
      const decodingArray = [];
      //for decoding, loop through by two. if a space is found, keep it and move back one space to get the next group of two numbers
      for (let i = 0; i < input.length; i = i + 2) {
        let currentNumber = input[i];
        let nextNumber = input[i + 1];
        if (currentNumber === " ") {
          decodingArray.push(currentNumber);
          i = i - 1;
        } else {
          decodingArray.push(`${currentNumber}${nextNumber}`);
        }
      }
      //map through new decodingArray to keep spaces and match grouped numbers with their corresponding letter per decoding variable
      let decodedMessage = decodingArray.map((code) => {
        if (code === " ") return code;
        return decoding[code];
      });
      return decodedMessage.join("");
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
