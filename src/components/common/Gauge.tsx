import React from 'react';
import { Gauge } from '@ant-design/plots';

interface CustomGaugeProps {
  type: 'success-rate' | 'speed-rate' | 'time';
  percentage: number;
  height: number;
}

export const CustomGauge = (props: CustomGaugeProps): JSX.Element => {
  const config = {
    percent: props.percentage,
    radius: 0.75,
    height: props.height,
    range: {
      ticks:
        props.type === 'success-rate'
          ? [0, 1 / 2, 1]
          : props.type === 'speed-rate'
          ? [0, 1 / 3, 2 / 3, 1]
          : [0, 1 / 2, 1],
      color:
        props.type === 'success-rate'
          ? ['#F5222D', '#00B928']
          : props.type === 'speed-rate'
          ? ['#00B928', '#339AF0', '#F5222D']
          : ['#00B928', '#F5222D'],
      width: 8,
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#339AF0',
          lineWidth: 2,
        },
      },
      pin: {
        style: {
          stroke: '#339AF0',
          lineWidth: 2,
          r: props.type === 'speed-rate' ? 3.5 : 1.5,
          lineDash: [0, 0],
        },
      },
    },
    axis: {
      tickInterval: 1,
      label: null,
      subTickLine: {
        length: -5,
        count: 3,
        style: {
          lineWidth: 2,
        },
      },
    },
  };

  return <Gauge {...config} />;
};

CustomGauge.defaultProps = {
  percentage: 0,
  type: 'speed',
};
