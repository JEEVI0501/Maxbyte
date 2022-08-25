import React,{ useState } from 'react';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import './pm.css';
import { palette } from '@mui/system';
import { Box } from '@mui/system';
import { FiMenu } from "react-icons/fi";
import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { Offcanvas } from 'react-bootstrap';
import { MdAddCircleOutline } from "react-icons/md";
import { FiFilePlus } from "react-icons/fi";

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
}
const Clirt = () => {
      const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    


    const [values,setValues]=useState({
      department: "",
      description: "",
      frequency: "",
      operatorName: "",
      
      toTicket:""


    });

    const [storeData,setStoreData] = useState([]);
    const handleChange=(e)=>{
      e.preventDefault();
      setValues((values)=>({
        ...values,
        [e.target.name]: e.target.value

      }));
    };
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // console.log(values);
  
      setStoreData([...storeData, values]);
    };


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

const Oldrows = [
  { id: 1, department: "AMCS", description: "nTg", frequency:"5",operatorName:"Jeevicksks",toTicket:"Kandhasaami"},
  { id: 2, department: "AMCS", description: "nTg", frequency:"5",operatorName:"Jeevicksks",toTicket:"Kandhasaami"},
  { id: 3, department: "AMCS", description: "nTg", frequency:"5",operatorName:"Jeevicksks",toTicket:"Kandhasaami"},
  { id: 4, department: "AMCS", description: "nTg", frequency:"5",operatorName:"Jeevicksks",toTicket:"Kandhasaami"},
  { id: 5, department: "AMCS", description: "nTg", frequency:"5",operatorName:"Jeevicksks",toTicket:"Kandhasaami"},
  { id: 6, department: "AMCS", description: "nTg", frequency:"5",operatorName:"Jeevicksks",toTicket:"Kandhasaami"},
  { id: 7, department: "AMCS", description: "nTg", frequency:"5",operatorName:"Jeevicksks",toTicket:"Kandhasaami"},
  { id: 8, department: "AMCS", description: "nTg", frequency:"5",operatorName:"Jeevicksks",toTicket:"Kandhasaami"},
  { id: 9, department: "AMCS", description: "nTg", frequency:"5",operatorName:"Jeevicksks",toTicket:"Kandhasaami"}
]
let newId = 10;
const NewRow = storeData?.map((row) => {
  newId+=1;
  

  return {
    id: `${newId}`,
    department: `${row.department}`,
    description: `${row.description}`,
    frequency: `${row.frequency}`,
    operatorName: `${row.operatorName}`,
    toticket: `${row.toTicket}`

  };
  
});
const rows=[...storeData,NewRow]
  return (
   
     <div className="pm-bc">
      <div className="breadcrumb-topic">Maintainence / CLIRT</div>
      <div style={{ height: 400, width: '80%' }} className="table">
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
        

      <Offcanvas show={show} onHide={handleClose} placement='end' >
         <Offcanvas.Header closeButton>
           <Offcanvas.Title style={{color:"#223E7F", textAlign:"center"}}>Add New Entry
           <FiFilePlus  style={{ color: "black", width: "20px", height: "20px",margin:"10px"}} />
           </Offcanvas.Title>
         </Offcanvas.Header >
         <Offcanvas.Body style={{backgroundColor:"#FAFBFC"}}>
           <form onSubmit={handleSubmit} className="Offcanvas-form">
            <label>
              Department :
              <input type="text" name='department' onChange={handleChange} value={values.department}/>
            </label>
            <label>
              Description:
              <input type="text" name='description' onChange={handleChange} value={values.description}/>
            </label>
            <label>
              Frequency:
              <input type="text" name='frequency' onChange={handleChange} value={values.frequency}/>
            </label>
            <label>
              operator name:
              <input type="text" name='operatorName' onChange={handleChange} value={values.operatorName} />
            </label>
           
            <label>
             To ticket :
              <input type="text" name='toTicket' onChange={handleChange} value={values.toTicket}/>
            </label>
            {/* department: "",
      description: "",
      frequency: "",
      operatorName: "",
      completed:"",
      toticket:"" */}
      <div className='submit-button'>
            <Button
            style={{backgroundColor:"#223E7F"}}
            sx={{ border: "1px solid white", width: "100%", height: "45px" }}
            type="submit"
          >
            Add
          </Button>
          </div>
           </form> 
         </Offcanvas.Body>
       </Offcanvas>
       <div className='datagrid-panel'>
            <div className='datagrid-panel-child'>
              <Button style={{backgroundColor:"white",boxShadow:"white"}} variant="primary" onClick={handleShow}>
            
                  
                  <MdAddCircleOutline style={{ color: "black", width: "20px", height: "20px" }} className="AddPm"/>
                  
              </Button>
            </div>

            <div className='datagrid-panel-child'>
              <form >
              <select className='panel-select'>
                  <option value="heavy">Heavy equipment</option>
                  <option value="indoor">Indoor equipment</option>
                  <option selected value="hv">Highly vulnerable</option>
                  <option value="lv">Least vulnerable</option>
              </select>
              </form>
            </div>

            <div className='datagrid-panel-child'>
              <form >
              <select className='panel-select'>
                  <option value="completed">completed</option>
                  <option value="tobechecked">To be checked</option>
                  <option selected value="an">Needed attention</option>
                  <option value="ignore">Ignored</option>
              </select>
              </form>
            </div>
            
        </div>
      <DataGrid  sx={{
   
    
    '& .MuiDataGrid-cell:hover': {
      color: 'primary.main',
    },
    bgcolor:'text.light',
  }}
        columnResizingAnimationMode="Interpolate"
        columnResizingMode="Deferred"
        disableColumnMenu
        rows={NewRow}
        columns={columns}
        checkboxSelection
         disableSelectionOnClick={true}
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
    </div></div>
  )
}

export default Clirt;
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
// import {
//   GridRowModes,
//   DataGridPro,
//   GridToolbarContainer,
//   GridActionsCellItem,
// } from '@mui/x-data-grid-pro';
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomUpdatedDate,
//   randomId,
// } from '@mui/x-data-grid-generator';

// const initialRows = [
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 25,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 36,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 19,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 28,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 23,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
// ];

// function EditToolbar(props) {
//   const { setRows, setRowModesModel } = props;

//   const handleClick = () => {
//     const id = randomId();
//     setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
//     setRowModesModel((oldModel) => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
//     }));
//   };

//   return (
//     <GridToolbarContainer>
//       <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//         Add record
//       </Button>
//     </GridToolbarContainer>
//   );
// }

// EditToolbar.propTypes = {
//   setRowModesModel: PropTypes.func.isRequired,
//   setRows: PropTypes.func.isRequired,
// };

// function Pm() {
//   const [rows, setRows] = React.useState(initialRows);
//   const [rowModesModel, setRowModesModel] = React.useState({});

//   const handleRowEditStart = (params, event) => {
//     event.defaultMuiPrevented = true;
//   };

//   const handleRowEditStop = (params, event) => {
//     event.defaultMuiPrevented = true;
//   };

//   const handleEditClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
//   };

//   const handleSaveClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
//   };

//   const handleDeleteClick = (id) => () => {
//     setRows(rows.filter((row) => row.id !== id));
//   };

//   const handleCancelClick = (id) => () => {
//     setRowModesModel({
//       ...rowModesModel,
//       [id]: { mode: GridRowModes.View, ignoreModifications: true },
//     });

//     const editedRow = rows.find((row) => row.id === id);
//     if (editedRow.isNew) {
//       setRows(rows.filter((row) => row.id !== id));
//     }
//   };

//   const processRowUpdate = (newRow) => {
//     const updatedRow = { ...newRow, isNew: false };
//     setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
//     return updatedRow;
//   };

//   const columns = [
//     { field: 'name', headerName: 'Name', width: 180, editable: true },
//     { field: 'age', headerName: 'Age', type: 'number', editable: true },
//     {
//       field: 'dateCreated',
//       headerName: 'Date Created',
//       type: 'date',
//       width: 180,
//       editable: true,
//     },
//     {
//       field: 'lastLogin',
//       headerName: 'Last Login',
//       type: 'dateTime',
//       width: 220,
//       editable: true,
//     },
//     {
//       field: 'actions',
//       type: 'actions',
//       headerName: 'Actions',
//       width: 100,
//       cellClassName: 'actions',
//       getActions: ({ id }) => {
//         const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

//         if (isInEditMode) {
//           return [
//             <GridActionsCellItem
//               icon={<SaveIcon />}
//               label="Save"
//               onClick={handleSaveClick(id)}
//             />,
//             <GridActionsCellItem
//               icon={<CancelIcon />}
//               label="Cancel"
//               className="textPrimary"
//               onClick={handleCancelClick(id)}
//               color="inherit"
//             />,
//           ];
//         }

//         return [
//           <GridActionsCellItem
//             icon={<EditIcon />}
//             label="Edit"
//             className="textPrimary"
//             onClick={handleEditClick(id)}
//             color="inherit"
//           />,
//           <GridActionsCellItem
//             icon={<DeleteIcon />}
//             label="Delete"
//             onClick={handleDeleteClick(id)}
//             color="inherit"
//           />,
//         ];
//       },
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         height: 500,
//         width: '100%',
//         '& .actions': {
//           color: 'text.secondary',
//         },
//         '& .textPrimary': {
//           color: 'text.primary',
//         },
//       }}
//     >
//       <DataGridPro
//         rows={rows}
//         columns={columns}
//         editMode="row"
//         rowModesModel={rowModesModel}
//         onRowEditStart={handleRowEditStart}
//         onRowEditStop={handleRowEditStop}
//         processRowUpdate={processRowUpdate}
//         components={{
//           Toolbar: EditToolbar,
//         }}
//         componentsProps={{
//           toolbar: { setRows, setRowModesModel },
//         }}
//         experimentalFeatures={{ newEditingApi: true }}
//       />
//     </Box>
//   );
// }
// export default  Pm