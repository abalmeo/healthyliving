import React, { useState } from 'react';
import axios from 'axios';
import { obtainChartData } from './graphUtils';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

const BloodGlucoseChart = () => {
  // TODO: update with useEffect and real data once functionality is finished; mockdata for now
  const [bloodGlucoseValues, setBloodGlucoseValues] = useState({
    bloodGlucose: [
      {
        date: '12/1/2018',
        value: 160
      },
      {
        date: '12/2/2018',
        value: 154
      },
      {
        date: '12/3/2018',
        value: 152
      },
      {
        date: '12/4/2018',
        value: 152
      },
      {
        date: '12/5/2018',
        value: 153
      },
      {
        date: '12/6/2018',
        value: 163
      },
      {
        date: '12/7/2018',
        value: 154
      }
    ]
  });

  const { bloodGlucose } = bloodGlucoseValues;
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
