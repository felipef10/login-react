import { useState } from 'react'
import { Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Paginaprincipal() {


  return (

    <>
      <h2> Pagina principal </h2>
      <div className="button-container">
        <Link to="/agregar-inventario">
          <button>Agregar Inventario Nuevo</button>
        </Link>
        <Link to="/inventario">
          <button>Inventario</button>
        </Link>
        <Link to="/inventario-vendido">
          <button>Inventario Vendido</button>
        </Link>

      </div>
    </>

  );


}

export default Paginaprincipal
