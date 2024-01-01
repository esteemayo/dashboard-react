import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({ id, chart }) => {
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
              backgroundColor: 'transparent',
              border: 'none',
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
