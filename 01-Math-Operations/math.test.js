const { sum, subtract, multiply, divide } = require("./math");

describe("----Math----", () => {
  describe("Sum function: ", () => {
    test("should sum positive values as expected", () => {
      expect(sum(1, 1)).toBe(2);
      expect(sum(100, 150)).toBe(250);
      expect(sum(15, 0)).toEqual(15);
    });

    test("should sum negative values as expected", () => {
      expect(sum(-3, -2)).toBe(-5);
      expect(sum(-90, -70)).toBe(-160);
      expect(sum(-100, -400)).toEqual(-500);
    });

    test("should sum negative and positive values as expected", () => {
      expect(sum(-10, 10)).toBe(0);
      expect(sum(-65, 60)).toBe(-5);
      expect(sum(-40, 50)).toBe(10);

      expect(sum(50, -20)).toBe(30);
      expect(sum(30, -35)).toBe(-5);
    });

    test("should sum float values as expected", () => {
      expect(sum(0.5, 5.5)).toBe(6);
      expect(sum(9.9, 1.5)).toBe(11.4);
      expect(sum(0.1, 0.2)).toBeCloseTo(0.3);

      expect(sum(9.5, -9.5)).toBe(0);
      expect(sum(-100.5, 50.6)).toBe(-49.9);

      expect(sum(-0.3, -0.5)).toBe(-0.8);
    });

    test("should sum float and integer values as expected", () => {
      expect(sum(5, 0.5)).toBe(5.5);
      expect(sum(-3, 2.5)).toBe(-0.5);
      expect(sum(-10, -5.5)).toBe(-15.5);
      expect(sum(20, -10.5)).toBe(9.5);
    });

    test("return value should be correct to compared value", () => {
      expect(sum(2, 2)).toBeGreaterThan(0);
      expect(sum(5, -9)).toBeLessThan(0);
      expect(sum(0.2, 0.9)).toBeGreaterThanOrEqual(1.1);
      expect(sum(-100, 100)).toBeLessThanOrEqual(0);
    });

    test("should only sum values of type number", () => {
      expect(sum(20, 20)).toBe(40);
      expect(() => sum("20", 20)).toThrow();
      expect(() => sum(20, "20")).toThrow();
    });
  });

  describe("Subtract function: ", () => {
    test("should subtract positive values as expected", () => {
      expect(subtract(10, 2)).toBe(8);
      expect(subtract(5, 5)).toBe(0);
      expect(subtract(2, 0)).toBe(2);
      expect(subtract(10, 100)).toBe(-90);
    });

    test("should subtract negative values as expected", () => {
      expect(subtract(-10, -2)).toBe(-8);
      expect(subtract(-30, 0)).toBe(-30);
      expect(subtract(-100, -400)).toEqual(300);
    });

    test("should subtract negative and positive values as expected", () => {
      expect(subtract(-100, 80)).toBe(-180);
      expect(subtract(-42, 42)).toBe(-84);

      expect(subtract(5, -5)).toBe(10);
      expect(subtract(10, -25)).toBe(35);
    });

    test("should subtract float values as expected", () => {
      expect(subtract(0.1, 1.1)).toBe(-1);
      expect(subtract(6.6, 1.6)).toBe(5);
      expect(subtract(0.3, 0.2)).toBeCloseTo(0.1);

      expect(subtract(1.2, -1.5)).toBe(2.7);
      expect(subtract(-100.5, 50.5)).toBe(-151);

      expect(subtract(-1.2, -1.8)).toBeCloseTo(0.6);
    });

    test("should subtract float and integer values as expected", () => {
      expect(subtract(4, 0.1)).toBe(3.9);
      expect(subtract(-100, 50.5)).toBe(-150.5);
      expect(subtract(-19, -1.5)).toBe(-17.5);
      expect(subtract(220, -200.5)).toBe(420.5);
    });

    test("return value should be correct to compared value", () => {
      expect(subtract(10, 10)).toBeGreaterThanOrEqual(0);
      expect(subtract(10, -10)).toBeGreaterThan(10);
      expect(subtract(0.1, 0.9)).toBeLessThan(0);
      expect(subtract(3, -9.9)).toBeGreaterThanOrEqual(5);
    });

    test("should only subtract values of type number", () => {
      expect(subtract(10, 2)).toBe(8);
      expect(() => subtract(undefined, 5)).toThrow();
      expect(() => subtract(null, "5")).toThrow();
    });
  });

  describe("Multiply function:", () => {
    test("multiply of positive values should always be positive", () => {
      expect(multiply(5, 5)).toBe(25);
      expect(multiply(10, 3)).toBe(30);
      expect(multiply(1, 8)).toBe(8);
    });

    test("multiply of negative values should always be positive", () => {
      expect(multiply(-7, -5)).toBe(35);
      expect(multiply(-100, -1)).toBe(100);
    });

    test("multiply of positive and negative values should always be negative", () => {
      expect(multiply(9, -5)).toBe(-45);
      expect(multiply(-1, 1.1)).toBe(-1.1);
    });

    test("multiply of any value and 0 should always be 0", () => {
      expect(multiply(9, 0)).toBe(0);
      expect(multiply(-5, 0)).toBeCloseTo(0);
      expect(multiply(0, 1)).toBe(0);
      expect(multiply(0, -1.5)).toBeCloseTo(0);
    });

    test("return value should be correct to compared value", () => {
      expect(multiply(0, 0)).toBeLessThanOrEqual(0);
      expect(multiply(-5, -5)).toBeGreaterThanOrEqual(0);
      expect(multiply(10, 10)).toBeGreaterThan(10);
      expect(multiply(10, -5.5)).toBeLessThan(0);
    });

    test("should only multiply values of type number", () => {
      expect(multiply(1, 1)).toBe(1);
      expect(() => multiply("hello", 0)).toThrow();
      expect(() => multiply(undefined, "1")).toThrow();
    });
  });

  describe("Divide function:", () => {
    test("division of positive values should always be positive", () => {
      expect(divide(6, 3)).toBe(2);
      expect(divide(6, 5)).toBe(1.2);
    });

    test("division of negative values should always be positive", () => {
      expect(divide(-10, -7)).toBeCloseTo(1.428);
      expect(divide(-100, -10)).toBe(10);
    });

    test("division of negative and positive values should always be negative", () => {
      expect(divide(12, -6)).toBe(-2);
      expect(divide(-100, 50)).toBe(-2);
    });

    test("return value should be correct to compared value", () => {
      expect(divide(6, 2.5)).toBeLessThan(6);
      expect(divide(-3, 3)).toBeGreaterThan(-3);
      expect(divide(0, 100)).toBeLessThanOrEqual(0);
    });

    test("should not divide to 0", () => {
      expect(() => divide(100, 0)).toThrow();
      expect(() => divide(-10, 0)).toThrow();
    });

    test("should only divide values of type number", () => {
      expect(() => divide(null, 2)).toThrow();
      expect(() => divide("2", undefined)).toThrow();
    });
  });
});