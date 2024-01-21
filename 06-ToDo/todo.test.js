const { addTask, deleteTask, markTaskAsDone, tasks } = require("./todo");

describe("----To-Do----", () => {
  test("all functions should be defined", () => {
    expect(addTask).toBeDefined();
    expect(deleteTask).toBeDefined();
    expect(markTaskAsDone).toBeDefined();
  });

  describe("addTask function: ", () => {
    let array = tasks.slice();

    test("should add an object of task to the array", () => {
      expect(addTask("task", true)).toHaveLength(array.length + 1);
      expect(addTask("task", false)).toHaveLength(array.length + 2);
    });

    test("task description must be typeof string", () => {
      expect(() => addTask(15, true)).toThrow();
      expect(() => addTask(undefined, false)).toThrow();
    });

    test("task marked status must be typeof boolean", () => {
      expect(() => addTask("task", 15)).toThrow();
      expect(() => addTask("task", "true")).toThrow();
    });
  });

  describe("deleteTask function: ", () => {
    test("should remove an object of task from the array", () => {
      const resultArray = [{ task: "Go to cinema", marked: true }];

      expect(deleteTask(0)).toEqual(expect.arrayContaining(resultArray));
      expect(deleteTask(0)).toEqual(expect.arrayContaining([]));
    });

    test("should work with argument typeof number", () => {
      expect(() => deleteTask("0")).toThrow();
      expect(() => deleteTask(undefined)).toThrow();
    });

    test("should not work with index that is not exist in array", () => {
      expect(() => deleteTask(10)).toThrow();
    });
  });

  describe("markTaskAsDone function: ", () => {
    test("should change marked status of array element to true", () => {
      let res = [
        { task: "task", marked: true },
        { task: "task", marked: true },
      ];

      expect(markTaskAsDone(0)).toEqual(expect.arrayContaining(res));
    });

    test("should work with argument typeof number", () => {
      expect(() => markTaskAsDone(true)).toThrow();
      expect(() => markTaskAsDone(" ")).toThrow();
    });

    test("should not work with index that is not exist in array", () => {
      expect(() => markTaskAsDone(10)).toThrow();
    });
  });
});
