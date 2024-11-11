import { Link } from 'react-router-dom';
import './App.css'

function Paginaprincipal() {


  return (

    <>
      <h2> Pagina principal </h2>
      <div className="button-container">
        <Link to="/AgregarInventario">
          <button>Agregar Inventario Nuevo</button>
        </Link>
        <Link to="/Inventario">
          <button>Inventario General</button>
        </Link>
        <Link to="/inventario-vendido">
          <button>Inventario Vendido</button>
        </Link>

      </div>
    </>

  );


}

export default Paginaprincipal
