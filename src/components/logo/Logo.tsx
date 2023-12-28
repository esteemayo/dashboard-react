import { Link } from 'react-router-dom';

import './logo.scss';

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>
        <img src='/logo.svg' alt='logo' />
        <span>Esteem Admin</span>
      </Link>
    </div>
  );
};

export default Logo;
