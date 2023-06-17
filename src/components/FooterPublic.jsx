const Footer = () => {
  return (
    <div className="d-block mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Productos</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Redes sociales</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Información de contacto</h5>
            <p>Dirección: Calle Principal, Ciudad</p>
            <p>Teléfono: 123-456-789</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
        <hr />
        <span className="text-muted">© 2023 Nombre de la empresa. Todos los derechos reservados.</span>
      </div>
    </div>
  );
};

export default Footer;
