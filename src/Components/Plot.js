import React from 'react'
import { Bar } from "react-chartjs-2";
import PlotData from "../Data/PlotData"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js'
import Chart from 'chart.js/auto'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
function Plot(props) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        }
      ],
      // xAxes: [
      //   {
      //     barThickness: 'flex',
      //     barPercentage: 0.7
      //   }
      // ],
    },
    legend: {
      display: true,
    },
    tooltips: {
      enabled: true,
    },
  };
  return (
    <Bar  BarSize={2} data={PlotData} options={options} />
  )
}

export default Plot