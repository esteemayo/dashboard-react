import { SingleProps } from '../../types';

import './single.scss';
import Chart from '../chart/Chart';

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
        {chart && <Chart id={id} chart={chart} />}
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
