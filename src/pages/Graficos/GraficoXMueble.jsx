import { Line } from 'react-chartjs-2';
import { ListarVentas } from '../../../ConsumoAPI/Ventas/VentasAPI';
import { useState, useEffect, useRef } from 'react';
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
var misoptions = {
    scales: {
        y: {
            min: 0,
            max: 20
        },
        x: {
            ticks: { color: 'rgb(255, 99, 132)' }
        }
    }
};


const GraficoXMueble = ({ idMueble,nombreM }) => {
    const [data, setData] = useState([]);
    const chartRef = useRef(null);
    useEffect(() => {
        fetchData();
    }, []);


    async function fetchData() {
        try {
            const ventas = await ListarVentas();
            setData(ventas);
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerVentasDelMuebleYMesActual = (ventas, idMueble) => {
        const fechaActual = new Date();
        const mesActual = fechaActual.getMonth() + 1;
        var ventasMM = [];
        ventas.forEach((venta) => {
            const fechaV = new Date(venta.date);
            const mesV = fechaV.getMonth() + 1;
            if (mesV == mesActual) {
                if (venta.idMueble == idMueble) {

                    ventasMM.push(venta);
                }
            }
        })
        return ventasMM;
    };

    const ventasPorMuebleEnMesActual = data ? obtenerVentasDelMuebleYMesActual(data, idMueble) : {};

    const contarVentasPorDia = (ventas) => {
        const ventasPorDia = {};

        ventas.forEach((venta) => {
            const fechaVenta = new Date(venta.date);
            const diaVenta = fechaVenta.getDate();
            const MesVenta = fechaVenta.getMonth() + 1;
            const YearVenta = fechaVenta.getFullYear();
            const Fformat = `${diaVenta}/${MesVenta}/${YearVenta}`;
            if (!ventasPorDia[Fformat]) {
                ventasPorDia[Fformat] = 1;
            } else {
                ventasPorDia[Fformat] += 1;
            }
        });

        return ventasPorDia;
    };

    const ventasPorDia = ventasPorMuebleEnMesActual ? contarVentasPorDia(ventasPorMuebleEnMesActual) : {};

    const midata = {
        labels: Object.keys(ventasPorDia),
        datasets: [
            {
                label: `Ventas del Mueble ${nombreM}`,
                data: Object.values(ventasPorDia),
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };


    useEffect(() => {
        // Cuando los datos cambien y chartRef.current sea válido, destruir el gráfico anterior y crear uno nuevo.
        if (chartRef.current) {
            chartRef.current.destroy();
        }
        if (chartRef.current && midata && Object.keys(ventasPorMuebleEnMesActual).length > 0) {
            chartRef.current = new ChartJS(chartRef.current, {
                type: 'Line',
                data: midata,
                options: misoptions,
            });
            fetchData();
        }
    }, [idMueble, midata]);
    return (

        <div id={`mueble-${idMueble}-chart-container`}>
            <Line data={midata} options={misoptions} id='1' />
        </div>
    );
}

export default GraficoXMueble