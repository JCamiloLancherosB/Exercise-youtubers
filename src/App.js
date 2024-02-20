// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Perfil from './componentes/Perfil';
import Contador from './componentes/contador'
import { computeHeadingLevel } from '@testing-library/react';
import Perfiles from './perfiles.json'

function App() {
  const [contador, setContador] = useState(0);
  // const perfilIndividual = Object.keys(Perfiles);
  // const perfil = Object.values(Perfiles);
  // console.log(perfil[0])

  // for(let i=0; i<perfilIndividual.length; i++) {

    
  // // }
  // const numeroPerfiles = Object.keys(Perfiles);
  // const perfil = Object.values(Perfiles);
  // console.log(perfil[0].nombre)
  // console.log(perfil[1].nombre)
  // return (
  //   <div>
  //     <h1>Profesional</h1>
  //     {numeroPerfiles.map(key => {
  //       <Perfil />
  //     })}
  //   </div>
  // )
  


//   const [datosCargados, setDatosCargados] = useState(false);

//   useEffect(()=>{
//     const cargarDatos = async () => {
//       try { 
//         setDatosCargados(true);        
//       } catch (error) {
//         console.error('Error al cargar los datos');
//       }
//     }
//     cargarDatos();
// }, []);

  return (
    <div className="App">
    <div className='contenedor-principal'>
      <h1>Mis desarrolladores favoritos son</h1>
      <div id="brais" className="profile">
      <Perfil 
        nombre='Brais Moure'
        pais='España'
        imagen='brais'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
        linkedin='https://www.linkedin.com/in/braismoure/'
        youtube='https://www.youtube.com/@mouredev'
        twitter='https://twitter.com/mouredev/'
      />
      </div>
      <div id="otro" className="profile">
      <Perfil 
        nombre='Brais Moure'
        pais='España'
        imagen='brais'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
        linkedin='https://www.linkedin.com/in/braismoure/'
        youtube='https://www.youtube.com/@mouredev'
        twitter='https://twitter.com/mouredev/'
      />
      </div>
      <div id="otro2" className="profile">
      <Perfil 
        nombre='Brais Moure'
        pais='España'
        imagen='brais'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
        linkedin='https://www.linkedin.com/in/braismoure/'
        youtube='https://www.youtube.com/@mouredev'
        twitter='https://twitter.com/mouredev/'
      />
      </div>
      

    </div> 
    <div id="contadores">
    <Contador />
    <Contador />
    <Contador />
    </div>
    
    {/* <h1>El número es: {contador}</h1>
    <button onClick={()=>{setContador(contador + 1)}}>Aumentar</button>
    <button onClick={()=>{setContador(contador - 1)}}>Disminuir</button>         */}
    </div>
        )  
      };

export default App;