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
            <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
              <div>
                <Link className="navbar-brand fw-bold ms-auto" to="/">
                  Muebleria
                </Link>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/catalogo">
                    Catálogo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/galeria">
                    Galería
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/nosotros">
                    Nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/contact">
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
