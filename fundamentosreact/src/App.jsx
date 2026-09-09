import { useState } from 'react';
import './App.css';
import Header from './components/header'
import Formulario from './components/formulario'
import Footer from './components/footer'
import ForAcademi  from './components/formularioAcademico';
import FormExp  from './components/formularioExperiencia';
import Vista from './components/vista';


function App() {
  const[paso,setPaso] = useState(1);
  const [persona,setPersona] = useState ({
    //Datos academicos
    foto:null,
    nombre: "",
    edad: "",
    ciudad: "",
    correo: "",
    programa: "",
    ficha: "",
    jornada: "Mañana",

    //Datos de estudios
    nivel: "",
    institucion: "",
    titulo: "",
    anio: "",
    cursos: [],

    //Datos de experiencia
    experiencias: [],
  });

//conectar react con flask
    const guar_hoja_v = async () => {
      
      try{

        const datos_api = {
          nombre:persona.nombre,
          edad:persona.edad,
          ciudad:persona.ciudad,
          correo:persona,
          fotografia:persona,
          programa:persona,
          ficha:persona.ficha,
          jornada:persona.jornada
        };

        const respuesta =  await fetch("http://127.0.0.1:5000/api/registro-hoja-vida",
          {
            method: "POST",
            headers:{
              "Content-Type":"application/json"
            },

            body: JSON.stringify(datos_api)

          }
        );

        const resultado = await respuesta.json();

        console.log("respuesta realizada", resultado);


      }catch (error){
        console.error("error al conectar con flask",error);
      }
    };



  return (
    <>
  <div className="interfaz-global">
      <Header />
      <main className="seccion-principal">
        <div className="contenedor">
    
          {
            paso == 1 && (
            <Formulario siguiente = {() => setPaso(2)}
              persona = {persona}
              setpersona = {setPersona}/>
          )}
         
          {
           
           paso === 2 && (
              <ForAcademi 
              anterior ={() => setPaso(1)} 
              siguiente ={() => setPaso (3)}
              persona = {persona}
              setpersona = {setPersona}/>
          )}

          {
            paso == 3 && (
              <FormExp anterior ={() => setPaso(2)} 
              siguiente ={() => setPaso (4)}
              persona = {persona}
              setpersona = {setPersona}/>
          )}
          {
            paso == 4 && (
              <Vista anterior={() => setPaso(3)}
              guar_hoja_V = {guar_hoja_v}
              persona={persona}/>
            )
          }



        </div>
      </main>
      
      <Footer />
    </div>
    </>
  )
}

export default App
