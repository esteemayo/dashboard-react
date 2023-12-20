import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
// import { GridToolbar } from '@mui/x-data-grid-premium';

import { DataTableProps } from '../../types';

import './dataTable.scss';

const DataTable = ({ columns, rows }: DataTableProps) => {
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
