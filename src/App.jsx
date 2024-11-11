import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import './App.css';
import Paginaprincipal from './paginaprincipal';
import AgregarInventario from './AgregarInventario';
import RegistrarUsuarios from './RegistrarUsuarios';
import Inventario from './Inventario';


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
    const peticion = await fetch('http://localhost:3000/login?usuario=' + usuario + '&clave=' + clave, { credentials: 'include' })
    if (peticion.ok) {
      setLogueado(true)
      obtenerUsuarios();
    } else {
      alert('Datos incorrectos')
    }

  }

  async function validar() {
    const peticion = await fetch('http://localhost:3000/validar', { credentials: 'include' })
    if (peticion.ok) {
      setLogueado(true)
    }
  }

  useEffect(() => {
    validar()
  }, [])

  return (
    <Router>
      <Routes>
        {logueado ? (
          <>
            <Route path="/" element={<Paginaprincipal />} />
            <Route path="/AgregarInventario" element={<AgregarInventario />} />
            <Route path="/Inventario" element={<Inventario />} />
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
                <p>
                  ¿No tienes cuenta? <Link to="/registro">Crea una aquí</Link>
                </p>
              </div>
            }
          />
        )}
        <Route path="/registro" element={<RegistrarUsuarios />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App
