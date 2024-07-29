const convertCurrency = (amount, course) => {
  if (typeof amount !== "number" || typeof course !== "number") {
    throw new Error("Arguments must be typeof number!");
  }

  if (amount < 0) {
    throw new Error("Amount can't be negative!");
  }

  if (course <= 0) {
    throw new Error("Course can't be negative or zero!");
  }

  return +(amount * course).toFixed(2);
};

module.exports = { convertCurrency };
