export const obtainChartData = (datapoints, labelName) => {
  let graphInformation = {
    labels: [],
    datasets: [
      {
        data: [],
        label: labelName,
        backgroundColor: ['rgba(107, 185, 240, 1)']
      }
    ]
  };

  const { labels, datasets } = graphInformation;

  // Loop through data coming in
  datapoints.forEach(datapoint => {
    labels.push(datapoint.date);
    datasets[0].data.push(datapoint.value);
  });

  return graphInformation;
};

export const obtainBPData = (datapoints, labelName) => {
  let graphInformation = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Systolic',
        backgroundColor: 'rgba(153,255,51,0.4)'
      },
      {
        data: [],
        label: 'Diastolic',
        backgroundColor: 'rgba(255,153,0,0.4)'
      }
    ]
  };

  const { labels, datasets } = graphInformation;

  // Loop through data coming in
  datapoints.forEach(datapoint => {
    labels.push(datapoint.date);
    datasets[0].data.push(datapoint.systolic);
    datasets[1].data.push(datapoint.diastolic);
  });

  return graphInformation;
};
