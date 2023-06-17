import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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

    navigate('/dashboard', {
      replace: true,
      state: { logged: true, email: form.email },
    });

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
  };

  return (
    <>
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

        <button className="btn btn-primary me-1" type="submit">
          <i className="fa-solid fa-paper-plane me-1"></i>
          Iniciar sesion
        </button>

        <button
          className="btn btn-secondary mx-1"
          type="reset"
          onClick={handleReset}
        >
          <i className="fa-solid fa-broom me-1"></i>Limpiar
        </button>
      </form>
    </>
  );
};

export default LoginPage;