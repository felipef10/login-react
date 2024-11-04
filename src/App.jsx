import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Paginaprincipal from './paginaprincipal'

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
    //if (usuario == 'felipef' && contraseña == '1234') {
     // alert('Ingresaste con exito')
     // setLogueado(true)
    //} else {
     // alert('Usuario o contraseña incorrecta')
    //}
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

  if (logueado) {
    return < Paginaprincipal />
  }

  return (
    <>
      <h1>Inicio se sesion</h1>
      <input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
      <input placeholder='Contraseña' type="password" name="clave" id="clave" value={clave} onChange={cambiarContraseña} />
      <button onClick={Ingresar}>Ingresar</button>

    </>
  )
}

export default App
