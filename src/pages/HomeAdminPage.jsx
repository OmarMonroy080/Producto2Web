const HomeAdminPage = () => {
  return ( <>
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Muebleria</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nihil commodi error aliquam adipisci suscipit doloremque hic sequi facere, odit sed dignissimos quidem, qui voluptatibus architecto esse autem, totam ipsam.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src="https://us.123rf.com/450wm/alexeysmirnov/alexeysmirnov1609/alexeysmirnov160900001/64574555-interior-minimalista-del-cuarto-blanco-vac%C3%ADo-con-el-suelo-blanco-y-pared-iluminada-por-la-luz-solar.jpg" alt="" width="720"/>
      </div>
    </div>
  </> );
}
 
export default HomeAdminPage;