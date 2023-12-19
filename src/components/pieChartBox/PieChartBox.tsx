import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

import { pieChartData } from '../../data';

import './pieChartBox.scss';

const PieChartBox = () => {
  return (
    <div className='wrapper'>
      <h1>Leads by Source</h1>
      <div className='chart'>
        <ResponsiveContainer width='99%' height={300}>
          <PieChart width={800} height={400}>
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                borderRadius: '0.5rem',
              }}
            />
            <Pie
              data={pieChartData}
              innerRadius={'70%'}
              outerRadius={'90%'}
              paddingAngle={5}
              dataKey='value'
            >
              {pieChartData.map((item) => {
                const { name, color } = item;
                return <Cell key={name} fill={color} />;
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='options'>
        {pieChartData.map((item) => {
          const { name, color, value } = item;
          return (
            <div key={name} className='option'>
              <div className='title'>
                <div className='dot' style={{ backgroundColor: color }} />
                <span>{name}</span>
              </div>
              <span>{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PieChartBox;
