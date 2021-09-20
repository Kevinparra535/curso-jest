const cities = [
  "New York",
  "Paris",
  "London",
  "Istanbul",
  "Berlin",
  "Barcelona",
  "Rome",
  "Amsterdam",
  "Madrid",
  "Tokyo",
  "Sydney",
  "Melbourne",
  "Cairo",
  "Moscow",
  "Mumbai",
  "Shanghai",
  "Beijing",
  "Seoul",
  "Osaka",
  "Taipei",
  "Hong Kong",
  "Bangkok",
  "Jakarta",
  "Manila",
  "Ho Chi Minh City",
  "Bangalore",
  "Delhi",
  "Kolkata",
  "Chennai",
  "Buenos Aires",
  "Sao Paulo",
  "Lima",
  "Bogota",
  "Lagos",
  "Kinshasa",
  "Johannesburg",
  "Khartoum",
  "Dhaka",
  "Cairo",
  "Abu Dhabi",
  "Riyadh",
  "Tehran",
  "Baghdad",
];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

const reverse2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(new Error("El parametro debe ser un string"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

module.exports = randomString;