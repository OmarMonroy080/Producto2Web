import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListarVentas, EliminarVenta, ActualizarGuardarV } from '../../ConsumoAPI/Ventas/VentasAPI.jsx'; // Importamos EliminarVenta
import { showAlerta } from '../../ConsumoAPI/Funciones/funciones.js';
import { ListarUsuarios } from '../../ConsumoAPI/Usuarios/ValidarUsAPI.jsx';
import { ListarMuebles } from '../../ConsumoAPI/Muebles/MuebleriaAPI.jsx';



const Url = "http://www.muebleriatroncoso.somee.com/api/";
var Uri = "";
const OutputsInputsPage = () => {
  const [ventas, setVentas] = useState([]);
  const [idVenta, setIdVenta] = useState(0);
  const [idUsuario, setIdUsuario] = useState(-1);
  const [idMueble, setIdMueble] = useState(-1);
  const [operacion, setOperacion] = useState(0);
  const [title, setTitle] = useState('');
  const [dataChanged, setDataChanged] = useState(false);

  const [Usuarios, setUsuarios] = useState([]);
  const [Muebles, setMuebles] = useState([]);


  const fetchData = async () => {
    try {
      const ventasL = await ListarVentas();
      const ventasFormateadas = ventasL.map(venta => {
        const fecha = new Date(venta.date);
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const anio = fecha.getFullYear();
        return {
          ...venta,
          date: `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${anio}`
        };
      });
      setVentas(ventasFormateadas);
      const usuariosL =await ListarUsuarios();
      const mueblesL =await ListarMuebles();
      setUsuarios(usuariosL);
      setMuebles(mueblesL);
      console.log(usuariosL);

    } catch (error) {
      console.log("Error al obtener los muebles:", error);
    }
  };
  const resetDataC = () => {
    setDataChanged(true)
  }

  useEffect(() => {
    fetchData();
    setDataChanged(false);
  }, [dataChanged]);

  const openModal = (op, idV, idUs, idM) => {
    setOperacion(op);
    setIdVenta('');
    setIdUsuario('');
    setIdMueble('');
    if (op === 1) {
      setTitle('Registrar Venta');
    }
    else if (op === 2) {
      setTitle('Editar Venta');
      setIdVenta(idV);
      setIdUsuario(idUs);
      setIdMueble(idM);
    }
    window.setTimeout(function () {
      document.getElementById('Usuario').focus();
    }, 500);
  }

  const validar = () => {
    var parametros;
    var metodo;

    if (idUsuario === 0) {
      showAlerta("Selecciona un Usuario", "warning");
    }
    else if (idMueble === 0) {
      showAlerta("Selecciona un Mueble", "warning");
    }
    else {
      if (operacion === 1) {

        parametros = { idUsuario: idUsuario, idMueble: idMueble };
        metodo = 'POST';
        Uri = "Ventas/Guardar";
      }
      else {
        parametros = { idVenta: idVenta, idUsuario: idUsuario, idMueble: idMueble };
        metodo = 'PUT';
        Uri = "Ventas/Actualizar";
      }
      ActualizarGuardarV(metodo, parametros, Url + Uri);
      setTimeout(resetDataC(), 2000);
    }
  }

  const eliminar = (ide, n) => {
    const e = async (ide1) => {
      await EliminarVenta(ide1)
    }
    try {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: '¿Seguro de eliminar la venta de: ' + n + ' ?',
        icon: 'question', text: 'No se podrá dar marcha atrás',
        showCancelButton: true, confirmButtonText: 'Si, eliminar', cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          e(ide);
          setTimeout(resetDataC(), 2000);

        }
      });
    } catch (error) {
      console.log("Error al eliminar el mueble:", error);
    }
  };
  return (
    <>
      <h1 className="mb-3">Ventas</h1>


      {/* modal */}
      <div className='row mt-3'>
        <div className='col-md-4 offset-md-4 mb-4'>
          <div className='d-grid mx-auto'>
            <button onClick={() => openModal(1)} className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalProducts'>
              <i className='fa-solid fa-circle-plus'></i> Añadir
            </button>
          </div>
        </div>
      </div>


      <div className="table-responsive shadow">
        <table
          id="MyTable"
          className="table table-striped table-hover table-borderless align-middle text-center m-0"
        >
          <thead>
            <tr>
              <th>Numero Venta</th>
              <th>Nombre Mueble</th>
              <th>Nombre Usuario</th>
              <th>Fecha Venta</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ventas?.map((venta) => (
              <tr key={venta.idVenta}>
                <td>{venta.idVenta}</td>
                <td>{venta.nombreMueble}</td>
                <td>{venta.nombreUsuario}</td>
                <td>{venta.date}</td>
                <td className="d-flex justify-content-center g-3">
                  <button onClick={() => openModal(2, venta.idVenta, venta.idUsuario, venta.idMueble)}
                    className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                    <i className='fa-solid fa-edit'></i>
                  </button>
                  &nbsp;
                  <button onClick={() => eliminar(venta.idVenta, venta.nombreMueble)} className='btn btn-danger'>
                    <i className='fa-solid fa-trash'></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal Para guardar o Actualizar Ventas */}
      <div id='modalProducts' className='modal fade' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <label className='h5'>{title}</label>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <input type='hidden' id='id'></input>
              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-square-check'></i></span>
                <select id='Usuario' className='form-control' value={idUsuario} onChange={(e) => setCategoria(e.target.value)}>
                <option value="-1">Selecione un Usuario</option>
                  {Usuarios.usuariosL?.map((usuario) => (
                    <option value={usuario.idUsuario}>{usuario.nombre}</option>
                  ))}
                </select>
              </div>
              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-square-check'></i></span>
                <select id='Usuario' className='form-control' value={idMueble} onChange={(e) => setCategoria(e.target.value)}>
                <option value="-1">Selecione un Mueble</option>
                  {Muebles.response?.map((mueble) => (
                    <option value={mueble.idMueble}>{mueble.nombre }</option>
                  ))}
                </select>
              </div>
              <div className='d-grid col-6 mx-auto'>
                <button onClick={() => validar()} className='btn btn-success'>
                  <i className='fa-solid fa-floppy-disk'></i> Guardar
                </button>
              </div>
            </div>
            <div className='modal-footer'>
              <button type='button' id='btnCerrar' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutputsInputsPage;
