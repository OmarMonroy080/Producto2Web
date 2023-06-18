const CreateUser = () => {
  return (
    <>
      <div className="bg-white rounded p-5 shadow-lg">
        <h1 className="text-center pb-5">Registro de usuario</h1>

        <form>
          <fieldset>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Id</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Clave de empleado</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Nombre</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Puesto</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Fotografia</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Usuario</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Contraseña</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating mb-4">
                  <input
                    type="date"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Precha de registro</label>
                </div>
              </div>
            </div>

            <div className="d-flex gap-2">
              <button className="btn btn-primary">Guardar</button>
              <button className="btn btn-outline-primary ">Limpiar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
