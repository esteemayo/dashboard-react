import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { SingleProps } from '../../types';

import './single.scss';

const Single = ({ id, img, title, info, chart, activities }: SingleProps) => {
  return (
    <div className='single'>
      <div className='view'>
        <div className='info'>
          <div className='info__top'>
            {img && <img src={img} alt={title} />}
            <h1>{title}</h1>
            <button type='button'>Update</button>
          </div>
          <div className='info__details'>
            {Object.entries(info).map(([key, value]) => {
              return (
                <div key={key} className='item'>
                  <span className='item__title'>{key}:</span>
                  <span className='item__value'>{value}</span>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        {chart && (
          <div className='chart'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart
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
                <Tooltip />
                <Legend />
                {chart.dataKeys.map((item) => {
                  return (
                    <Line
                      type='monotone'
                      dataKey={item.name}
                      stroke={item.color}
                    />
                  );
                })}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className='activities'>
        <h2>Latest activities</h2>
        <ul>
          {activities?.map((item, index) => {
            const { text, time } = item;
            return (
              <li key={index}>
                <div>
                  <p>{text}</p>
                  <time>{time}</time>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Single;
