# React-Ej3: Componente Saludo con Estado

Este proyecto es un componente React que utiliza el **hook useState** para gestionar el estado y mostrar un mensaje dinámico cuando se hace clic en un botón.

## Descripción

El componente `Saludo` recibe una propiedad (`myFriend`) y muestra un mensaje de saludo. Al hacer clic en el botón, se actualiza el estado y se añade un mensaje adicional al saludo.

### Comportamiento

1. Inicialmente, se muestra el saludo con el valor pasado como **prop**.
2. Al hacer clic en el botón, se agrega un mensaje adicional al saludo: `"(From changed state)"`.

## Código del componente

```jsx
import React, { useState } from 'react';

const Saludo = (props) => {
    const [msj, setMsj] = useState('');

    const handleClick= () => {
        setMsj("(From changed state)");
    }

    return (
        <>
        <h1>
            Hello {props.myFriend} {msj} !
        </h1>
        <button onClick={handleClick}>Click me</button>
        </>
    );
};

export default Saludo;
```

## Uso del componente

### Ejemplo de uso

Puedes utilizar el componente `Saludo` en tu aplicación de React de la siguiente manera:

```jsx
import React from 'react';
import Saludo from './Saludo'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div>
      <h1>Componente de Saludo con Estado</h1>
      <Saludo myFriend="World" />  {/* Salida inicial: Hello World ! */}
    </div>
  );
};

export default App;
```

### Propiedades

- `myFriend`: Es una propiedad de tipo **string** que contiene el nombre o mensaje inicial del saludo.

### Estado

- **msj**: Es una variable de estado que se inicializa como un string vacío. Se actualiza al hacer clic en el botón y se agrega el mensaje `"(From changed state)"` al saludo.

## Tecnologías utilizadas

- **React** (con **Hooks**)

## Cómo usar el proyecto

1. Clona este repositorio:
   ```bash
   git clone https://github.com/santinohamada/React-Ej3.git
   ```
2. Entra en el directorio del proyecto:
   ```bash
   cd React-Ej3
   ```
3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
4. Inicia la aplicación:
   ```bash
   npm start
   ```

## Futuras mejoras

- Añadir validaciones a las propiedades.
- Permitir que el mensaje dinámico cambie más de una vez o que se reemplace.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar o añadir nuevas características, no dudes en enviar un **pull request**.

## Autor

Creado por [santinohamada](https://github.com/santinohamada).
