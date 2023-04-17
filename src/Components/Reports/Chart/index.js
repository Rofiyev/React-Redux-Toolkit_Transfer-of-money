import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({ value }) {
  const usersData = value.map(data => data.name);
  const values = value.map(data => data.value);

  const data = {
    labels: usersData,
    datasets: [
      {
        label: '# of Votes',
        data: values,
        backgroundColor: [
          '#fa0f42ff',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 0.2,
      },
    ],
  };

  return <Pie data={data} />;
}
export default Chart;