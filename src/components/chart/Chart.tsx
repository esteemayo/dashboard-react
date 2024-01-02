import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { ChartProps } from '../../types';

const Chart = ({ id, chart }: ChartProps) => {
  return (
    <div className='chart'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          key={id}
          width={500}
          height={300}
          data={chart.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: '#384256',
              border: 'none',
              borderRadius: '0.5rem',
            }}
          />
          <Legend />
          {chart.dataKeys.map((item) => {
            return (
              <Line type='monotone' dataKey={item.name} stroke={item.color} />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
