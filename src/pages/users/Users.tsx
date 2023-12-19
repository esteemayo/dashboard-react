import DataTable from '../../components/dataTable/DataTable';

import './users.scss';

const Users = () => {
  return (
    <div className='wrapper'>
      <div className='info'>
        <h1>Users</h1>
        <button>Add new user</button>
      </div>
      <DataTable />
    </div>
  );
};

export default Users;
