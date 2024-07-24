import * as echarts from 'echarts';

export const getOption =(source: any, flag: boolean)=> {

  const { xAxisData, data1, data2 } = source;

  return {
    animation: flag,
    title: {
      text: 'Bar Animation Delay'
    },
    legend: {
      data: ['bar', 'bar2']
    },
    toolbox: {
      feature: {
        magicType: {
          type: ['stack']
        },
        dataView: {},
        saveAsImage: {
          pixelRatio: 2
        }
      }
    },
    tooltip: {},
    xAxis: {
      data: xAxisData,
      splitLine: {
        show: false
      }
    },
    yAxis: {},
    series: [
      {
        name: 'bar',
        type: 'bar',
        data: data1,
        emphasis: {
          focus: 'series'
        },
        animationDelay: function (idx:any) {
          return idx * 10;
        }
      },
      {
        name: 'bar2',
        type: 'bar',
        data: data2,
        emphasis: {
          focus: 'series'
        },
        animationDelay: function (idx:any) {
          return idx * 10 + 100;
        }
      }
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx:any) {
      return idx * 5;
    }
  };
}