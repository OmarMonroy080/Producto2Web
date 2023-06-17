import img from '../assets/images/mueble-hero.jpg';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

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
        <Link className="btn btn-primary"to="login">Iniciar sesion</Link>
        <Link className="btn btn-outline-primary" to="register">Registrar</Link>
      </div>
    </>
  );
};

export default Hero;
