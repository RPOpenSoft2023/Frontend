import React from 'react'
import { Bar } from "react-chartjs-2";
import PlotData from "../Data/PlotData"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js'
import { Chart } from 'react-chartjs-2'
ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend )
function Plot() {
    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      };
  return (
    <Bar data={PlotData} options={options} />
  )
}

export default Plot