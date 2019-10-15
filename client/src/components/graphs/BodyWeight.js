import React, { useState, useEffect } from 'react';
import { obtainChartData } from './graphUtils';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

const BodyWeightChart = () => {
  const [bodyWeightValues, setBodyWeightValues] = useState({
    bodyWeight: [
      {
        date: '12/1/2018',
        value: 160
      },
      {
        date: '12/2/2018',
        value: 152
      },
      {
        date: '12/3/2018',
        value: 155
      },
      {
        date: '12/4/2018',
        value: 168
      },
      {
        date: '12/5/2018',
        value: 170
      },
      {
        date: '12/6/2018',
        value: 171
      },
      {
        date: '12/7/2018',
        value: 172
      }
    ]
  });

  const { bodyWeight } = bodyWeightValues;

  let dataPoints = obtainChartData(bodyWeight, 'Body Weight');
  console.log('dataPoints', dataPoints);

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
