import React from 'react'
import { Bar, Line } from "react-chartjs-2";
import PlotData from "../Data/PlotData"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js'
import Chart from 'chart.js/auto'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
function Line1(props) {
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
    <Line BarSize={2} data={PlotData} options={options} />
  )
}

export default Line1