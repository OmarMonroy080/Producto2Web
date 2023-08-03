import img from '../assets/images/mueble.png';
import { Link} from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div
        className="col-lg-6 d-flex align-items-center"
        style={{ minHeight: '600px' }}
      >
        <img src={img} className="img-fluid " alt="" />
      </div>
      <div className="col-lg-6 d-flex flex-column align-self-center gap-2">
        <h2 className="text-primary">Bienvenido</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius fugiat
          aut, at temporibus quos necessitatibus molestias qui architecto quia,
          ad ab accusantium voluptatum animi vero sunt, voluptatibus veniam.
          Assumenda, consequatur.
        </p>
        <div className="d-flex gap-2 mb-5 mb-lg0">
          <Link className="btn btn-primary w-100" to="login">
            Iniciar sesion
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
