const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("~~ polybius() tests by CH ~~", () => {
  //It returns false if the given alphabet isn't exactly 26 characters long.
  describe("returning false if alphabet is not 26 characters", () => {
    it("should return false if alphabet is not exactly 26 characters", () => {
      const message = "yet another something to say";
      const alphabet = "thisnotgood";
      const actual = substitution(message, alphabet);

      expect(actual).to.be.false;
    });
  });

  //It correctly translates the given phrase, based on the alphabet given to the function.
  describe("correctly translating the phrase based on given alphabet", () => {
    it("should correctly translate", () => {
      const message = "you talk and talk and talk";
      const alphabet = "zaqxswcdevfrbgtnhymjukilop";
      const actual = substitution(message, alphabet);
      const expected = "otu jzrf zgx jzrf zgx jzrf";

      expect(actual).to.equal(expected);
    });
  });

  //It returns false if there are any duplicate characters in the given alphabet.
  describe("returning false for duplicate characters", () => {
    it("should return false if duplicate characters are used in alphabet", () => {
      const message = "still talking there, huh bud?";
      const alphabet = "aaaaaaaaaaaakkkkkkkkkkkkee";
      const actual = substitution(message, alphabet);

      expect(actual).to.be.false;
    });
  });

  //It maintains spaces in the message, before and after encoding or decoding.
  describe("maintaining spaces", () => {
    it("should maintain spaces throughout the message", () => {
      const message = "okay i think we're done for today";
      const alphabet = "zaqxswcdevfrbgtnhymjukilop";
      const actual = substitution(message, alphabet);
      const expected = "tfzo e jdegf isys xtgs wty jtxzo";

      expect(actual).to.equal(expected);
    });
  });

  //It ignores capital letters.
  describe("ignoring capital letters", () => {
    it("should ignore capital letters", () => {
      const message = "SERIOUSLY!!";
      const alphabet = "zaqxswcdevfrbgtnhymjukilop";
      const actual = substitution(message, alphabet);
      const expected = "msyetumro";

      expect(actual).to.equal(expected);
    });
  });
});
