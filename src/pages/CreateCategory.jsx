const CreateCategory = () => {
  return (
    <>
      <div className="bg-white rounded p-5 shadow-lg">
        <h1 className="text-center pb-5">Registro de categoria</h1>

        <form>
          <fieldset>
            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Codigo</label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Tipo</label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="date"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Fecha</label>
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

export default CreateCategory;
