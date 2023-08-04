import { ListarCategorias, ActualizarGuardarC, BorrarC } from "../../ConsumoAPI/Categorias/CategoriasAPI";

//http://www.muebleriatroncoso.somee.com/api/Categorias

import { Link } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import { showAlerta } from "../../ConsumoAPI/Funciones/funciones";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Url = "http://www.muebleriatroncoso.somee.com/api/";
var Uri = "";

const CategoriesPage = () => {
  const[id, setId] = useState(-1);
  const [nombre, setNombre] = useState('');

  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState('');
  const [data, setData] = useState([]);
  const [dataChanged, setDataChanged] = useState(false);

  const fetchData = async () => {
    try {
      const dataR = await ListarCategorias();
      setData(dataR);
    } catch (error) {
      console.log("Error al obtener las categorias:", error);
    }
  };

  const resetDataC = ()=>{
    setDataChanged(true)
  }

  useEffect(() => {
    fetchData();
    setDataChanged(false);
  }, [dataChanged]);


  const openModal = (op, id, nombre) => {
    setId('');
    setNombre('');
    setOperation(op);
    if (op === 1) {
      setTitle('Registrar Categoria');
    }
    else if (op === 2) {
      setTitle('Editar Categoria');
      setId(id);
      setNombre(nombre);
    }
    window.setTimeout(function () {
      document.getElementById('nombre').focus();
    }, 500);
  }

  const validar = () => {
    var parametros;
    var metodo;
    if (nombre.trim() === '') {
      showAlerta('Escribe el nombre de la categoria', 'warning');
    }
    else {
      if (operation === 1) {

        parametros = { categoria1: nombre.trim()};
        metodo = 'POST';
        Uri = "Categorias/Guardar";
      }
      else {
        parametros = { idCategoria: id, categoria1: nombre.trim()};
        metodo = 'PUT';
        Uri = "Categorias/Actualizar";

      }
      ActualizarGuardarC(metodo, parametros, Url + Uri);
      setTimeout(resetDataC(),2000);
    }
  }


  const eliminar =  (ide) => {
    const e = async (ide1) => {
      await BorrarC(ide1)
    }
    try {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: '¿Desea borrar la categoria?',
        icon: 'question', text: 'No se podrá dar marcha atrás',
        showCancelButton: true, confirmButtonText: 'Si, eliminar', cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          e(ide);
          setTimeout(resetDataC(),2000);
          
        }
      });
    } catch (error) {
      console.log("Error al eliminar la categoria:", error);
    }
  };

  console.log(data[0]);
  return (
    <>
      <h1 className='mb-3'>Categorias</h1>

      <div className='row mt-3'>
        <div className='col-md-4 offset-md-4 mb-4'>
          <div className='d-grid mx-auto'>
            <button onClick={() => openModal(1)} className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalCategoria'>
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
              <th>Id</th>
              <th>  </th>
              <th>Nombre Categoria</th>
            </tr>
          </thead>
          <tbody>
          <Suspense fallback={<div>Cargando.....</div>}>
              {data.map((categoria) => (
                <tr key={categoria.idCategoria}>
                  <td>{categoria.idCategoria}</td>
                  <td>  </td>
                  <td>{categoria.categoria1}</td>                  
                  <td className="d-flex justify-content-center g-3">
                    <button onClick={() => openModal(2, categoria.idCategoria, categoria.categoria1)}
                      className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalCategoria'>
                      <i className='fa-solid fa-edit'></i>
                    </button>
                    &nbsp;
                    <button onClick={() => eliminar(categoria.idCategoria)} className='btn btn-danger'>
                      <i className='fa-solid fa-trash'></i>
                    </button>
                  </td>
                </tr>
              ))}
            </Suspense>
          </tbody>
        </table>
      </div>

      {/* modal Para guardar o Actualizar Muebles */}
      <div id='modalCategoria' className='modal fade' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <label className='h5'>{title}</label>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <input type='hidden' id='id'></input>
              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                <input type='text' id='nombre' className='form-control' placeholder='Nombre' value={nombre}
                  onChange={(e) => setNombre(e.target.value)}></input>
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

export default CategoriesPage;
