# Funciones para probar números, strings, arrays, objetos y booleanos
Estructura general para ejectutar un test
```
test('Título que va a describir el test a realizar', () => {
    expect().<-- METODO A EJECUTAR -->
})
```

### Numeros
```
test('Dos mas dos', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // Para testear que el valor de prueba retorne siempre un valor definido
    expect(value).toBe(4);
    expect(value).toEqual(4);
});
```
* #### Numeros Flotantes
    ```
    test('Testeo de números flotantes', () => {
    const value = 0.1 + 0.2;
    // Para testear un flotante se debe usar la siguiente línea, ya que si se implementa
	// la función <-- toBe --> retortana una prueba fallida ya que JavaScript redondea
	 // con un pequeño margen de error.
    expect(value).toBeCloseTo(0.3);
    });
    ```
### Strings
```
* Los strings pueden evaluarse mediante expresiones regulares o simplemente entre comillas (" ")
test('Para testear que algo no se encuentre en un string', () => {
    expect('platzi').not.toMatch(/n/);
});
  
test('A la grande le puse cuca', () => {
    expect('grande').toMatch("rande");
});
```
### Arrays e iterables
* #### Array
    ```
    const frutas= ['Manzana', 'Pera', 'Banana']

    test('¿Tenemos una banana en el array?', () => {
    expect(fruits).toContain('Banana')
    })
    ```
* #### Objetos
    ```
    const personajes = {
        uno: "Homero",
        dos: "Marge",
        tres: "Lisa",
        cuatro: "Bart",
        cinco: "Maggie"
    }

    test('¿Existe el persona Bart en el objeto?', () => {
        expect(personajes.cuatro).toContain('Bart')
    })
    ```
### Comprobar booleanos, undefined y null
* toBeNull comprueba que el testeo solo debe ser null.
* toBeUndefined comprueba que el testeo solo debe undefined.
* toBeDefined comprueba que el testeo debe ser lo opuesto a undefined. Es estado de lo que se prueba debe estar definido.
* toBeTruthy comprueba que el testeo solo debe true.
* toBeFalsy comprueba que el testeo solo debe false.
### Extra
Para negar cualquier tipo de testeo y esperar el resultado opuesto se debe usar not antes del método a ejecutar.

