# Formas de crear Mock Functions

* jest.fn(): Este método es la forma principal de crear una función de imitación, si declaramos la función de imitación de esta manera, no es obligatorio añadir una implementación (conocida como la función que espiamos también), pero como es normal añadimos la implementación, y para ello, tenemos que pasar la función como parámetro del método.
  Ejemplo:
  ```
  const mockFunction = jest.fn((a,b) => {
    return a + b
  })
  ```
 * jest.spyOn(): Este método es otra forma de crear una función mock, sin embargo, este se enfoca en mockear los métodos de alguna instancia creada como de su clase principal, y este método solo puede ser usado para ellas, cabe mencionar que no podemos usar este método para el modelo de la clase original, solo para sus instancias, este método recibe dos parámetros, el primero es la instancia declarada como de la clase principal y el segundo es el nombre del método que vamos a espiar.
  Ejemplo:
  ```
  class Computer {

  constructor(brand, size, price, ram) {
    this.brand = brand;
    this.size = size;
    this.price = price;
    this.ram = ram;
  }

  getInformation(){

    return {
      brand: this.brand,
      size: this.size,
      price: this.price,
      ram: this.ram,
    }

  }

  setInformation(brand, size, price, ram) {
    
    this.brand = brand;
    this.size = size;
    this.price = price;
    this.ram = ram;

    return {
      brand: this.brand,
      size: this.size,
      price: this.price,
      ram: this.ram,
    }

  }
}

  const MackBookPro = new Computer('Apple', '3000px', 5000, 36)

  const getInformationSpier = jest.spyOn(MackBookPro, 'getInformation')
  const setInformationSpier = jest.spyOn(MackBookPro, 'setInformation')

  test('testing the methods of the class computer', () => {

    expect(MackBookPro.getInformation()).toEqual({
      brand: 'Apple',
      size: '3000px',
      price: 5000,
      ram: 36,
    })

    expect(MackBookPro.setInformation('Toshiba', '2500px', 1000, 20)).toEqual({
      brand: 'Toshiba',
      size: '2500px',
      price: 1000,
      ram: 20,
    })

    expect(getInformationSpier).toHaveBeenCalled()

    expect(setInformationSpier).toHaveBeenCalledTimes(1)

  })
  ```
* jest.mock(): Este método sirve para burlarse automáticamente de todas las funciones (sólo funciones autosuficientes, no métodos de alguna clase) que tenga un determinado fichero, sin necesidad de burlarse de todas y cada una de las funciones de ese determinado fichero, este método recibe dos parámetros (el segundo parámetro no es obligatorio), el primero es el fichero cuyas funciones queremos burlar, y el segundo es una función que se ejecutará en lugar de todas las funciones que hayamos definido dentro del otro fichero y que queramos probar, si sólo utilizamos el primer parámetro, entonces cuando utilicemos las funciones del fichero importado, éstas no devolverán nada, ya que las funciones fueron burladas, y si queremos obtener un determinado valor después de utilizar las funciones del fichero importado, tenemos que utilizar el segundo parámetro, pero éste tiene que devolver una función burlada utilizando jest. fn().
  Ejemplo 1:
  ```
  // anotherFile.js

  const addition = (a, b) => {
    return a + b;
  }

  const subtraction = (a, b) => {
    return a - b;
  }

  module.exports = {
    addition, 
    subtraction,
  }
  ```
  ```
  jest.mock('./anotherFile')

  const additionFunction = require('./anotherFile').addition
  const subtractionFunction = require('./anotherFile').subtraction

  additionFunction(1,2)
  additionFunction(3,4)

  subtractionFunction(4,3)
  subtractionFunction(2,1)

  test('testing mathematical functions', () => {

  console.log(additionFunction.mock)
  console.log(subtractionFunction.mock)

  expect(additionFunction).toHaveBeenCalled()
  expect(subtractionFunction).toHaveBeenCalled()
  })
  ```
* jest.createMockFromModule(): Este método (también conocido bajo el alias .genMockFromModule()), nos permite transformar las funciones burladas de otro fichero por jest. mock() en funciones normales, de esta manera, serán funciones normales o funciones no burladas y funciones burladas al mismo tiempo, lo que significa que podemos manejarlas como si fueran funciones normales, y además utilizar las propiedades y métodos de una función burlada, esto es útil ya que cuando burlamos todas las funciones de un determinado fichero, estas funciones no pueden ser utilizadas como funciones normales, por ejemplo, esto hace que no obtengamos lo que devuelven las funciones burladas por sí mismas, ya que al ser burladas, este método solo debe recibir un parámetro, este parámetro es el archivo cuyas funciones queremos burlar, entonces para des-bloquear la función de ese archivo, tenemos que invocar esas funciones, y usarlas como variables, y luego debemos usar jest. fn(), y como parámetro de jest.fn(), tenemos que implementar el código de la función original que fue mockeada, y ahora, podemos usar las funciones como si fueran funciones normales y como funciones mockeadas, además de lo que dijimos anteriormente, si estamos exportando diferentes tipos de datos de un determinado archivo, también podemos usarlos en otro archivo, al usar este método, sólo necesitamos llamar a esos datos, pero el método trata los diferentes tipos de variables de diferentes maneras, aquí explicamos eso:

    * Función: Crea una nueva función, y esta será burlada, por lo que los parámetros de dicha función serán eliminados y por lo tanto cuando intentemos acceder a los parámetros, estos no aparecerán, y cuando la función lo sea, esta devolverá undefined. Estos cambios también se aplican a las funciones async.
    * Clase: Crea una nueva clase, se mantendrá la estructura de la clase original, pero se burlarán todas las propiedades y los métodos de sus instancias, por lo tanto lo que ocurría con la función normal al ser burlada también ocurrirá con los métodos de la clase burlada.

    * Objeto: Crea un nuevo objeto, que será exactamente igual al objeto original, por lo que se mantienen las claves del objeto y se burlan los valores de las claves.

    * Array: Crea un nuevo array vacío, ignorando el original.

    * Primitiva: Crea una nueva variable con el mismo valor primitivo que la variable original.
    Ejemplo 1:
    ```
    // anotherFile.js

    const addition = (a, b) => {
      return a + b;
    }

    const subtraction = (a, b) => {
      return a - b;
    }

    module.exports = {
      addition, 
      subtraction,
    }
    ```
    ```
    const mathematicalFunctions = jest.createMockFromModule('./anotherFile')

    mathematicalFunctions.addition = jest.fn((a, b) => {
      return a + b;
    })

    mathematicalFunctions.subtraction = jest.fn((a, b) => {
      return a - b;
    })

    const additionFunction = mathematicalFunctions.addition
    const subtractionFunction = mathematicalFunctions.addition

    test('testing an addition function', () => {

      console.log(additionFunction(12,23))
      console.log(additionFunction.mock)

      console.log(subtractionFunction(20,5))
      console.log(subtractionFunction.mock)
    })
    ```
    Ejemplo 2:
    ```
    const typesOfData = jest.createMockFromModule('./anotherFile');

    test('should run example code', () => {

      expect(typesOfData.theFunction.name).toEqual('workSomethingOut');
      expect(typesOfData.theFunction.length).toEqual(0);

      expect(typesOfData.theClass.constructor.name).toEqual('User');
      expect(typesOfData.theClass.toGreet.name).toEqual('toGreet');

      expect(typesOfData.theObject).toEqual({
        brand: 'Apple',
        price: 1000,
      });

      expect(typesOfData.theArray.length).toEqual(0);

      expect(typesOfData.theNumber).toEqual(12);

      expect(typesOfData.theString).toEqual('RAM');

      expect(typesOfData.theBoolean).toEqual(true);
    });
    ```

















