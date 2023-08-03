import { ListarMuebles, ActualizarGuardarM, BorrarMueble } from "../../ConsumoAPI/Muebles/MuebleriaAPI";
import { Suspense, useState, useEffect } from 'react';
import { showAlerta } from "../../ConsumoAPI/Funciones/funciones";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Url = "http://www.muebleriatroncoso.somee.com/api/";
var Uri = "";
var ApiLMuebles = [];
const ProductsPage = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [Categoria, setCategoria] = useState(-1);

  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState('');
  const [data, setData] = useState([]);
  const [dataChanged, setDataChanged] = useState(false);


  const fetchData = async () => {
    try {
      const dataR = await ListarMuebles();
      setData(dataR);
    } catch (error) {
      console.log("Error al obtener los muebles:", error);
    }
  };
  const resetDataC = ()=>{
    setDataChanged(true)
  }

  useEffect(() => {
    fetchData();
    setDataChanged(false);
  }, [dataChanged]);



  const openModal = (op, id, name, description, Categoria) => {
    setId('');
    setName('');
    setDescription('');
    setOperation(op);
    if (op === 1) {
      setTitle('Registrar Producto');
    }
    else if (op === 2) {
      setTitle('Editar Producto');
      setId(id);
      setName(name);
      setDescription(description);
      setCategoria(Categoria);
    }
    window.setTimeout(function () {
      document.getElementById('nombre').focus();
    }, 500);
  }
  const validar = () => {
    var parametros;
    var metodo;
    if (name.trim() === '') {
      showAlerta('Escribe el nombre del Mueble', 'warning');
    }
    else if (description.trim() === '') {
      showAlerta('Escribe la descripción del Mueble', 'warning');
    }
    else if (Categoria === -1) {
      showAlerta('Escribe la categoría del Mueble', 'warning');
    }
    else {
      if (operation === 1) {

        parametros = { nombre: name.trim(), descripcion: description.trim(), idCategoria: Categoria };
        metodo = 'POST';
        Uri = "Mueble/Guardar";
      }
      else {
        parametros = { idMueble: id, nombre: name.trim(), descripcion: description.trim(), idCategoria: Categoria };
        metodo = 'PUT';
        Uri = "Mueble/Actualizar";

      }
      ActualizarGuardarM(metodo, parametros, Url + Uri);
      setTimeout(resetDataC(),2000);
    }
  }

  const eliminar =  (ide, n) => {
    const e = async (ide1) => {
      await BorrarMueble(ide1)
    }
    try {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: '¿Seguro de eliminar el producto ' + n + ' ?',
        icon: 'question', text: 'No se podrá dar marcha atrás',
        showCancelButton: true, confirmButtonText: 'Si, eliminar', cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          e(ide);
          setTimeout(resetDataC(),2000);
          
        }
      });
    } catch (error) {
      console.log("Error al eliminar el mueble:", error);
    }
  };
  return (
    <>
      <h1 className='mb-3'>Productos</h1>

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
          className="table table-striped table-hover table-borderless shadow1 align-middle text-center m-0"
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Categoria</th>
              <th>Nombre del producto</th>
              <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
            <Suspense fallback={<div>Cargando.....</div>}>
              {data.response?.map((mueble) => (
                <tr key={mueble.idMueble}>
                  <td>{mueble.idMueble}</td>
                  
                  <td>{mueble.oCategoria.categoria1}</td>
                  <td>{mueble.nombre}</td>
                  <td>{mueble.descripcion}</td>
                  <td className="d-flex justify-content-center g-3">
                    <button onClick={() => openModal(2, mueble.idMueble, mueble.nombre, mueble.descripcion, mueble.oCategoria.idCategoria)}
                      className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                      <i className='fa-solid fa-edit'></i>
                    </button>
                    &nbsp;
                    <button onClick={() => eliminar(mueble.idMueble, mueble.nombre)} className='btn btn-danger'>
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
                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                <input type='text' id='nombre' className='form-control' placeholder='Nombre' value={name}
                  onChange={(e) => setName(e.target.value)}></input>
              </div>
              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                <input type='text' id='descripcion' className='form-control' placeholder='Descripción' value={description}
                  onChange={(e) => setDescription(e.target.value)}></input>
              </div>
              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-dollar-sign'></i></span>
                <select id='categoria' className='form-control' value={Categoria} onChange={(e) => setCategoria(e.target.value)}>
                  <option value={-1}>Seleccionar Categoría</option>
                  <option value={1}>Mesas</option>
                  <option value={2}>sillas 2</option>
                  <option value={3}>colchones</option>
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

export default ProductsPage;


