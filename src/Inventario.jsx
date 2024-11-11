import './InventarioGeneral.css'

function Inventario() {


    return (

        <>
            <h2>Inventario General</h2>


        <section class="search-bar">
          <label for="search">Inventario</label>
          <input type="text" id="search" name="search" placeholder="Buscar productos..." />
          <button type="submit">🔍</button> 
        </section>


        <section class="filters">
          <label for="nombre">Nombre</label>
          <select id="nombre" name="nombre">
            <option value="nombre1">Nombre 1</option>
            <option value="nombre2">Nombre 2</option>
          </select>

          <label for="marca">Marca</label>
          <select id="marca" name="marca">
            <option value="marca1">Marca 1</option>
            <option value="marca2">Marca 2</option>
          </select>

          <label for="categoria">Categoría</label>
          <select id="categoria" name="categoria">
            <option value="categoria1">Categoría 1</option>
            <option value="categoria2">Categoría 2</option>
          </select>

          <label for="precio">Rango de precio</label>
          <select id="precio" name="precio">
            <option value="rango1">Rango 1</option>
            <option value="rango2">Rango 2</option>
          </select>

            <button type="submit">Filtrar</button>
          </section>

          <section class="product-gallery">
            <div class="product-card">
              <img src="imagen-producto1.png" alt="Imagen del producto 1" />
              <p>Producto 1</p>
            </div>
            <div class="product-card">
              <img src="imagen-producto2.png" alt="Imagen del producto 2" />
              <p>Producto 2</p>
            </div>
            <div class="product-card">
              <img src="imagen-producto3.png" alt="Imagen del producto 3" />
              <p>Producto 3</p>
            </div>

          </section>

          <section class="pagination">
            <button>&lt; Anterior</button>
            <span>Página 1 de 3</span>
            <button>Siguiente &gt;</button>
          </section>
  </>

);


}




export default Inventario