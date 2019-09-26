import React, { useState } from 'react';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

const Chart = () => {
  const [chartData, setChartData] = useState({
    chartDataBW: {
      labels: [
        '12/1/2018',
        '12/2/2018',
        '12/3/2018',
        '12/4/2018',
        '12/5/2018',
        '12/6/2018',
        '12/7/2018'
      ],
      datasets: [
        {
          label: 'Body Weight',
          data: [160, 154, 152, 152, 153, 163, 154],
          backgroundColor: ['rgba(255,99,132,0.6']
        }
      ]
    }
  });

  return (
    <div className="chart">
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};
export default Chart;
