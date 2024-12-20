import './AgregarInventario.css'

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
                    <option value="categoria1">Maculino</option>
                    <option value="categoria2">Femenino</option>

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
                <button type="reset">Borrar</button>
            </div>

        </>

    );


}


export default AgregarInvantario
