import React from 'react';
import { obtainChartData } from './graphUtils';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

const BodyWeightChart = ({ bodyWeight }) => {
  let dataPoints = obtainChartData(bodyWeight);

  return (
    <div className="chart">
      <Line
        data={dataPoints}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Body Weight (lbs)',
            fontSize: 15
          },
          legend: {
            display: false,
            position: 'right',
            title: 'Body Weight'
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'lbs'
                }
              }
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Day'
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};

export default BodyWeightChart;
