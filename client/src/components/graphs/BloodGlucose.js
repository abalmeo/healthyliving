import React from 'react';
import { obtainChartData } from './graphUtils';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

const BloodGlucoseChart = ({ bloodGlucose }) => {
  let dataPoints = obtainChartData(bloodGlucose, 'Blood Glucose');

  return (
    <div className="chart">
      <Line
        data={dataPoints}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Blood Glucose (mg/dL)',
            fontSize: 15
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'mg/dL'
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
            title: 'Blood Glucose'
          }
        }}
      />
    </div>
  );
};
export default BloodGlucoseChart;
