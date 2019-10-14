import React, { Component } from 'react';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

class BloodGlucoseChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartDataBG: {
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
            label: 'Blood Glucose',
            data: [160, 154, 152, 152, 153, 163, 154],
            backgroundColor: ['rgba(255,99,132,0.6']
          }
        ]
      }
    };
  }
  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartDataBG}
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
  }
}
export default BloodGlucoseChart;
