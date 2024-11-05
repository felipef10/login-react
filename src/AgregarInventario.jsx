import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Paginaprincipal from './paginaprincipal'

function AgregarInvantario() {
  

  return (

    <>
    <h2>Agregar Inventario Nuevo</h2>
    <section>
    <img src="upload-icon.png" alt="Subir imagen del producto" />
    <input type="file" name="imagen-producto" accept="image/*" />
</section>
<div class="selectors">
    <label for="nombre">Nombre</label>
    <select id="nombre" name="nombre">
        <option value="nombre1">Nombre 1</option>
        <option value="nombre2">Nombre 2</option>
        
    </select>

    <label for="categoria">Categoría</label>
    <select id="categoria" name="categoria">
        <option value="categoria1">Categoría 1</option>
        <option value="categoria2">Categoría 2</option>
       
    </select>

    <label for="marca">Marca</label>
    <select id="marca" name="marca">
        <option value="marca1">Marca 1</option>
        <option value="marca2">Marca 2</option>
        
    </select>

    <label for="precio">Precio</label>
    <select id="precio" name="precio">
        <option value="precio1">Precio 1</option>
        <option value="precio2">Precio 2</option>
        
    </select>
</div>

<div class="buttons">
    <button type="submit">Guardar</button>
    <button type="reset">Resetear</button>
</div>

    </>

  );


}


export default AgregarInvantario
