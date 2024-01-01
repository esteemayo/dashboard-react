import ListItem from '../listItem/Listtem';
import { MenuItemProps } from '../../types';

import './menuItem.scss';

const MenuItem = ({ title, listItems }: MenuItemProps) => {
  return (
    <div className='menuItem'>
      <span className='title'>{title}</span>
      {listItems.map((item) => {
        return <ListItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default MenuItem;
