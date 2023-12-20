import { useCallback, useEffect, useState } from 'react';

import { AddProps } from '../../types';

import './add.scss';

const Add = ({ slug, columns, isOpen, onClose }: AddProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();

      const target = e.target as HTMLElement;

      if (target.classList.contains('overlay')) {
        onClose();
      }
    },
    [onClose]
  );

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return;
  }

  return (
    <aside
      onClick={handleClose}
      className={showModal ? 'overlay active' : 'overlay'}
    >
      <div className='modal'>
        <span className='close' onClick={onClose}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== 'id' && item.field !== 'img')
            .map((item) => {
              const { type, field, headerName } = item;
              return (
                <div key={field} className='item'>
                  <label htmlFor={field}>{headerName}</label>
                  <input id={field} type={type} placeholder={field} />
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
