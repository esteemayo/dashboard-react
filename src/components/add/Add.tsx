import { useCallback, useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useMutation, QueryClient } from '@tanstack/react-query';

import { AddProps } from '../../types';

import './add.scss';

const Add = ({ slug, columns, isOpen, onClose }: AddProps) => {
  const queryClient = new QueryClient();
  const [showModal, setShowModal] = useState(isOpen);

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`http://localhost:8800/api/v1/${slug}s`, {
        method: 'POST',
        body: JSON.stringify({
          id: 111,
          img: '',
          lastName: 'Doe',
          firstName: 'John',
          email: 'jdoe@example.com',
          phone: '123 456 789',
          createdAt: '22.12.2023',
          verified: true,
        }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`${slug}s`] });
    },
  });

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

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      mutation.mutate();
    },
    [mutation]
  );

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
          <FaTimes />
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
