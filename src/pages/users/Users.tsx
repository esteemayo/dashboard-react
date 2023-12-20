import { userColumns, userRows } from '../../data';
import DataTable from '../../components/dataTable/DataTable';

import './users.scss';

const Users = () => {
  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button>Add new user</button>
      </div>
      <DataTable columns={userColumns} rows={userRows} />
    </div>
  );
};

export default Users;
