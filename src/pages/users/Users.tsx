import { useQuery } from '@tanstack/react-query';

import Add from '../../components/add/Add';
import DataTable from '../../components/dataTable/DataTable';

import { userColumns } from '../../data';
import { useAddStore } from '../../hooks/useAddStore';

import './users.scss';

const Users = () => {
  const isOpen = useAddStore((state) => state.isOpen);
  const onClose = useAddStore((state) => state.onClose);
  const onOpen = useAddStore((state) => state.onOpen);

  const { isLoading, data } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      fetch('http://localhost:8800/api/v1/users').then((res) => res.json()),
  });

  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button onClick={onOpen}>Add new user</button>
      </div>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <DataTable slug='users' columns={userColumns} rows={data} />
      )}
      <Add
        slug='user'
        columns={userColumns}
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
};

export default Users;
