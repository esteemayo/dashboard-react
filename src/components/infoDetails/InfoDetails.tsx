const InfoDetails = ({ info }) => {
  return (
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
  );
};

export default InfoDetails;
