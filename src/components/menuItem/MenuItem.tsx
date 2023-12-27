import ListItem from '../listItem/Listtem';

import './menuItem.scss';

const MenuItem = ({ title, listItems }) => {
  return (
    <div className='item'>
      <span className='title'>{title}</span>
      {listItems.map((item) => {
        return <ListItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default MenuItem;
