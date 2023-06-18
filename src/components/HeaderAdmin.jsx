import { Link, NavLink, Outlet } from 'react-router-dom';
import '../assets/css/sidebar.css';
import { useEffect } from 'react';
import imgAvatar from '../assets/images/avatar.png';
const HeaderAdmin = () => {
  useEffect(() => {
    // ==================================
    // ASIDE
    // ==================================
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId);

      // Validate that all variables exist
      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
          // show navbar
          nav.classList.toggle('show');
          // change icon
          toggle.classList.toggle('bx-x');
          // add padding to body
          bodypd.classList.toggle('body-pd');
          // add padding to header
          headerpd.classList.toggle('body-pd');
        });
      }
    };

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

    // Link active
    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
      }
    }
    linkColor.forEach((l) => l.addEventListener('click', colorLink));
  }, []);

  return (
    <>
      <div id="body-pd">
        <header className="header" id="header">
          <div className="header_toggle">
            <i className="bx bx-menu" id="header-toggle"></i>
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
                <NavLink className="nav_link text-decoration-none " to="/manager">
                  <i className="bx bx-home-alt-2 nav_icon"></i>
                  <span className="nav_name">Inicio</span>
                </NavLink>

                <NavLink className="nav_link text-decoration-none " to="categories">
                  <i className="fas fa-share-square nav_icon"></i>
                  <span className="nav_name">Categorias</span>
                </NavLink>

                <NavLink className="nav_link text-decoration-none " to="products">
                  <i className="fas fa-cart-arrow-down nav_icon"></i>
                  <span className="nav_name">Products</span>
                </NavLink>

                <NavLink className="nav_link text-decoration-none " to="outputs-inputs">
                  <i className="fas fa-exchange-alt nav_icon"></i>
                  <span className="nav_name">Entradas y salidas</span>
                </NavLink>

                <NavLink className="nav_link text-decoration-none " to="users">
                  <i className="fas fa-users nav_icon"></i>
                  <span className="nav_name">Usuarios</span>
                </NavLink>

                <NavLink className="nav_link text-decoration-none " to="dashboard">
                  <i className="fas fa-chart-line nav_icon"></i>
                  <span className="nav_name">dasboard</span>
                </NavLink>
              </div>
            </div>

            <NavLink to="/" className="text-decoration-none">
              <div className="nav_link">
                <i className="bx bx-log-out nav_icon"></i>
                <span className="nav_name">Cerrar sesion</span>
              </div>
            </NavLink>
          </nav>
        </div>

        <main className="container  mt-5 pt-5">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default HeaderAdmin;