const HomeAdminPage = ({ nombre}) => {
  return ( <>
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-light">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis ">Bienvenido {nombre}</h1>
        <p className="lead mt-3 ">"El arte de la administración radica en crear armonía entre 
        la funcionalidad y la belleza, al igual que nuestros muebles hacen con los espacios 
        que llenan."</p>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src="https://us.123rf.com/450wm/alexeysmirnov/alexeysmirnov1609/alexeysmirnov160900001/64574555-interior-minimalista-del-cuarto-blanco-vac%C3%ADo-con-el-suelo-blanco-y-pared-iluminada-por-la-luz-solar.jpg" alt="" width="720"/>
      </div>
    </div>
  </> );
}
 
export default HomeAdminPage;