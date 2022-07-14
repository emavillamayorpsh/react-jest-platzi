Necesitamos instalar las dependencias necesarias para hacer test a los componentes, estas son:
```
npm i -D jest enzyme enzyme-adapter-react-16
```

* enzyme: Es una librería creada por airbnb para facilitar el test a componentes en React
* enzyme-adapter-react-16: Es un adaptador para la versión de React que estemos utilizando.
* 
Más información en la [documentación](https://github.com/enzymejs/enzyme)

#### Configuración en package.json

Le pasamos la configuración del adaptador al projecto.
```
"jest": {
  "setupFilesAfterEnv": [
    "<rootDir>/src/__test__/setupTest.js"
  ]
}
```

#### Diferencias entre Enzyme y React Testing Libery
* **Enzyme**: Esta es una herramienta de testing que se enfoca en verificar que un componente de react se comporte de la manera adecuada dependiendo de la situacion, y tambien podemos verificar si un componente de react esta siendo correcta renderizado y utilizado por el usuario, pero no es su fuerte.

* **React Testing Libery**: Esta es igual otra herramienta de testing que se enfoca en verificar que un componente esta siendo renderizado correctamente en el DOM y que el usuario lo esta usando adecuadamente, pero no podermos verificar su comportamiento interno, por ejemplo no podemos acceder a las props o el state del componente de react testeado.
