import { NavLink } from 'react-router-dom';

const NavbarPublic = () => {
  return (
    <>
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
            <NavLink className="navbar-brand" to="/">
              Bibliotecaasdfasd
            </NavLink>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="login">
                  Iniciar sesion
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="register">
                  Registro
                </NavLink>
              </li>
            </ul>

            <form className="d-flex">
              <NavLink className="btn btn-outline-primary me-2" to="login">
                Iniciar sesion
              </NavLink>
              <NavLink className="btn btn-primary" to="register">
                Registro
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarPublic;
