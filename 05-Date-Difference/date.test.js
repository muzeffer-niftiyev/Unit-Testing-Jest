const { getDaysDifference } = require("./date");

describe("----Date-Diffrence----", () => {
  describe("getDaysDifference function: ", () => {
    test("should be defined", () => {
      expect(getDaysDifference).toBeDefined();
    });

    test("should return expected day value", () => {
      expect(
        getDaysDifference(new Date(2022, 1, 10), new Date(2023, 1, 10))
      ).toBe(365);

      expect(
        getDaysDifference(new Date(2023, 5, 20), new Date(2023, 5, 23))
      ).toBe(3);

      expect(
        getDaysDifference(new Date(2023, 10, 1), new Date(2023, 11, 10))
      ).toBe(39);
    });

    test("should be called with 2 date arguments", () => {
      const startDate = new Date(2023, 4, 15);
      const endDate = null;

      expect(() => getDaysDifference(startDate, endDate)).toThrow();
    });

    test("should not work if end date is eralier than start date", () => {
      const startDate = new Date(2023, 3, 5);
      const endDate = new Date(2023, 2, 5);

      expect(() => getDaysDifference(startDate, endDate)).toThrow();
    });

    test("should get valid date values", () => {
      expect(() =>
        getDaysDifference(new Date("hello"), new Date("world"))
      ).toThrow();

      expect(() =>
        getDaysDifference(new Date(undefined), new Date(undefined))
      ).toThrow();

      expect(() =>
        getDaysDifference(new Date(10000), new Date(null))
      ).toThrow();
    });
  });
});
