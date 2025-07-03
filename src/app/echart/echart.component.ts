import { Component } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.css'],
})
export class EchartComponent {
  years = ['-- All --', 2013, 2014, 2015];
  schemas = ['-- All --', 'Advanced', 'Minimal'];

  selectedYear = 2015;
  selectedSchema = 'Default';
  stats = [
    { icon: 'gps_fixed', value: 26797, label: 'Target (till March 2025)' },
    { icon: 'emoji_people', value: 71839, label: 'Trained' },
    { icon: 'engineering', value: 23097, label: 'Placed/Settled' },
    { icon: 'assignment_ind', value: 14652, label: 'Assessed' },
    { icon: 'verified', value: 46291, label: 'Certified' },
    { icon: 'store', value: 1703, label: 'Centres' },
    { icon: 'category', value: 502, label: 'Trades', colspan: 2 },
  ];
  metrics = [
    {
      value: '26797',
      label: 'Target (till March 2025)',
      icon: 'track_changes',
    },
    { value: '71839', label: 'Trained', icon: 'engineering' },
    { value: '23097', label: 'Placed/Settled', icon: 'build_circle' },
    { value: '14652', label: 'Assessed', icon: 'assignment_turned_in' },
    { value: '46291', label: 'Certified', icon: 'verified' },
    { value: '1703', label: 'Centres', icon: 'location_city' },
    { value: '502', label: 'Trades', icon: 'precision_manufacturing' },
  ];
  tiles = [
    { icon: 'track_changes', number: 42, label: 'Connections' },
    { icon: 'whatshot', number: 42, label: 'Connections' },
    { icon: 'public', number: 42, label: 'Connections' },
    { icon: 'domain', number: 42, label: 'Connections' },
    { icon: 'location_city', number: 42, label: 'Connections' },
    { icon: 'store_mall_directory', number: 42, label: 'Connections' },
  ];

  bottomTile = { icon: 'device_hub', number: 42, label: 'Connections' };
  ngAfterViewInit(): void {
    const chartDom = document.getElementById('main') as HTMLDivElement;
    const myChart: echarts.ECharts = echarts.init(chartDom);

    const option: echarts.EChartsOption = {
      tooltip: {},
      legend: { top: 'bottom' },
      dataset: {
        source: [
          ['product', 'Trained', 'Placed', 'Assessed', 'Certified'],
          ['2022-2023', 1800, 4500, 1500, 2800],
          ['2021-2022', 4400, 3800, 3000, 2500],
          ['2020-2021', 3200, 3500, 3500, 2000],
          ['2019-2020', 3100, 2200, 2100, 4000],
        ],
      },
      xAxis: { type: 'category' },
      yAxis: {
        min: 0,
        max: 4500,
        interval: 500,
      },
      series: [
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
      ],
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
      myChart.resize();
    });
  }
}
