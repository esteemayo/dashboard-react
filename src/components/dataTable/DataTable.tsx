import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
// import { GridToolbar } from '@mui/x-data-grid-premium';

import { DataTableProps } from '../../types';

import './dataTable.scss';

const DataTable = ({ columns, rows, slug }: DataTableProps) => {
  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className='action'>
          <Link to={`/${slug}/${params.row.id}`}>
            <img src='/view.svg' alt='edit icon' />
          </Link>
          <button type='button'>
            <img src='/delete.svg' alt='delete icon' />
          </button>
        </div>
      );
    },
  };

  return (
    <div className='dataTable'>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          className='dataGrid'
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          // slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </Box>
    </div>
  );
};

export default DataTable;
