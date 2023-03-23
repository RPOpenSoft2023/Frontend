import React from 'react'
import { Bar } from "react-chartjs-2";
import PlotData from "../Data/PlotData"
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