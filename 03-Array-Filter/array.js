const getEvenNumbers = (array) => {
  if (!array) {
    throw new Error("Please include the array!");
  }

  if (array.length === 0) {
    throw new Error("Array must have at least 1 number!");
  }

  if (!Array.isArray(array)) {
    throw new Error("Function works with only arrays!");
  }

  return array.filter((items) => typeof items === "number" && items % 2 === 0);
};

module.exports = { getEvenNumbers };
