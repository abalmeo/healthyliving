import React, { useState } from 'react';
import { obtainBPData } from './graphUtils';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

const BloodPressureChart = bloodPressure => {
  console.log('bloodPressure', bloodPressure);

  let dataPoints = obtainBPData(bloodPressure);
  console.log('dataPoints', dataPoints);

  return (
    <div className="chart">
      <Line
        data={dataPoints}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Blood Pressure mmHg',
            fontSize: 15
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'mmHg'
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
          },
          legend: {
            display: false,
            position: 'right',
            title: 'Blood Pressure'
          }
        }}
      />
    </div>
  );
};
export default BloodPressureChart;
