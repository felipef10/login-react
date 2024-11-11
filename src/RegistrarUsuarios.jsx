import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'



function RegistrarUsuarios() {

  const [usuarioregistro, setUsuarioregistro] = useState('')
  const [claveregistro, setContraseñaregistro] = useState('')
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([])
  

  function cambiarUsuarioregistro(evento) {
    setUsuarioregistro(evento.target.value)

  }

  function cambiarContraseñaregistro(evento) {
    setContraseñaregistro(evento.target.value)

  }

  async function Registrar() {

    console.log(usuarioregistro, claveregistro);

    const peticion = await fetch('http://localhost:3000/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usuario: usuarioregistro,
        clave: claveregistro
      }),
      credentials: 'include'
    });

    if (peticion.ok) {
      alert('Usuario Registrado')
      recargarAhora()
      navigate('/');
      obtenerUsuarios();
    } else {
      alert('Usuario no Registrado')
    }
  }

  async function obtenerUsuarios() {
    const peticion = await fetch('http://localhost:3000/usuarios', { credentials: 'include' })
    if (peticion.ok) {
      const respuesta = await peticion.json()
      setUsuarios(respuesta)
    }
  }

  async function eliminarUsuario(id) {
    const peticion = await fetch('http://localhost:3000/usuarios?id='+id, { credentials: 'include', method: 'Delete' })
    if (peticion.ok) {
      alert('usuario eliminado')
      obtenerUsuarios();
    }
  }

  useEffect(() => {
    obtenerUsuarios();
  }, [])

  return (

    <div>
      <h1>Registro</h1>
      <input placeholder="Usuario" type="text" name="usuario" id="usuario" value={usuarioregistro} onChange={cambiarUsuarioregistro} />
      <input placeholder="Contraseña" type="password" name="clave" id="clave" value={claveregistro} onChange={cambiarContraseñaregistro} />
      <button onClick={Registrar}>Registrar</button>


      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Clave</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>{
          usuarios.map(usuario => (
            <tr key={usuario.id}>
              <th>{usuario.id}</th>
              <th>{usuario.usuario}</th>
              <th>{usuario.clave}</th>
              <th>
                <button
                  onClick={() =>{eliminarUsuario(usuario.id) }}
                  >X</button>
              </th>
            </tr>
          ))
        }
        </tbody>
      </table>

    </div>
  );
}


export default RegistrarUsuarios 
