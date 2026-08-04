import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header'
import Formulario from './components/formulario'
import Footer from './components/footer'
import ForAcademi  from './components/formularioAcademico';
import FormExp  from './components/formularioExperiencia';


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
    cursos: "",

    //Datos de experiencia
    empresa: "",
    cargo: "",
    experiencia: "",
    funciones: "",
    habilidades: "",

  })



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
              persona = {persona}
              setpersona = {setPersona}/>
          )}



        </div>
      </main>
      
      <Footer />
    </div>
    </>
  )
}

export default App
