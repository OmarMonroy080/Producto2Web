import { Bar } from 'react-chartjs-2';
import { useState, useEffect, useRef } from 'react';
import { ListarVentas } from '../../../ConsumoAPI/Ventas/VentasAPI';
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var misoptions = {
    responsive: true,
    animation: false,
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        y: {
            min: 0,
            max: 20
        },
        x: {
            ticks: { color: 'rgba(0, 220, 195)' }
        }
    }
};



const GraficoVentasMes = () => {
    const [data, setData] = useState(null);
    const chartRef = useRef(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const ventas = await ListarVentas();
            const a = () => {

                setData(ventas);
            }
            setTimeout(a, 2000);
        } catch (error) {
            console.log(error);
        }
    }

    const contarVentasPorMueble = (ventas) => {
        const ventasPorMueble = {};
        ventas.forEach((venta) => {
            const { nombreMueble } = venta;
            if (nombreMueble in ventasPorMueble) {
                ventasPorMueble[nombreMueble]++;
            } else {
                ventasPorMueble[nombreMueble] = 1;
            }
        });
        return ventasPorMueble;
    };

    const ventasPorMueble = data ? contarVentasPorMueble(data) : {};

    var midata = {
        labels: Object.keys(ventasPorMueble),
        datasets: [ // Cada una de las líneas del gráfico
            {
                label: 'Ventas Por Mueble',
                data: Object.values(ventasPorMueble),
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 99, 132)',
                pointBackgroundColor: 'rgba(255, 99, 132)',
            }
        ],
    };

    useEffect(() => {
        // Cuando los datos cambien y chartRef.current sea válido, destruir el gráfico anterior y crear uno nuevo.
        if (chartRef.current) {
            chartRef.current.destroy();
        }
        if (chartRef.current && midata && Object.keys(ventasPorMueble).length > 0) {
            chartRef.current = new ChartJS(chartRef.current, {
                type: 'bar',
                data: midata,
                options: misoptions,
            });
            fetchData();
        }
    }, [ventasPorMueble, midata]);

    return (
        <div id="ventas-mes-chart-container">
            <Bar data={midata} options={misoptions} id='2' />
        </div>
    )
}

export default GraficoVentasMes;