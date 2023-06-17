import { Link, Outlet, useLocation } from 'react-router-dom';

const HeaderPublic = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link className="navbar-brand fw-bold" to="/">
                Muebleria
              </Link>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/catalogue">
                    Catálogo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">
                    Nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contacto
                  </Link>
                </li>
              </ul>


              <div className="d-flex">
                {state?.logged ? (
                  <span>{state?.email}</span>
                ) : (
                  <>
                    <Link className="btn btn-outline-primary me-2" to="/login">
                      Iniciar sesión
                    </Link>
                    <Link className="btn btn-primary" to="/register">
                      Registro
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default HeaderPublic;
