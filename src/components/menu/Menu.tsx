import { menu } from '../../data';
import MenuItem from '../menuItem/MenuItem';

import './menu.scss';

const Menu = () => {
  return (
    <aside className='menu'>
      {menu.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </aside>
  );
};

export default Menu;
