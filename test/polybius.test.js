const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("~~ polybius() tests by CH ~~", () => {
  //When encoding, it translates the letters i and j to 42.
  describe("when encoding", () => {
    it("should translate letters i and j to 42", () => {
      const message = "julius";
      const actual = polybius(message);
      const expected = "425413425434";

      expect(actual).to.equal(expected);
    });
  });

  //When decoding, it translates 42 to (i/j).
  describe("when decoding", () => {
    it("should translate 42 to (i/j)", () => {
      const message = "425413425434";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });
  });

  //It ignores capital letters.
  describe("ignoring capital letters", () => {
    it("should ignore capital letters", () => {
      const message = "I LIKE TO talk LOUDLY";
      const actual = polybius(message);
      const expected = "42 13425251 4443 44111352 134354411345";

      expect(actual).to.equal(expected);
    });
  });

  //It maintains spaces in the message, before and after encoding or decoding.
  describe("maintaining spaces", () => {
    it("should maintain spaces in the message", () => {
      const message = "is this too many tests? Never!";
      const actual = polybius(message);
      const expected = "4234 44324234 444343 23113345 4451344434? 3351155124!";

      expect(actual).to.equal(expected);
    });
  });
});
