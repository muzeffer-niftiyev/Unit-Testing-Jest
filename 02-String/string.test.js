const { reverseString } = require("./string");

describe("----Reverse-String----", () => {
  describe("reverseString function:", () => {
    test("should return reversed string", () => {
      expect(reverseString("hello")).toBe("olleh");
      expect(reverseString("USA")).toBe("ASU");
      expect(reverseString("_JS_")).toBe("_SJ_");
    });

    test("should remain spaces between words", () => {
      expect(reverseString("a b c")).toBe("c b a");
    });

    test("should remove spaces from start and end of string", () => {
      expect(reverseString("  a b  ")).toBe("b a");
      expect(reverseString("    a    ")).toBe("a");
    });

    test("should not work for empty string", () => {
      expect(() => reverseString("")).toThrow();
      expect(() => reverseString(" ")).toThrow();
      expect(() => reverseString("         ")).toThrow();
    });

    test("shoul only work with string values", () => {
      expect(() => reverseString(15)).toThrow();
      expect(() => reverseString(undefined)).toThrow();
      expect(() => reverseString(null)).toThrow();
    });
  });
});
