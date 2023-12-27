import { Link } from 'react-router-dom';

import './menuItem.scss';

const MenuItem = ({ url, icon, title }) => {
  return (
    <Link to={url} className='listItem'>
      <img src={icon} alt={title.toLowerCase()} />
      <span className='listItemTitle'>{title}</span>
    </Link>
  );
};

export default MenuItem;
