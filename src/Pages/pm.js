import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import './pm.css';
import { palette } from '@mui/system';
import { Box } from '@mui/system';


const pm = () => {
  const columns = [
  { 
    field: 'id', 
    headerName: 'Machine ID',
   flex: 1,
   editable: true,
  },
  {
    field: 'department',
    headerName: 'Department',
   flex: 1,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    flex: 1,
    editable: true,
  },
  {
    field: 'frequency',
    headerName: 'Frequency',
    flex: 1,
    type: 'number',
    editable: false,
  },
  {
    field: 'operatorName',
    headerName: 'Operator Name',
    flex: 1,
    editable: true,
   },
   {
    field: 'completed',
    headerName: 'Completed',
    flex: 1,
    editable: true,
   },
   {
    field: 'toticket',
    headerName: 'To Ticket',
    flex: 1,
    editable: true,
   },
];

const rows = [
  { id: 1, },
  { id: 2, },
  { id: 3, },
  { id: 4, },
  { id: 5, },
  { id: 6, },
  { id: 7, },
  { id: 8, },
  { id: 9, },
]

  return (
   <div>
    <div className="breadcrumb-topic">Maintainence / pm</div>
     <div className="pm-bc">
      <div style={{ height: 500, width: '95%' }} className="table">
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
     
      <DataGrid  sx={{
   
    
    '& .MuiDataGrid-cell:hover': {
      color: 'primary.main',
    },
    bgcolor:'text.light',
  }}
        columnResizingAnimationMode="Interpolate"
        columnResizingMode="Deferred"
        disableColumnMenu
        rows={rows}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        disableColumnFilter
        pagination
        disableDensitySelector
        
        components={{ Toolbar: GridToolbar }}
        componentsProps={{

          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
   
    </div></div>
    </div></div></div>
  )
}

export default pm;