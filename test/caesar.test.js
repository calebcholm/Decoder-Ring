const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("~~ caesar() tests by CH ~~", () => {
  //It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
  describe("shift value", () => {
    it("should return false if the shift value is equal to 0", () => {
      const message = "whatever you want to say";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift value is less than -25", () => {
      const message = "something else you want to say";
      const shift = -30;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift value is greater than 25", () => {
      const message = "really say something nice here... seriously";
      const shift = 250;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift value is not present", () => {
      const message = "you talk a lot";
      const shift = null;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  //It ignores capital letters.
  describe("ignoring capital letters", () => {
    it("should ignore capital letters", () => {
      const message = "SOMETHING something, YELLING LOUDLY";
      const shift = 5;
      const actual = caesar(message, shift);
      const expected = "xtrjymnsl xtrjymnsl, djqqnsl qtziqd";

      expect(actual).to.equal(expected);
    });
  });

  //When encoding, it handles shifts that go past the end of the alphabet.
  describe("handles shifting around the alphabet", () => {
    it("should shift letters at the end of the alphabet around to the beginning", () => {
      const message = "other wordzzz";
      const shift = 10;
      const actual = caesar(message, shift);
      const expected = "ydrob gybnjjj";

      expect(actual).to.equal(expected);
    });
  });

  //It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
  describe("maintain spaces and special characters", () => {
    it("should keep spaces and special characters before and after encoding or decoding", () => {
      const message = "th!s |z cr@y";
      const shift = 9;
      const actual = caesar(message, shift);
      const expected = "cq!b |i la@h";

      expect(actual).to.equal(expected);
    });
  });
});
