import img from '../assets/images/mueble-hero.jpg';

const Hero = () => {
  return (
    <>
      <div className="col-lg-6">
        <img src={img} className="img-fluid" alt="" />
      </div>
      <div className="col-lg-6 d-flex flex-column align-self-center gap-2">
        <h2 className="text-primary">Bienvenido</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius fugiat
          aut, at temporibus quos necessitatibus molestias qui architecto quia,
          ad ab accusantium voluptatum animi vero sunt, voluptatibus veniam.
          Assumenda, consequatur.
        </p>
        <button className="btn btn-primary">Iniciar sesion</button>
        <button className="btn btn-outline-primary">Registrar</button>
      </div>
    </>
  );
};

export default Hero;
