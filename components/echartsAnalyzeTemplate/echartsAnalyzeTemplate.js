import { init } from '../../ec-canvas/echarts';

function initChart(canvas, width, height) {
  const chart = init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var taskCountByHour = [
    {hour: '00:00-01:00', count: 5},
    {hour: '01:00-02:00', count: 3},
    {hour: '02:00-03:00', count: 8},
    {hour: '03:00-04:00', count: 10},
    {hour: '04:00-05:00', count: 2},
    {hour: '05:00-06:00', count: 0},
    {hour: '06:00-07:00', count: 6},
    {hour: '07:00-08:00', count: 3},
    {hour: '08:00-09:00', count: 7},
    {hour: '09:00-10:00', count: 1},
    {hour: '10:00-11:00', count: 5},
    {hour: '11:00-12:00', count: 3} 
  ];

  var hours = taskCountByHour.map(item => item.hour);
  var counts = taskCountByHour.map(item => item.count);

  var option = {
      title: {
          text: '24小时内任务数量变化'
      },
      xAxis: {
          type: 'category',
          data: hours
      },
      yAxis: {
          type: 'value',
          name: '任务数量'
      },
      series: [{
          data: counts,
          type: 'line',
          smooth: true
      }]
  };

  chart.setOption(option);
  return chart;
}
Component({
  properties: {
  },

  data: {
    ec: {
      onInit: initChart
    }
  },

  methods: {
  }
})