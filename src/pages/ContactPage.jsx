import img from '../assets/info.svg';

const ContactPage = () => {
  return (
    <>
      <div className="container ">
        <div className="row py-5 vh-100">
          <div className="col-lg-6 d-flex align-content-center ">
            <img src={img} alt="" className="img-fluid " />
          </div>
          <div className="col-lg-6 d-flex flex-column align-content-center justify-content-center text-center ">
            <h5 className="text-primary">Información de contacto</h5>
            <p>Dirección: Calle Principal, Ciudad</p>
            <p>Teléfono: 123-456-789</p>
            <p>Email: muebles@correo.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
