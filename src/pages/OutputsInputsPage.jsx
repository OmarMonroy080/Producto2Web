import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListarVentas, EliminarVenta } from '../../ConsumoAPI/Ventas/VentasAPI.jsx'; // Importamos EliminarVenta

const OutputsInputsPage = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    // Llamamos a la función ListarVentas para obtener los datos de la API
    ListarVentas()
      .then((data) => {
        // Actualizamos el estado con los datos de ventas recibidos
        setVentas(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEliminarVenta = async (idVenta) => {
    try {
      await EliminarVenta(idVenta);
      // Si la eliminación es exitosa, actualizamos el estado de ventas para reflejar el cambio
      setVentas((prevVentas) => prevVentas.filter((venta) => venta.idVenta !== idVenta));
    } catch (error) {
      // Manejar el error si es necesario
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="mb-3">Ventas</h1>


      {/* modal */}
      

      <div className="table-responsive shadow">
        <table
          id="MyTable"
          className="table table-striped table-hover table-borderless align-middle text-center m-0"
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre del mueble</th>
              <th>Nombre del usuario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta) => (
              <tr key={venta.idVenta}>
                <td>{venta.idVenta}</td>
                <td>{venta.nombreMueble}</td>
                <td>{venta.nombreUsuario}</td>
                <td className="d-flex justify-content-center g-3">
                  <Link to={`/venta/${venta.idVenta}`} className="btn btn-info mx-1">
                    <i className="fas fa-info-circle"></i> Detalles
                  </Link>
                  <Link to={`/venta/editar/${venta.idVenta}`} className="btn btn-warning mx-1">
                    <i className="fas fa-edit"></i> Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => handleEliminarVenta(venta.idVenta)} // Agregamos la funcionalidad de eliminar
                  >
                    <i className="fas fa-minus-circle"></i> Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OutputsInputsPage;
