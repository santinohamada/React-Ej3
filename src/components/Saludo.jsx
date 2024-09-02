import React, { useState } from 'react';
const Saludo = (props) => {
    const [msj, setMsj] = useState('');

    const handleClick= ()=>{
        setMsj("(From changed state)")
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