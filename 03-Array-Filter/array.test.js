const { getEvenNumbers } = require("./array");

describe("----Array-Filter----", () => {
  describe("Get Even Function:", () => {
    let array;

    beforeEach(() => {
      array = [1, 2, 3, 4, 10, 15, undefined, 0, "", "hello", null];
    });

    test("the function must be defined", () => {
      expect(getEvenNumbers).toBeDefined();
    });

    test("should filter values that is not number", () => {
      expect(getEvenNumbers(array)).not.toContain("");
      expect(getEvenNumbers(array)).not.toContain(undefined);
      expect(getEvenNumbers(array)).not.toContain(null);
    });

    test("should filter odd numbers", () => {
      expect(getEvenNumbers(array)).not.toContain(1);
      expect(getEvenNumbers(array)).not.toContain(3);
      expect(getEvenNumbers(array)).not.toContain(15);
    });

    test("should return array with expected numbers", () => {
      const filtered = [2, 4, 10, 0];

      expect(getEvenNumbers(array)).toEqual(filtered);
      expect(getEvenNumbers([10, 12, 14])).toEqual([10, 12, 14]);
    });

    test("should not work with no array", () => {
      expect(() => getEvenNumbers()).toThrow();
    });

    test("array should have at least 1 item", () => {
      expect(() => getEvenNumbers([])).toThrow();
    });

    test("should work with only arrays", () => {
      expect(() => getEvenNumbers(10, 20, 30)).toThrow();
      expect(() => getEvenNumbers({})).toThrow();
    });
  });
});
