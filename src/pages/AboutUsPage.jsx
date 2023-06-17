import img from '../assets/info.svg';

const estilosimg={
  paddingTop:"8%"
}
const estilos = {
  justifyContent: "center",
  textAlign: "center",
  display: "block",
  paddingTop: "2%"
};
const AboutUsPage = () => {
  return (
    <>

      <div className='container col-lg-12' style={estilosimg}>
        <div className='row '>
          <div className="col-lg-4 d-flex align-content-center ">
            <img src={img} alt="" className="img-fluid " />
          </div>
          <div className="col-lg-8 center-block" style={estilos}>
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

export default AboutUsPage;
