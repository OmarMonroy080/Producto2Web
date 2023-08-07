import { ListarVentas } from '../../ConsumoAPI/Ventas/VentasAPI';
import { useState, useEffect, useRef } from 'react';
import { ListarMuebles } from '../../ConsumoAPI/Muebles/MuebleriaAPI';
import GraficoXMueble from './Graficos/GraficoXMueble';
import GraficoVentasMes from './Graficos/GraficoVentasMes';
import withReactContent from 'sweetalert2-react-content';
import jsPDF from 'jspdf';

const DashboardPage = () => {
  const generatePDF = () => {
    const pdf = new jsPDF();

    // Captura el contenido de las gráficas e información en HTML
    const content = document.getElementById('content-to-export');

    // Genera el PDF a partir del contenido HTML
    pdf.fromHTML(content, 15, 15);

    // Descarga el PDF
    pdf.save('graficas_y_datos.pdf');
  };

  const [selectedMueble, setSelectedMueble] = useState(1);
  const [LMuebles, setLMuebles] = useState([]);
  const [mostrarGrafico, setMostrarGrafico] = useState(false);

  const fetchData = async () => {
    try {
      const dataR = await ListarMuebles();
      setLMuebles(dataR);
    } catch (error) {
      console.log("Error al obtener los muebles:", error);
    }
  };

  const handleChangeMueble = (event) => {
    setMostrarGrafico(true);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
     <button onClick={generatePDF}>Descargar Gráficas y Datos</button>
      <div id='content-to-export'>
        <div className='d-flex justify-content-center align-items-center'>
          <h2 >Dashboard</h2>
        </div>
        <div className='row'>
          <div id='3' className='col col-lg-7'>
            <h3>Ventas Por Muebles</h3>
            <GraficoVentasMes />
          </div>
          <div className='col col-lg-5'>
            <div className='form row'>
              <h3>Ventas del Mueble por Mes</h3>
              <div className='col col-lg-8'>
                <select
                  id='Muebles'
                  className='form-control form-select form-select-sm mb-3'
                  value={selectedMueble}
                  onChange={(e) => setSelectedMueble(e.target.value)}
                  aria-label='.form-select-lg'
                >
                  {LMuebles.response?.map((Mueble) => (
                    <option value={Mueble.idMueble} key={Mueble.idMueble}>
                      {Mueble.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className='col col-lg-4'>
                <button onClick={() => handleChangeMueble()} className='btn btn-primary'>
                  <i className='fa-solid fa-magnifying-glass'></i>Buscar
                </button>
              </div>
            </div>
            <div className='row'>
              <div className='col col-lg-12'>
                {mostrarGrafico && (
                  <div id={`mueble-${selectedMueble}-chart-container`}>
                    <GraficoXMueble idMueble={selectedMueble} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default DashboardPage;