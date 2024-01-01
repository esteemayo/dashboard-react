import Icon from '../icon/Icon';

import './userInfo.scss';

const UserInfo = () => {
  return (
    <div className='user'>
      <Icon src='/user.jpeg' />
      <span>Jane</span>
    </div>
  );
};

export default UserInfo;
