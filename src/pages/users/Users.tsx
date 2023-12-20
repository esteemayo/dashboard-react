import Add from '../../components/add/Add';
import DataTable from '../../components/dataTable/DataTable';

import { userColumns, userRows } from '../../data';
import { useAddStore } from '../../hooks/useAddStore';

import './users.scss';

const Users = () => {
  const isOpen = useAddStore((state) => state.isOpen);
  const onClose = useAddStore((state) => state.onClose);
  const onOpen = useAddStore((state) => state.onOpen);

  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button onClick={onOpen}>Add new user</button>
      </div>
      <DataTable columns={userColumns} rows={userRows} slug='users' />
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
