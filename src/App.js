// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Perfil from './componentes/Perfil';
import Contador from './componentes/contador'
// import { computeHeadingLevel } from '@testing-library/react';
// import Perfiles from './perfiles.json'

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
        empresa='Fundador de Moure Dev'
        resena='Ha desarrollado más de 100 aplicaciones y ha trabajado en diferentes proyectos nacionales e internacionales'
        />
      <Perfil
        nombre='Facundo Garcia Martoni'
        pais='Argentina'
        imagen='facundo'
        cargo='Profesional en Tecnología'
        empresa='Youtuber en Tecnologia'
        resena='Tiene un canal de Youtube con mas de 6.81K suscriptores, donde publica videos sobre diversos temas, incluyendo historias de hackers, explicaciones de virus informáticos y más.  También tiene una presencia activa en GitHub '
      />
      <Perfil
        nombre='Simplilearn'
        pais='India'
        imagen='simplilearn'
        cargo='Profesional en Tecnología'
        empresa='Simplilearn '
        resena='Simplilearn le ofrece a sus usuarios unos 400 cursos diferentes acreditados. Los cursos son de alta calidad, y le ofrecen a los estudiantes información útil y que impulsará su carrera. Dicho esto, algunas clases de la plataforma son de pago, y el número de cursos en sí, puede dejar mucho que desear.'
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