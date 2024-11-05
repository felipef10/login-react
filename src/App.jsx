import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Paginaprincipal from './paginaprincipal';
import AgregarInventario from './AgregarInventario';

function App() {

  const [usuario, setUsuario] = useState('')
  const [clave, setContraseña] = useState('')
  const [logueado, setLogueado] = useState(false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)

  }

  function cambiarContraseña(evento) {
    setContraseña(evento.target.value)

  }

  async function Ingresar() {
    const peticion = await fetch('http://localhost:3000/login?usuario=' + usuario + '&clave=' +clave,{credentials: 'include'})
    if(peticion.ok){
      setLogueado(true)
    } else{
      alert('Datos incorrectos')
    }
   
  }

async function validar(){
  const peticion = await fetch('http://localhost:3000/validar', {credentials: 'include'})
  if(peticion.ok){
    setLogueado(true)
  } 
}

useEffect(()=>{
  validar()
},[])

return (
  <Router>
    <Routes>
      {logueado ? (
        <>
          <Route path="/" element={<Paginaprincipal />} />
          <Route path="/agregar-inventario" element={<AgregarInventario />} />
        </>
      ) : (
        <Route
          path="/"
          element={
            <div>
              <h1>Inicio de sesión</h1>
              <input placeholder="Usuario" type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
              <input placeholder="Contraseña" type="password" name="clave" id="clave" value={clave} onChange={cambiarContraseña} />
              <button onClick={Ingresar}>Ingresar</button>
              <p>¿No tienes cuenta? <a href="crear_usuario.html">Crea una aquí</a></p>
            </div>
          }
        />
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);
}

export default App
