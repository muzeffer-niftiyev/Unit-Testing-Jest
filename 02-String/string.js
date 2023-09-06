const reverseString = (str) => {
  if (typeof str !== "string") {
    throw new Error("Function works only for strings");
  }

  if(!str.trim()) {
    throw new Error('Enter some string!');
  }

  return str.trim().split("").reverse().join("");
};


module.exports = {reverseString}