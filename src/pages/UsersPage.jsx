import { ListarUsuarios, ActualizarGuardarU, BorrarUsuario } from "../../ConsumoAPI/Usuarios/ValidarUsAPI";
import { Suspense, useState, useEffect } from 'react';
import isValidEmail from "../../ConsumoAPI/Usuarios/ValidarCorreoFormat";
import { showAlerta } from '../../ConsumoAPI/Funciones/funciones';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const Url = "http://www.muebleriatroncoso.somee.com/api/";
var Uri = "";
const UsersPage = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState('');
  const [dataChanged, setDataChanged] = useState(false);

  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const dataR = await ListarUsuarios();
      setData(dataR);
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

  const openModal = (op, id, name, correo) => {
    setId('');
    setName('');
    setCorreo('');
    setOperation(op);
    setContraseña('');
    if (op === 1) {
      setTitle('Registrar Usuario');
    }
    else if (op === 2) {
      setTitle('Editar Usuario');
      setId(id);
      setName(name);
      setCorreo(correo);
      showAlerta("Nota: Si no desea Actualizar la contraseña omita ese campo", 'info');
    }
    window.setTimeout(function () {
      document.getElementById('nombre').focus();
    }, 500);
  }

  //valida que los campos tengan informacion y con el formato correcto
  const validar = () => {
    var parametros;
    var metodo;
    if (name.trim() === '') {
      showAlerta('Escribe el nombre de Usuario', 'warning');
    }
    else if (correo.trim() === '') {
      showAlerta('Escribe un correo', 'warning');
    }
    else if (operation === 1) {
      if (contraseña.trim() === '') {
        showAlerta('Escribe una Contraseña', 'warning');
      }
    }

    if (operation == 1 || operation == 2) {
      if (isValidEmail(correo)) {
        if (operation === 1) {
          parametros = { nombre: name.trim(), correo: correo.trim(), contraseña: contraseña.trim() };
          metodo = 'POST';
          Uri = "Usuario/Guardar";
        }
        else if (operation === 2) {
          if (contraseña.trim() != '') {
            parametros = { idUsuario: id,nombre: name.trim(), correo: correo.trim(), contraseña: contraseña.trim };
          }
          else {
            parametros = { idUsuario: id, nombre: name.trim(), correo: correo.trim() };
          }
          metodo = 'PUT';
          Uri = "Usuario/Actualizar";

        }
        ActualizarGuardarU(metodo, parametros, Url + Uri);
        setTimeout(resetDataC(), 2000);
      }
      else {
        showAlerta('Escribe un Correo Valido', 'warning');
      }
    }
  }

  const eliminar = (ide, n) => {
    const e = async (ide1) => {
      await BorrarUsuario(ide1);
    }
    try {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: '¿Seguro de eliminar al Usuario ' + n + ' ?',
        icon: 'question', text: 'No se podrá dar marcha atrás',
        showCancelButton: true, confirmButtonText: 'Si, eliminar', cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          e(ide);
          setTimeout(resetDataC(), 2000);
        }
      });
    } catch (error) {
      console.log("Error al eliminar el Usuario:", error);
    }
  };


  return (
    <>
      <h1 className="mb-3">Usuarios</h1>

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
              <th>Id</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Contraseña</th>
            </tr>
          </thead>
          <tbody>
            <Suspense fallback={<div>Cargando.....</div>}>
              {data.usuariosL?.map((Usuario) => (
                <tr key={Usuario.idUsuario}>
                  <td>{Usuario.idUsuario}</td>
                  <td>{Usuario.nombre}</td>
                  <td>{Usuario.correo}</td>
                  <td>{Usuario.contraseña}</td>
                  <td className="d-flex justify-content-center g-3">
                    <button onClick={() => openModal(2, Usuario.idUsuario, Usuario.nombre, Usuario.correo)}
                      className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                      <i className='fa-solid fa-edit'></i>
                    </button>
                    &nbsp;
                    <button onClick={() => eliminar(Usuario.idUsuario, Usuario.nombre)} className='btn btn-danger'>
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
                <input type='text' id='correo' className='form-control' placeholder='Correo Electronico' value={correo}
                  onChange={(e) => setCorreo(e.target.value)}></input>
              </div>
              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                <input type='text' id='contraseña' className='form-control' placeholder='Contraseña' value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}></input>
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

export default UsersPage;
