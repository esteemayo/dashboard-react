import { topDealUsers } from '../../data';
import { formatCurrency } from '../../utils/formatCurrency';

import './topBox.scss';

const TopBox = () => {
  return (
    <div className='wrapper'>
      <h1>Top deals</h1>
      <div className='list'>
        {topDealUsers.map((item) => {
          const { id, img, username, email, amount } = item;
          return (
            <div key={id} className='listItem'>
              <div className='user'>
                <img src={img} alt={username} />
                <div className='userTexts'>
                  <span className='username'>{username}</span>
                  <span className='email'>{email}</span>
                </div>
              </div>
              <span className='amount'>{formatCurrency(amount)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopBox;
