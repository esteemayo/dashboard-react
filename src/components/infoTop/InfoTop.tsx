import { InfoTopProps } from '../../types';

const InfoTop = ({ img, title }: InfoTopProps) => {
  return (
    <div className='info__top'>
      {img && <img src={img} alt={title} />}
      <h1>{title}</h1>
      <button type='button'>Update</button>
    </div>
  );
};

export default InfoTop;
