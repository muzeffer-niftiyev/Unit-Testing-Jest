const checkIsNumber = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
};

const sum = (a, b) => {
  checkIsNumber(a, b);
  return a + b;
};

const subtract = (a, b) => {
  checkIsNumber(a, b);
  return a - b;
};

const multiply = (a, b) => {
  checkIsNumber(a, b);
  return a * b;
};

const divide = (a, b) => {
  checkIsNumber(a, b);
  if (b === 0) throw new Error("Can't divide to 0");

  return a / b;
};

module.exports = { sum, subtract, multiply, divide };
