import { useState, useEffect } from 'react';
import { ListarMuebles, ActualizarGuardarM } from "../../ConsumoAPI/Muebles/MuebleriaAPI";
import { showAlerta } from "../../ConsumoAPI/Funciones/funciones";

const SalesPage = () => {
  const [sales, setSales] = useState([]); // Estado para almacenar la lista de ventas
  const [muebles, setMuebles] = useState([]); // Estado para almacenar la lista de muebles disponibles
  const [nuevaVenta, setNuevaVenta] = useState({}); // Estado para almacenar los detalles de la nueva venta

  useEffect(() => {
    // Obtener la lista de ventas al cargar la página
    fetchSales();
    // Obtener la lista de muebles al cargar la página
    fetchMuebles();
  }, []);

  const fetchSales = async () => {
    try {
      // lista de ventas, yo habia ponido mi api aki
      const salesData = [
        { id: 1, cliente: 'Juan Pérez', mueble: 'Mesa de Comedor', cantidad: 2, total: 800 },
        { id: 2, cliente: 'María Gómez', mueble: 'Silla', cantidad: 4, total: 300 },
      ];
      setSales(salesData);
    } catch (error) {
      console.log('Error al obtener las ventas:', error);
    }
  };

  const fetchMuebles = async () => {
    try {
      //ListarMuebles
      const mueblesData = await ListarMuebles();
      setMuebles(mueblesData.response);
    } catch (error) {
      console.log('Error al obtener los muebles:', error);
    }
  };

  const handleVentaChange = (e) => {
    const { name, value } = e.target;
    setNuevaVenta((prevVenta) => ({
      ...prevVenta,
      [name]: value,
    }));
  };

  const handleGuardarVenta = async () => {
    try {
      await ActualizarGuardarM('POST', nuevaVenta, 'API_PARA_GUARDAR_VENTAS');
      showAlerta('¡Venta guardada exitosamente!', 'success');
      setNuevaVenta({});
    } catch (error) {
      showAlerta('Error al guardar la venta', 'error');
      console.log(error);
    }
  };

  return (
    <>
      <h1 className='mb-3'>Ventas</h1>

      {/* Lista de ventas */}
      <div className="table-responsive shadow">
        <table className="table table-striped table-hover table-borderless shadow1 align-middle text-center m-0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Mueble</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((venta) => (
              <tr key={venta.id}>
                <td>{venta.id}</td>
                <td>{venta.cliente}</td>
                <td>{venta.mueble}</td>
                <td>{venta.cantidad}</td>
                <td>{venta.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Formulario para agregar nueva venta */}
      <div className="mt-4">
        <h3>Agregar Nueva Venta</h3>
        <div className="mb-3">
          <label htmlFor="cliente" className="form-label">Cliente:</label>
          <input
            type="text"
            className="form-control"
            id="cliente"
            name="cliente"
            value={nuevaVenta.cliente || ''}
            onChange={handleVentaChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mueble" className="form-label">Mueble:</label>
          <select
            className="form-select"
            id="mueble"
            name="mueble"
            value={nuevaVenta.mueble || ''}
            onChange={handleVentaChange}
          >
            <option value="">Seleccione un mueble</option>
            {muebles.map((mueble) => (
              <option key={mueble.idMueble} value={mueble.nombre}>
                {mueble.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="cantidad" className="form-label">Cantidad:</label>
          <input
            type="number"
            className="form-control"
            id="cantidad"
            name="cantidad"
            value={nuevaVenta.cantidad || ''}
            onChange={handleVentaChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="total" className="form-label">Total:</label>
          <input
            type="number"
            className="form-control"
            id="total"
            name="total"
            value={nuevaVenta.total || ''}
            onChange={handleVentaChange}
          />
        </div>
        <div className="d-grid col-6 mx-auto">
          <button
            className="btn btn-primary"
            onClick={handleGuardarVenta}
          >
            Guardar Venta
          </button>
        </div>
      </div>
    </>
  );
};

export default SalesPage;
