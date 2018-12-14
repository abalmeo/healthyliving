import React, { Component } from 'react';
import axios from "axios";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chartjs-plugin-annotation";


class BodyWeightChart extends Component {
    constructor(props) {
        super(props)
        this.state = {

            chartDataBW: {
                labels: ['12/1/2018', '12/2/2018', '12/3/2018',
                    '12/4/2018', '12/5/2018', '12/6/2018', '12/7/2018'
                ],
                datasets: [
                    {

                        data: [
                            160, 154, 152, 152, 153, 163, 154
                        ],
                        backgroundColor: [
                            'rgba(107, 185, 240, 1)'
                        ]


                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartDataBW}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: "Body Weight (lbs)",
                            fontSize: 15
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            title: 'Body Weight'
                        },
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                  display: true,
                                  labelString: 'lbs'
                                }
                              }],
                              xAxes: [{
                                scaleLabel: {
                                  display: true,
                                  labelString: 'Day'
                                }
                              }]
                        },
                    }}

                />
            </div>
        )
    }
}
export default BodyWeightChart;