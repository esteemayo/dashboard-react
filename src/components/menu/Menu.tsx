import { Link } from 'react-router-dom';

import { menu } from '../../data';

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
              const { id, title, url, icon } = item;
              return (
                <Link key={id} to={url} className='listItem'>
                  <img src={icon} alt={title.toLowerCase()} />
                  <span className='listItemTitle'>{title}</span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </aside>
  );
};

export default Menu;
