import React from 'react'
import PlotData from "../Data/PlotData"
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