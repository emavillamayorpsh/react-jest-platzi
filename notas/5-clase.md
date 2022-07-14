#### Probando promesas .then
``` 
test('Probar una promesa', ()=> {
    return reverseString2('hola')
        .then(string => {
            expect(string).toBe('aloh')
        })
})
``` 

#### Probando promesa await
``` 
test('Probar async/await', async ()=>{
    const string = await reverseString2('hola');
    expect(string).toBe('aloh')
})
``` 

#### Correr algo antes y después de nuestras pruebas
``` 
afterEach( () => console.log('Despues de cada prueba') );
afterAll( () => console.log('Despues de todas las pruebas') );
beforeEach( () => console.log('antes de cada prueba') );
beforeAll( () => console.log('antes de todas las pruebas') );
``` 

