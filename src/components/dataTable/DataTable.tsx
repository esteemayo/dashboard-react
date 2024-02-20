import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import { DataTableProps } from '../../types';

import './dataTable.scss';

const DataTable = ({ columns, rows, slug }: DataTableProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: number) => {
      return fetch(`http://localhost:8800/api/v1/${slug}/${id}`, {
        method: 'DELETE',
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [slug] });
    },
  });

  const handleDelete = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
      e.stopPropagation();
      mutation.mutate(id);
    },
    [mutation]
  );

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
          <button type='button' onClick={(e) => handleDelete(e, params.row.id)}>
            <img src='/delete.svg' alt='delete icon' />
          </button>
        </div>
      );
    },
  };

  return (
    <div className='dataTable'>
      <DataGrid
        className='dataGrid'
        rows={rows}
        columns={[...columns, actionColumn]}
        getRowId={(row) => row.id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
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
    </div>
  );
};

export default DataTable;
