const { calcArea } = require("./triangle");

describe("----Triangle-Area----", () => {
  describe("calcArea function: ", () => {
    test("should be defined", () => {
      expect(calcArea).toBeDefined();
    });

    test("should return area of triangle from 3 side arguments", () => {
      expect(calcArea(2, 4, 5)).toBe(3.8);
      expect(calcArea(5, 9, 6)).toBe(14.1);
    });

    test("should not work if arguments are not typeof number", () => {
      expect(() => calcArea("3", "4", "5")).toThrow();
      expect(() => calcArea(3, 4)).toThrow();
      expect(() => calcArea(5, 7, "11")).toThrow();
    });

    test("return value should be typeof number", () => {
      expect(typeof calcArea(6, 8, 10)).toBe("number");
    });

    test("should not work if any argument is less than 0", () => {
      expect(() => calcArea(-5, -10, -9)).toThrow();
      expect(() => calcArea(-1, 2, 3)).toThrow();
      expect(() => calcArea(2, 3, -9)).toThrow();
    });

    test("should not work if any argument is equal 0", () => {
      expect(() => calcArea(9, 8, 0)).toThrow();
      expect(() => calcArea(0, 4, 3)).toThrow();
      expect(() => calcArea(6, 0, 4)).toThrow();
      expect(() => calcArea(0, 0, 0)).toThrow();
    });

    test("should not work if length of one side is not less than sum of other sides", () => {
      expect(() => calcArea(10, 2, 3)).toThrow();
      expect(() => calcArea(5, 2, 3)).toThrow();
      expect(() => calcArea(1, 1, 2)).toThrow();
    });
  });
});
