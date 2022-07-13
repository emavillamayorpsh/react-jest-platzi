const cities = ["City of Mexico", "Bogota", "Lima", "Buenos Aires"];

const randomString = () => {
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  return randomCity;
};

const reverseStringTwo = (str) => {
  return new Promise((res, rej) => {
    if (!str) {
      return rej(Error("Error"));
    }

    res(str.split("").reverse().join(""));
  });
};

module.exports = randomString;
