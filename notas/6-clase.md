#### Watch y Coverage 
index.js
``` 
const videogames = [
  "Sekiro",
  "Call of Duty",
  "Death Stranding",
  "Gears 5",
  "Devil May Cry"
];

const randomString = () => {
  const string = videogames[Math.floor(Math.random() * videogames.length)];
  return string;
};

module.exports = randomString;
``` 

index.test.js
``` 
const randomStrings = require("../index");

test("It should return a string", () => {
  expect(typeof randomStrings()).toBe("string");
});
``` 

Haciendo uso de jest podemos hacer test a un solo archivo, esto lo hacemos con el siguiente comando:
``` 
jest src/__test__/index.test.js
``` 

Para evitar errores tenemos que instalar jest de forma global.
``` 
sudo npm i -g jest
``` 

Con describe creamos un suite en el cual podemos correr muchos test y mantenerlos mejor organizados.

index.test.js
``` 
const randomStrings = require("../index");

describe("Test randomString function", () => {
  test("It should return a string", () => {
    expect(typeof randomStrings()).toBe("string");
  });
  test("Check if a videogame does not exits", () => {
    expect(randomStrings()).not.toMatch(/Halo/);
  });
});
``` 
Hasta ahora hemos corrido nuestros test despues de cada cambio, esto no tiene por que ser así, jest nos permite correr un comando para quedarse escuchando a todos los cambios sin necesidad de correr un mismo comando con cada iteración.

package.json
``` 
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
},
``` 

Si queremos saber que tanto hemos probado nuestro projecto podemos correr
``` 
  jest --coverage
``` 
Esto nos da un output en consola sobre el estado de nuestros archivos, pero si queremos verlo con más detalle, podemos acceder a un archivo html que se crea en una carpeta coverage en el subdirectorio Icov-report.






