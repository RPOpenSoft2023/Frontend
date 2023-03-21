import PieChartData from '../Data/PieChartData';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const generateColors = (count) => {
    // generate an array of colors based on the count of data points
    const colors = [];
    for (let i = 0; i < count; i++) {
        const hue = (i * 360) / count; // distribute the colors evenly in the color wheel
        colors.push(`hsl(${hue}, 70%, 50%)`);
    }
    return colors;
};
const PieChart = () => {
    const data = PieChartData;
    const colors = generateColors(data.length); // generates an array of colors
    const chartData = {
        labels: data.map((d) => d.label),
        datasets: [
            {
                data: data.map((d) => d.value),
                backgroundcolor: colors,
                hoverBackgroundcolor: colors,
            },
        ],
    };
    const options = {
        title: {
            display: true,
            text: 'Pie Chart with Labels',
        },
        legend: {
            position: 'right',
        },
        tooltips: {
            callbacks: {
                label: (tooltipItem, data) => {
                    const label = data.labels[tooltipItem.index];
                    const value = data.datasets[0].data[tooltipItem.index];
                    return `${label}: ${value}`;
                },
            },
        },
    };

    return (
        <div>
            <Pie data={chartData} options={options} />
        </div>
    )
}

export default PieChart


// import PieChartData from '../Data/PieChartData';
// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// ChartJS.register(ArcElement, Tooltip, Legend);

// const generateColors = (count) => {
//     // generate an array of colors based on the count of data points
//     const colors = [];
//     for (let i = 0; i < count; i++) {
//         const hue = (i * 360) / count; // distribute the colors evenly in the color wheel
//         colors.push(`hsl(${hue}, 70%, 50%)`);
//     }
//     return colors;
// };
// const PieChart = () => {
//     const data = PieChartData;
//     const colors = generateColors(data.length); // generates an array of colors
//     const chartData = {
//         labels: data.map((d) => d.label),
//         datasets: [
//             {
//                 data: data.map((d) => d.value),
//                 backgroundcolor: colors,
//                 hoverBackgroundcolor: colors,
//             },
//         ],
//     };
//     const options = {
//         title: {
//             display: true,
//             text: 'Pie Chart with Labels',
//         },
//         legend: {
//             position: 'right',
//         },
//         tooltips: {
//             callbacks: {
//                 label: (tooltipItem, data) => {
//                     const label = data.labels[tooltipItem.index];
//                     const value = data.datasets[0].data[tooltipItem.index];
//                     return `${label}: ${value}`;
//                 },
//             },
//         },
//     };

//     return (
//         <div>
//             <Pie data={chartData} options={options} />
//         </div>
//     )
// }

// export default PieChart


