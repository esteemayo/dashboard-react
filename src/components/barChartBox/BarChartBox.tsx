import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';

import { BarChatBoxProps } from '../../types';

import './barChartBox.scss';

const BarChartBox = ({ title, color, dataKey, chartData }: BarChatBoxProps) => {
  return (
    <div className='wrapper'>
      <h1>{title}</h1>
      <div className='chart'>
        <ResponsiveContainer width='99%' height={150}>
          <BarChart data={chartData}>
            <Tooltip
              contentStyle={{
                backgroundColor: '#2a3447',
                borderRadius: '0.5rem',
              }}
              labelStyle={{ display: 'none' }}
              cursor={false}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
