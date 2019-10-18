import React, { useState } from 'react';
import { obtainBPData } from './graphUtils';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

const BloodPressureChart = () => {
  // TODO: update with useEffect and real data once functionality is finished; mockdata for now
  const [bloodPressureValues, setBloodPressureValues] = useState({
    bloodPressure: [
      {
        date: '12/1/2018',
        systolic: 120,
        diastolic: 90
      },
      {
        date: '12/1/2018',
        systolic: 120,
        diastolic: 80
      },
      {
        date: '12/2/2018',
        systolic: 160,
        diastolic: 90
      },
      {
        date: '12/3/2018',
        systolic: 120,
        diastolic: 80
      },
      {
        date: '12/4/2018',
        systolic: 135,
        diastolic: 95
      },
      {
        date: '12/5/2018',
        systolic: 120,
        diastolic: 80
      },
      {
        date: '12/6/2018',
        systolic: 120,
        diastolic: 80
      },
      {
        date: '12/7/2018',
        systolic: 120,
        diastolic: 80
      }
    ]
  });

  const { bloodPressure } = bloodPressureValues;
  let dataPoints = obtainBPData(bloodPressure);

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
