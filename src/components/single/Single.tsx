import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import './single.scss';

const Single = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className='single'>
      <div className='view'>
        <div className='info'>
          <div className='topInfo'>
            <img src='' alt='' />
            <h1>John doe</h1>
            <button type='button'>Update</button>
          </div>
          <div className='details'>
            <div className='item'>
              <span className='item__title'>Username:</span>
              <span className='item__value'>John doe</span>
            </div>
            <div className='item'>
              <span className='item__title'>Username:</span>
              <span className='item__value'>John doe</span>
            </div>
            <div className='item'>
              <span className='item__title'>Username:</span>
              <span className='item__value'>John doe</span>
            </div>
          </div>
        </div>
        <div className='chart'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='pv'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
              <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='activities'>
        <h2>Latest activities</h2>
        <ul>
          <li>
            <div>
              <p>John Doe purchased Playstation & Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>John Doe purchased Playstation & Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>John Doe purchased Playstation & Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Single;
