const validateEmail = (email) => {
  if (typeof email !== "string") {
    throw new Error("Function works only for strings!");
  }

  return email.includes("@") && !email.startsWith('@') && email.endsWith(".com");
};

module.exports = { validateEmail };
