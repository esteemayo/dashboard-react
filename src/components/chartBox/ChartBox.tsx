import { Link } from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

import { ChartBoxProps } from '../../types';

import './chartBox.scss';

const ChartBox = ({
  color,
  icon,
  title,
  number,
  dataKey,
  percentage,
  chartData,
}: ChartBoxProps) => {
  return (
    <div className='chartBox'>
      <div className='boxInfo'>
        <div className='title'>
          <img src={icon} alt='' />
          <span>{title}</span>
        </div>
        <h1>{number}</h1>
        <Link to='/' style={{ color }}>
          View all
        </Link>
      </div>
      <div className='chartInfo'>
        <div className='chart'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
                labelStyle={{ display: 'none' }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type='monotone'
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='texts'>
          <span
            className='percentage'
            style={{ color: percentage < 0 ? 'tomato' : 'limegreen' }}
          >
            {percentage}%
          </span>
          <span className='duration'>this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
