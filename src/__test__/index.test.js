const randomString = require("../index");

describe("Probar funcionalidades randomStrings", () => {
  test("randomString() should return a string", () => {
    expect(typeof randomString()).toBe("string");
  });
  test("Comprobar que no existe una ciudad", () => {
    expect(randomString()).not.toMatch(/Cali/);
  });
});
