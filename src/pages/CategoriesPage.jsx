import { Link } from 'react-router-dom';

const CategoriesPage = () => {

  return (
    <>
      <h1 className='mb-3'>Categorias</h1>

      <Link className="btn btn-primary mb-3" to="create">
        <i className="fas fa-plus-circle"></i> Crear categoria
      </Link>

      <div className="table-responsive shadow">
        <table
          id="MyTable"
          className="table table-striped table-hover table-borderless align-middle text-center m-0"
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Categoria</th>
              <th>Tipo</th>
              <th>Fecha alta</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>data...</td>
              <td>data...</td>
              <td>data...</td>
              <td>data...</td>
              <td className="d-flex justify-content-center g-3">
                <a className="btn btn-info mx-1 disabled">
                  <i className="fas fa-info-circle"></i> Info
                </a>
                <a className="btn btn-warning mx-1">
                  <i className="fas fa-edit"></i> Editar
                </a>
                <a className="btn btn-danger mx-1">
                  <i className="fas fa-minus-circle"></i> Eliminar
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoriesPage;
