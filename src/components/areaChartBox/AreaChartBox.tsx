import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { areaChartData } from '../../data';

import './areaChartBox.scss';

const AreaChartBox = () => {
  return (
    <div className='wrapper'>
      <h1>Revenue analytics</h1>
      <div className='chart'>
        <ResponsiveContainer width='99%' height='100%'>
          <AreaChart
            data={areaChartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='electronics'
              stackId='1'
              stroke='#8884d8'
              fill='#8884d8'
            />
            <Area
              type='monotone'
              dataKey='clothes'
              stackId='1'
              stroke='#82ca9d'
              fill='#82ca9d'
            />
            <Area
              type='monotone'
              dataKey='books'
              stackId='1'
              stroke='#ffc658'
              fill='#ffc658'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChartBox;
