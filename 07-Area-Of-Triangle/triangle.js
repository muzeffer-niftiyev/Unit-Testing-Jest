const calcArea = (a, b, c) => {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    throw new Error("Side length values must be typeof number!");
  }

  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error("Side lengths can't be negative number or zero!");
  }

  if (!(a + b > c) || !(b + c > a) || !(a + c > b)) {
    throw new Error("there can't be a triangle with this sides!");
  }

  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return +area.toFixed(1);
};

module.exports = { calcArea };
