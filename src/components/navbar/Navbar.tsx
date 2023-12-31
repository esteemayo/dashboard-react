import Icon from '../icon/Icon';
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
          <img src='/notifications.svg' alt='notification icon' />
          <span>1</span>
        </div>
        <div className='user'>
          <img src='/user.jpeg' alt='avatar' />
          <span>Jane</span>
        </div>
        <img src='/settings.svg' alt='settings icon' className='icon' />
      </div>
    </nav>
  );
};

export default Navbar;
