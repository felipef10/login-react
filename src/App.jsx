import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Paginaprincipal from './paginaprincipal'

function App() {

  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [logueado, setLogueado] = useState(false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)

  }

  function cambiarContraseña(evento) {
    setContraseña(evento.target.value)

  }

  function Ingresar() {
    if (usuario == 'felipef' && contraseña == '1234') {
      alert('Ingresaste con exito')
      setLogueado(true)
    } else {
      alert('Usuario o contraseña incorrecta')
    }
  }

  if (logueado) {
    return < Paginaprincipal />
  }

  return (
    <>
      <h1>Inicio se sesion</h1>
      <input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
      <input placeholder='Contraseña' type="password" name="contraseña" id="contraseña" value={contraseña} onChange={cambiarContraseña} />
      <button onClick={Ingresar}>Ingresar</button>

    </>
  )
}

export default App
