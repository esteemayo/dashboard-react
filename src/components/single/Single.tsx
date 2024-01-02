import Chart from '../chart/Chart';
import InfoDetails from '../infoDetails/InfoDetails';
import Activity from '../activity/Activity';

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
          <InfoDetails info={info} />
        </div>
        <hr />
        {chart && <Chart id={id} chart={chart} />}
      </div>
      <div className='activities'>
        <h2>Latest activities</h2>
        <ul>
          {activities?.map((item, index) => {
            return <Activity key={index} {...item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Single;
