import { AddProps } from '../../types';

import './add.scss';

const Add = ({ slug, columns, isOpen, onClose }: AddProps) => {
  return (
    <aside className='overlay'>
      <div className='wrapper'>
        <span className='close' onClick={onClose}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form>
          {columns
            .filter((item) => item.field !== 'id' || item.field !== 'img')
            .map((item) => {
              const { type, field, headerName } = item;
              return (
                <div className='item'>
                  <label htmlFor=''>{headerName}</label>
                  <input type={type} placeholder={field} />
                </div>
              );
            })}
        </form>
      </div>
    </aside>
  );
};

export default Add;
