import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import img from '../assets/register.svg';
import imgBackground from '../assets/images/background.png';

const initialForm = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      Swal.fire({
        title: 'Oops...',
        text: '¡Uno o más campos están vacíos!',
        icon: 'warning',
        iconColor: 'var(--bs-warning)',
        confirmButtonColor: 'var(--bs-primary)',
        confirmButtonText: 'Entiendo',
      });
      return;
    }

    navigate('/manager', {
      replace: true,
      state: { logged: true, email: form.email },
    });

    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  const styles = {
    background: 'rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(0, 46, 111, 0.3)',
    backdropFilter: 'blur(15px)',
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.25)',
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${imgBackground})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mb-5">
          <div className="row mt-5 mh-100 d-flex align-content-center">
            <div className="col-lg-6 d-flex align-content-center justify-content-center ">
              <img
                src={img}
                alt=""
                className="img-fluid"
                style={{ maxWidth: '350px' }}
              />
            </div>
            <div className="col-lg-5 px-4 py-5" style={styles}>
              <h1>Registro</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti excepturi quasi, maxime eaque est rem. Explicabo quia
                eaque labore deleniti qui maxime dolor unde, blanditiis quas ab
                sequi, rem nam!
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Correo electronico"
                    onChange={handleChange}
                    value={form.email}
                  />
                  <label htmlFor="email">Correo electronico</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    value={form.password}
                  />
                  <label htmlFor="password">Contraseña</label>
                </div>

                <div className="d-flex justify-content-between">
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Recuerdame
                    </label>
                  </div>
                  <div className="mb-3">
                    <a href="#">¿Olvidó su contraseña?</a>
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <button className="btn btn-primary me-1" type="submit">
                    <i className="fa-solid fa-paper-plane me-1"></i>
                    Registro
                  </button>

                  <button
                    className="btn btn-outline-secondary mx-1"
                    type="reset"
                    onClick={handleReset}
                  >
                    <i className="fa-solid fa-broom me-1"></i>Limpiar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
