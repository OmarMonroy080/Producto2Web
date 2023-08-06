import{ListarMuebles} from "../../ConsumoAPI/Muebles/MuebleriaAPI";
import { ListarCategorias } from "../../ConsumoAPI/Categorias/CategoriasAPI";
import { useEffect, useState } from 'react';
import CardProduct from '../components/CardProduct';


const CataloguePage = () => {
  const url='http://www.muebleriatroncoso.somee.com/api/Mueble/Muebles';
  const[muebles,setMuebles]=useState([]);
  const[id, setId]= useState('');
  useEffect(()=>{
    getMuebles();
  },[]);

  const getMuebles=async()=>{
    try {
      const dataR = await ListarMuebles();
      setMuebles(dataR.response);
    } catch (error) {
      console.log("Error al obtener los muebles:", error);
    }
  }

  
  return (
    <div className='container'>
      <h1 className='text-primary'>Catálogo</h1>

      <h2 className='text-primary-emphasis '>Mesas</h2>
      <p>Descubre nuestra colección de mesas elegantes y funcionales para tu hogar.</p>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {/* If para validar si el numero coincide con el id del mueble */}
        {muebles.map((mueble, id) => {
          if (mueble.idCategoria === 1) {
          return (
          <CardProduct
            key={mueble.idMueble}
            title={mueble.nombre}
            description={mueble.descripcion}
            src={mueble.src}
          />
        );
        } else {
          return null; // Omitir el componente si no cumple la condición
        }
        })}
      </div>

      

      <h2 className='text-primary-emphasis '>Colchones</h2>
      <p>Encuentra el colchón perfecto que te brinde el descanso que necesitas.</p>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {muebles.map((mueble, id) => {
          if (mueble.idCategoria === 5) {
          return (
          <CardProduct
            key={mueble.idMueble}
            title={mueble.nombre}
            description={mueble.descripcion}
            src={mueble.src}
          />
        );
        } else {
          return null; 
        }
        })}
      </div>

      <h2 className='text-primary-emphasis '>Sillas</h2>
      <p>Descubre nuestra amplia selección de sillas cómodas y con estilo para tu hogar u oficina.</p>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {muebles.map((mueble, id) => {
          if (mueble.idCategoria === 4) {
          return (
          <CardProduct
            key={mueble.idMueble}
            title={mueble.nombre}
            description={mueble.descripcion}
            src={mueble.src}
          />
        );
        } else {
          return null;
        }
        })}
      </div>

      <h2 className='text-primary-emphasis '>Estanteria</h2>
      <p>Añade estilo y funcionalidad a tu espacio con nuestras estanterías de alta calidad.</p>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {muebles.map((mueble, id) => {
          if (mueble.idCategoria === 6) {
          return (
          <CardProduct
            key={mueble.idMueble}
            title={mueble.nombre}
            description={mueble.descripcion}
            src={mueble.src}
          />
        );
        } else {
          return null; 
        }
        })}
      </div>

    </div>
  );
};

export default CataloguePage;
