import { Link } from 'react-router-dom';

import './menu.scss';

const Menu = () => {
  return (
    <aside className='menu'>
      <div className='item'>
        <span className='title'>Main</span>
        <Link to='/' className='listItem'>
          <img src='/home.svg' alt='' />
          <span className='listItemTitle'>Home</span>
        </Link>
        <Link to='/' className='listItem'>
          <img src='/profile.svg' alt='' />
          <span className='listItemTitle'>Profile</span>
        </Link>
      </div>
      <div className='item'>
        <span className='title'>Main</span>
        <Link to='/' className='listItem'>
          <img src='/home.svg' alt='' />
          <span className='listItemTitle'>Home</span>
        </Link>
        <Link to='/' className='listItem'>
          <img src='/profile.svg' alt='' />
          <span className='listItemTitle'>Profile</span>
        </Link>
      </div>
    </aside>
  );
};

export default Menu;
