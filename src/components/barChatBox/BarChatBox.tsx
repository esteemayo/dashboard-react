import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';

import { BarChatBoxProps } from '../../types';

import './barChatBox.scss';

const BarChatBox = ({ title, color, dataKey, chartData }: BarChatBoxProps) => {
  return (
    <div className='wrapper'>
      <h1>{title}</h1>
      <div className='chart'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart width={150} height={40} data={chartData}>
            <Tooltip
              contentStyle={{
                backgroundColor: '#2a3447',
                borderRadius: '0.5rem',
              }}
              labelStyle={{ display: 'none' }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChatBox;
