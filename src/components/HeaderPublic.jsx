import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from './FooterPublic';

const HeaderPublic = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <>
      <header
        className="container-fluid bg-light"
        style={{ marginBottom: '4rem' }}
      >
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow-sm  ">
          <div className="container">
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
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarTogglerDemo01"
            >
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
                  <Link className="nav-link fw-bold" to="/catalogue">
                    Catálogo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/aboutus">
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
                <Link className="btn btn-outline-primary me-2" to="/login">
                  <i className="fa-solid fa-right-to-bracket">  Entrar</i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />

      <Footer />
    </>
  );
};

export default HeaderPublic;
