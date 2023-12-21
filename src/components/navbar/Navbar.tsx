import './navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src='logo.svg' alt='logo' />
        <span>Esteem Admin</span>
      </div>
      <div className='icons'>
        <img src='/search.svg' alt='search icon' className='icon' />
        <img src='/app.svg' alt='app icon' className='icon' />
        <img src='/expand.svg' alt='expand icon' className='icon' />
        <div className='notification'>
          <img
            src='/notifications.svg'
            alt='notification icon'
            className='icon'
          />
          <span>1</span>
        </div>
        <div className='user'>
          <img src='/user.jpeg' alt='avatar' className='' />
          <span>Jane</span>
        </div>
        <img src='/settings.svg' alt='settings icon' className='icon' />
      </div>
    </nav>
  );
};

export default Navbar;
