const text = "I´m Ironman";

test("It should has the word Ironman", () => {
  expect(text).toMatch(/Ironman/);
});

// Test con arrays

const fruits = ["apple", "banana", "orange"];

test("It should has the word banana", () => {
  expect(fruits).toContain("banana");
});

// Test con numeros

test("Es mayor que", () => {
  expect(5).toBeGreaterThan(4);
});

// Test con booleanos

test("Es verdadero", () => {
  expect(true).toBeTruthy();
});

// Test con callbakcs

const reverse = (str, cb) => {
  cb(str.split("").reverse().join(""));
};

test("It should reverse the string", () => {
  reverse("Ironman", (str) => {
    expect(str).toBe("namnorI");
  });
});

// Test con promesas

const reverse2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(new Error("El parametro debe ser un string"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("Resuelvo una promesa", () => {
  return reverse2("Ironman").then((str) => {
    expect(str).toBe("namnorI");
  });
});

// Test con async/await

test("Resuelvo async/await", async () => {
  const str = await reverse2("Ironman");
  expect(str).toBe("namnorI");
});

// Funciones antes o despues de cada prueba

// afterEach(() => {
//   console.log("afterEach");
// });

// afterAll(() => {
//   console.log("afterAll");
// });

// beforeEach(() => {
//   console.log("beforeEach");
// });

// beforeAll(() => {
//   console.log("beforeAll");
// });
