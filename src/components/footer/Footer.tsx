import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <span>
        <Link to='/'>Esteem Admin</Link>
      </span>
      <span>© Esteem Admin dashboard</span>
    </footer>
  );
};

export default Footer;
