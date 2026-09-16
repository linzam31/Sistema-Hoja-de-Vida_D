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
  const [id,setId] = useState(null);
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
    const confirmar_registro = async () => {
      
      try{

        const datos_basicos = {
          nombre:persona.nombre,
          edad:persona.edad,
          ciudad:persona.ciudad,
          correo:persona.correo,
          fotografia:persona.foto,
          programa:persona.programa,
          ficha:persona.ficha,
          jornada:persona.jornada
        };

        const respuesta_basicos =  await fetch("http://127.0.0.1:5000/api/registro-hoja-vida",
          {
            method: "POST",
            headers:{
              "Content-Type":"application/json"
            },

            body: JSON.stringify(datos_basicos)

          }
        );
        const resultado_basicos = await respuesta_basicos.json();
        console.log("respuesta realizada", resultado_basicos);

        const id = resultado_basicos.id 
        console.log("ID de la respuesta:", id); // Mostrar el ID en la consola
                
        setId(id); // Guardar el ID de la respuesta en el estado
       
        const datos_estudio = {
          nivel:persona.nivel,
          institucion:persona.institucion,
          titulo:persona.titulo,
          anio_graduacion:persona.anio,
          hoja_vida_id: id 
        };

        const respuesta_estudios =  await fetch(`http://127.0.0.1:5000/api/registro-estudios/${id}`,
          {
            method: "POST",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify(datos_estudio)
          }
        );
        const resultado_estudios = await respuesta_estudios.json();
        console.log("respuesta realizada", resultado_estudios);
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
              confirmar = {confirmar_registro}
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
