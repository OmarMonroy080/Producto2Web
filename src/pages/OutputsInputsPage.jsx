import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListarVentas, EliminarVenta } from '../../ConsumoAPI/Ventas/VentasAPI.jsx';
import Swal from 'sweetalert2';

const OutputsInputsPage = () => {
  const [ventas, setVentas] = useState([]);
  const [datosCategoria, setDatosCategoria] = useState({
    id: '',
    nombre: '',
  });

  useEffect(() => {
    fetchVentas();
  }, []);

  const fetchVentas = async () => {
    try {
      const data = await ListarVentas();
      setVentas(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEliminarVenta = async (idVenta) => {
    try {
      const result = await Swal.fire({
        title: '¿Seguro de eliminar la venta?',
        icon: 'question',
        text: 'No se podrá deshacer esta acción.',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
      });

      if (result.isConfirmed) {
        await EliminarVenta(idVenta);
        setVentas((prevVentas) => prevVentas.filter((venta) => venta.idVenta !== idVenta));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const abrirModalEdicion = (categoria) => {
    setDatosCategoria({
      id: categoria.idCategoria,
      nombre: categoria.categoria1,
    });
    // Mostrar el modal de edición (puedes usar un estado para controlar la visibilidad del modal)
  };

  const manejarCambioInputEdicion = (event) => {
    const { name, value } = event.target;
    setDatosCategoria((datosPrevios) => ({
      ...datosPrevios,
      [name]: value,
    }));
  };

  const manejarEdicionCategoria = () => {
    // Validar los datos de entrada si es necesario

    // Preparar los parámetros para la actualización
    const parametros = {
      idCategoria: datosCategoria.id,
      categoria1: datosCategoria.nombre.trim(),
    };

    // Llamar a la función API para actualizar la categoría
    ActualizarGuardarC('PUT', parametros, Url + "Categorias/Actualizar");

    // Cerrar el modal de edición si es necesario

    // Actualizar los datos después de la actualización
    fetchVentas();
  };

  return (
    <>
      <h1 className="mb-3">Ventas</h1>
      <div className="table-responsive shadow">
        <table className="table table-striped table-hover table-borderless align-middle text-center m-0">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre del mueble</th>
              <th>Nombre del usuario</th>
              <th>Fecha</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta) => (
              <tr key={venta.idVenta}>
                <td>{venta.idVenta}</td>
                <td>{venta.nombreMueble}</td>
                <td>{venta.nombreUsuario}</td>
                <td>{venta.date.substring(0, 10)}</td>
                <td>{venta.categoria}</td>
                <td className="d-flex justify-content-center g-3">
                  <button
                    className="btn btn-warning mx-1"
                    onClick={() => abrirModalEdicion(venta)}
                  >
                    <i className="fas fa-edit"></i> Editar
                  </button>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => handleEliminarVenta(venta.idVenta)}
                  >
                    <i className="fas fa-minus-circle"></i> Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Agregar el modal de edición */}
      <div id="modalEditCategory" className="modal fade" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <label className="h5">Editar Categoria</label>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="hidden"
                name="id"
                value={datosCategoria.id}
              />
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa-solid fa-gift"></i>
                </span>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Nombre"
                  value={datosCategoria.nombre}
                  onChange={manejarCambioInputEdicion}
                />
              </div>
              <div className="d-grid col-6 mx-auto">
                <button onClick={manejarEdicionCategoria} className="btn btn-success">
                  <i className="fa-solid fa-floppy-disk"></i> Guardar
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                id="btnCerrar"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutputsInputsPage;
