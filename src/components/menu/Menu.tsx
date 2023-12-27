import { menu } from '../../data';
import ListItem from '../listItem/Listtem';

import './menu.scss';

const Menu = () => {
  return (
    <aside className='menu'>
      {menu.map((item) => {
        const { id, title, listItems } = item;
        return (
          <div key={id} className='item'>
            <span className='title'>{title}</span>
            {listItems.map((item) => {
              return <ListItem key={item.id} {...item} />;
            })}
          </div>
        );
      })}
    </aside>
  );
};

export default Menu;
