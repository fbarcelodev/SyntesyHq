import React from 'react';
import ReactChartist from 'react-chartist';
import Chartist from 'chartist';

const dataPerformance = {
  labels: ['01','02','03', '04', '05', '06', '07', '08', '09', '10', '11','12','13','14', '15', '16', '17', '18', '19', '20', '21', '22'],
  series: [
    [1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14, 13]
  ]
};

const optionsPerformance = {
  showPoint: false,
  lineSmooth: true,
  height: "260px",
  axisX: {
    showGrid: false,
    showLabel: true
  },
  axisY: {
    offset: 40,
  },
  low: 0,
  high: 16
};

const PerformanceChart = () => (
  <div>
    <div className="header">
      <h4>Speed</h4>
      <p className="category">Gráfico de velocidad con puntos</p>
    </div>
    <div className="content">
      <ReactChartist data={dataPerformance} options={optionsPerformance} type="Line" className="ct-chart" />
    </div>
  </div>
);

export default PerformanceChart;