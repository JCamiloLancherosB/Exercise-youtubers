import React from 'react';
import '../estilos/Perfil.css';
// import Perfiles from '../perfiles.json'

function Perfil(props){
    // const [numero, setNumero] = useState(0);

    // const aumentar = () => {
    //     setNumero(numero + 1);
    // };
    // const perfilIndividual = Object.keys(Perfiles);
    // const perfil = Object.values(Perfiles);
    // console.log(perfil[0])

    // for(let i=0; i<perfilIndividual.length; i++) {

    
    // }
    
    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
            src={require(`../../Imgs/perfil-${props.imagen}.png`)}
            alt='Foto de desarrollador' />
        <div className='contenedor-texto-perfil'>
            <p className='nombre-perfil'>
            <strong>{props.nombre}</strong> en {props.pais}
            </p>        
        <p className='cargo-perfil'>
            {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-perfil'>"{props.resena}" </p>
        </div>

        { /* BOTONES REDES SOCIALES */}
        <div id="botones">            
        <button className="redes" onClick={() => {
            window.open(props.linkedin, "_blank");
        }}>
        </button>
        <button className="redes" onClick={() => {
            window.open(props.youtube, "_blank");
        }}>
        </button>
        <button className="redes" onClick={() => {
            window.open(props.x, "_blank");
        }}>
        </button>   
        </div>         
        
    </div>
    );
}
export default Perfil;