const CardProduct = ({ src, title, description }) => {
  return (
    <div className="col">
      <div className="card mb-3 border-0" style={{ maxWidth: 540, height: 200 }}>
        <div className="row g-0 h-100">
          <div className="col-md-4 bg-white d-flex align-items-center">
            <img src={src} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-primary">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <button className="btn btn-outline-primary">Ir al producto</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
