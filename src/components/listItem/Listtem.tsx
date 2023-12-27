import { Link } from 'react-router-dom';

import { ListItemProps } from '../../types';

import './listItem.scss';

const ListItem = ({ url, icon, title }: ListItemProps) => {
  return (
    <Link to={url} className='listItem'>
      <img src={icon} alt={title.toLowerCase()} />
      <span className='listItemTitle'>{title}</span>
    </Link>
  );
};

export default ListItem;
