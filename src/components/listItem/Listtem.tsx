import { Link } from 'react-router-dom';

import './listItem.scss';

const ListItem = ({ url, icon, title }) => {
  return (
    <Link to={url} className='listItem'>
      <img src={icon} alt={title.toLowerCase()} />
      <span className='listItemTitle'>{title}</span>
    </Link>
  );
};

export default ListItem;
