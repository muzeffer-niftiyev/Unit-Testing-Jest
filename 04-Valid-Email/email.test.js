const { validateEmail } = require("./email");

describe("----Valid-Email----", () => {
  describe("validateEmail function: ", () => {
    let email;

    beforeEach(() => {
      email = "my-email@gmail.com";
    });

    test("should be defined", () => {
      expect(validateEmail).toBeDefined();
    });

    test("should check email validation status and return boolean", () => {
      expect(validateEmail(email)).toBeTruthy();

      expect(validateEmail("email.com")).toBeFalsy();
      expect(validateEmail("email.az")).toBeFalsy();
      expect(validateEmail("email.com.@")).toBeFalsy();
    });

    test('should check if email includes "@" ', () => {
      expect(validateEmail("email@mail.com")).toBeTruthy();
      expect(validateEmail("email.mail.com")).toBeFalsy();
    });

    test("returned string shouldn't start with '@' ", () => {
      expect(validateEmail("@.email.com")).toBeFalsy();
      expect(validateEmail("@.com")).toBeFalsy();
      expect(validateEmail("@")).toBeFalsy();
    });

    test('should check if email includes ".com" ', () => {
      expect(validateEmail("email@.com")).toBeTruthy();
      expect(validateEmail("me@.ru")).toBeFalsy();
      expect(validateEmail("email@gmail.az")).toBeFalsy();
    });

    test('returned string should end with ".com" ', () => {
      expect(validateEmail("mail@.gmail.com")).toBeTruthy();
      expect(validateEmail(".com.@.email")).toBeFalsy();
      expect(validateEmail("gmail.com.@")).toBeFalsy();
      expect(validateEmail("gamil@.mailcom")).toBeFalsy();
    });

    test("should be called with only strings", () => {
      expect(() => validateEmail(100)).toThrow();
      expect(() => validateEmail([email, mail])).toThrow();
      expect(() => validateEmail({})).toThrow();
      expect(() => validateEmail(null)).toThrow();
    });
  });
});
