# Preparación del entorno con Jest
Escribimos en la terminal el siguiente comando:

```console
npm install -D jest
```
> -D es lo mismo que --save-dev.
> Ambos flags guardan la dependencia como una de desarrollo.

### Trabajando con los basicos de Jest
Vamos a estar trabajando con la función “test”, esta recibe dos parametros:
* Un string que describe lo que va a pasar.
* Función anonima en la cual viene lo que se va a probar.

### La función expect
Contiene dos parametros:
* Valor de entrada.
* Con lo que el primer parametro va a ser comparado.
```
const text = "I´m Ironman";
test("It should has the word Ironman", () => {
  expect(text).toMatch(/Ironman/);
});
```
> Código listo para hacer test

Ahora para hacer test de nuestro código tenemos que correr el comando test, para eso se tiene que armar en nuestro package.json
```
"scripts": {
"test": "jest"
},
```
### Output
```console
PASS src/**test**/global.test.js
✓ It should has the word Ironman (4ms)

Test Suites: 1 passed, 1 total
Tests: 1 passed, 1 total
Snapshots: 0 total
Time: 1.663s
Ran all test suites.
```

### Resolver error de types
Instalar la siguiente dependencia: 
```console
npm i -D @types/jest
```
