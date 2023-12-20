import { useCallback } from 'react';

import { AddProps } from '../../types';

import './add.scss';

const Add = ({ slug, columns, isOpen, onClose }: AddProps) => {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <aside className={isOpen ? 'overlay active' : 'overlay'}>
      <div className='wrapper'>
        <span className='close' onClick={onClose}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
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
          <button type='submit'>Send</button>
        </form>
      </div>
    </aside>
  );
};

export default Add;
