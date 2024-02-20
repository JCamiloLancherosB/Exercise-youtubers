import React, {useState} from 'react';

export default function Contador(visitas){
    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        setNumero(numero + 1);
    };

    const disminuir = () => {
        setNumero(numero - 1);
    };
    return (
        <div id='contador'>
            <h1>Nuevas visitas: <p>0</p></h1>
            <p>Suscriptores nuevos: {numero}</p>
            <button class="aumDis" onClick={aumentar}>Suscribir</button>
            <button class="aumDis" onClick={disminuir}>Desuscribir</button>
        </div>
    );
};