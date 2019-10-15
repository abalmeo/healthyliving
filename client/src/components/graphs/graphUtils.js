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
