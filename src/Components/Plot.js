import React from 'react'
import { Bar } from "react-chartjs-2";
import PlotData from "../Data/PlotData"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js'
import  Chart  from 'chart.js/auto'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
function Plot() {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
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
    tooltips: {
      enabled: true,
    },
  };
  return (
    <Bar data={PlotData} options={options} />
  )
}

export default Plot