const { convertCurrency } = require("./currency");

describe("----Currency-Converter----", () => {
  describe("Currency converter function: ", () => {
    test("should be defined", () => {
      expect(convertCurrency).toBeDefined();
    });

    test("should return expected value", () => {
      expect(convertCurrency(100, 1.7)).toBe(170);
      expect(convertCurrency(500, 0.5)).toBe(250);
      expect(convertCurrency(10, 1)).toBe(10);
    });

    test("return value should be typeof number", () => {
      expect(typeof convertCurrency(40, 1.3)).toBe("number");
    });

    test("return value should have max 2 digits after dot", () => {
      expect(convertCurrency(123, 1.3)).toBe(159.9);
      expect(convertCurrency(12, 0.7)).toBe(8.4);
    });

    test("if amount is 0, result must always be 0", () => {
      expect(convertCurrency(0, 1.2)).toBe(0);
      expect(convertCurrency(0, 0.9)).toBe(0);
      expect(convertCurrency(0, 100)).toBe(0);
    });

    test("should not work if amount is not number", () => {
      expect(() => convertCurrency("100", 1.8)).toThrow();
      expect(() => convertCurrency(true, 1.2)).toThrow();
      expect(() => convertCurrency(1.2)).toThrow();
    });

    test("should not work if course is not number", () => {
      expect(() => convertCurrency(100, "1.2")).toThrow();
      expect(() => convertCurrency(100, undefined)).toThrow();
    });

    test("should not work if amount is less than 0", () => {
      expect(() => convertCurrency(-50, 1.2)).toThrow();
      expect(() => convertCurrency(-1, 1)).toThrow();
    });

    test("should not work if course is less or equal to 0", () => {
      expect(() => convertCurrency(100, -1)).toThrow();
      expect(() => convertCurrency(100, -10)).toThrow();
      expect(() => convertCurrency(100, 0)).toThrow();
    });
  });
});
