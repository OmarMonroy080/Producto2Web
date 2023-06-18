import { Link } from 'react-router-dom';

const UsersPage = () => {
  return (
    <>
      <h1>Usuarios</h1>
      <Link className="btn btn-primary mb-3" to="create">
        <i className="fas fa-plus-circle"></i> Crear usuario
      </Link>

      <table
        id="MyTable"
        className="table table-striped table-hover table-borderless shadow align-middle text-center"
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Clave empleado</th>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Fotografia</th>
            <th>Usuario</th>
            <th>Contraseña</th>
            <th>Fecha de registro</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>data...</td>
            <td>data...</td>
            <td>data...</td>
            <td>data...</td>
            <td>data...</td>
            <td>data...</td>
            <td>data...</td>
            <td>data...</td>
            <td className="d-flex justify-content-center g-3">
              <a className="btn btn-info mx-1 disabled">
                <i className="fas fa-info-circle"></i> data...
              </a>
              <a className="btn btn-warning mx-1">
                <i className="fas fa-edit"></i> data...
              </a>
              <a className="btn btn-danger mx-1">
                <i className="fas fa-minus-circle"></i> data...
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
