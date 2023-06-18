const CreateProduct = () => {
  return (
    <>
      <div className="bg-white rounded p-5 shadow-lg">
        <h1 className="text-center pb-5">Registro de producto</h1>

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
                  <label htmlFor="floatingInput">Codigo</label>
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
                  <label htmlFor="floatingInput">Tipo</label>
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
                  <label htmlFor="floatingInput">Categoria</label>
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
                  <label htmlFor="floatingInput">Unidades</label>
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
                  <label htmlFor="floatingInput">Marca</label>
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
                  <label htmlFor="floatingInput">Dimensiones</label>
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
                  <label htmlFor="floatingInput">Nombre del producto</label>
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
                  <label htmlFor="floatingInput">Precio</label>
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
                  <label htmlFor="floatingInput">Piezas</label>
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
                  <label htmlFor="floatingInput">Descripcion</label>
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
                  <label htmlFor="floatingInput">Color</label>
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
                  <label htmlFor="floatingInput">Fecha de alta</label>
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

export default CreateProduct;
