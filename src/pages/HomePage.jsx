import { useEffect, useState } from 'react';
import CardProduct from '../components/CardProduct';
import Hero from '../components/Hero';
import axios from 'axios';



const HomePage = () => {
  const url='http://www.muebleriatroncoso.somee.com/api/Mueble/Muebles';
  const[muebles,setMuebles]=useState([]);
  const[id, setId]= useState('');
  useEffect(()=>{
    getMuebles();
  },[]);

  const getMuebles=async()=>{
    const respuesta = await axios.get(url);
    setMuebles(respuesta.data.response);
    console.log(respuesta);
  }

  return (
    <main className="flex-shrink-0 ">
      <div className="container">
        <div className="row bg-light shadow rounded mb-5">
          <Hero />
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
          {muebles.map((mueble,id) => (
            <CardProduct
              key={mueble.idMueble}
              title={mueble.nombre}
              description={mueble.descripcion}
              src={'https://m.media-amazon.com/images/I/51fB+Qnee1L._AC_SY300_SX300_.jpg'}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
