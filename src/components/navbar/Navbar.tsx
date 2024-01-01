import Icon from '../icon/Icon';
import UserInfo from '../userInfo/UserInfo';
import Logo from '../logo/Logo';

import './navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Logo />
      <div className='icons'>
        <Icon src='/search.svg' className='icon' />
        <Icon src='/app.svg' className='icon' />
        <Icon src='/expand.svg' className='icon' />
        <div className='notification'>
          <Icon src='/notifications.svg' />
          <span>1</span>
        </div>
        <UserInfo />
        <Icon src='/settings.svg' className='icon' />
      </div>
    </nav>
  );
};

export default Navbar;
