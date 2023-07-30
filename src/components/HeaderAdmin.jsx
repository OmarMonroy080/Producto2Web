import { Link, NavLink, Outlet } from 'react-router-dom';
import '../assets/css/sidebar.css';
import imgAvatar from '../assets/images/avatar.png';
import {showAlerta} from "../../ConsumoAPI/Funciones/funciones";
const HeaderAdmin = () => {
  //actualizando el useState para el logueo
  const handleLogout = () => {
    showAlerta("Vuelve Pronto"+setAutenticado.nombre,"success")
    setAutenticado({ isLoggedIn: 0, nombre: "" });

  };
  const handleAside = () => {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);
      const bodypd = document.getElementById(bodyId);
      const headerpd = document.getElementById(headerId);

      // Validate that all variables exist
      // show navbar
      nav.classList.toggle('show');
      // change icon
      toggle.classList.toggle('bx-x');
      // add padding to body
      bodypd.classList.toggle('body-pd');
      // add padding to header
      headerpd.classList.toggle('body-pd');
    };

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');
  };

  return (
    <div className="body vh-100">
      <div id="body-pd">
        <header className="header" id="header">
          <div className="header_toggle">
            <i
              className="bx bx-menu"
              id="header-toggle"
              onClick={handleAside}
            ></i>
          </div>
          <a className="header_img" title="Manage">
            <img src={imgAvatar} alt="" />
          </a>
        </header>

        <div className="l-navbar" id="nav-bar">
          <nav className="nav">
            <div>
              <Link className="nav_logo text-decoration-none ">
                <i className="fas fa-school nav_logo-icon"></i>
                <span className="nav_logo-name">Biblioteca</span>
              </Link>
              <div className="nav_list">
                <NavLink
                  className="nav_link text-decoration-none "
                  to="/manager"
                >
                  <i className="bx bx-home-alt-2 nav_icon"></i>
                  <span className="nav_name">Inicio</span>
                </NavLink>

                <NavLink
                  className="nav_link text-decoration-none "
                  to="categories"
                >
                  <i className="fas fa-share-square nav_icon"></i>
                  <span className="nav_name">Categorias</span>
                </NavLink>

                <NavLink
                  className="nav_link text-decoration-none "
                  to="products"
                >
                  <i className="fas fa-cart-arrow-down nav_icon"></i>
                  <span className="nav_name">Products</span>
                </NavLink>

                <NavLink
                  className="nav_link text-decoration-none "
                  to="outputs-inputs"
                >
                  <i className="fas fa-exchange-alt nav_icon"></i>
                  <span className="nav_name">Entradas y salidas</span>
                </NavLink>

                <NavLink className="nav_link text-decoration-none " to="users">
                  <i className="fas fa-users nav_icon"></i>
                  <span className="nav_name">Usuarios</span>
                </NavLink>

                <NavLink
                  className="nav_link text-decoration-none "
                  to="dashboard"
                >
                  <i className="fas fa-chart-line nav_icon"></i>
                  <span className="nav_name">Dashboard</span>
                </NavLink>
              </div>
            </div>
            <NavLink to="/"onClick={handleLogout} className="text-decoration-none">
              <div className="nav_link">
                <i className="bx bx-log-out nav_icon"></i>
                <span className="nav_name">Cerrar sesion</span>
              </div>
            </NavLink>
          </nav>
        </div>

        <main className="container pt-4 vh-100 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HeaderAdmin;
