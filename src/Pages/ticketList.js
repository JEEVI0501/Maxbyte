import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,  ResponsiveContainer ,Label} from 'recharts';
import './tl.css';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement,Legend,Tooltip} from 'chart.js';
Chart.register(ArcElement,Legend,Tooltip);
const options = {
  plugins:{

  legend: {
    display: true,
    position: "right",
    align:"start",
  },
},
  elements: {
    arc: {
      borderWidth: 0,
    }
  }
  
};
const data2 = {
  labels: ["Inprogress", "Completed", "Rejected"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        "#FFCE56",
        "#70BB43", 
        "#F54040"]
    }
  ]
};
const data = [
    {
      name: "June",
      uv: 4000,
      Count: 2400,
      amt: 2400
    },
    {
      name: "July",
      uv: 3000,
      Count: 1398,
      amt: 2210
    },
    {
      name: "Aug",
      uv: 2000,
      Count: 9800,
      amt: 2290
    },
    {
      name: "Sept",
      uv: 2780,
      Count: 3908,
      amt: 2000
    },
    {
      name: "Oct",
      uv: 1890,
      Count: 4800,
      amt: 2181
    },
    {
      name: "Nov",
      uv: 2390,
      Count: 3800,
      amt: 2500
    },
    {
      name: "Dec",
      uv: 3490,
      Count: 4300,
      amt: 2100
    }
  ];

function ticketList() {
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
    headerAlign : 'left',
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
      <div className='tl-main'>
        <div className='graph-container'>
          <div className='child-donut'>
          <div className='doughnut-graph-label-container'>
          Ticket Count
        </div>
        <div className='donut-container'>
        <Doughnut data={data2} options={options} />
        </div>
        
        </div>
        <div className='child-bar'>
        <div className='doughnut-graph-label-container'>
          Ticket Count
        </div>
        <div className='bar-container'>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 65,
          }}
        >

          
          <XAxis dataKey="name" ><Label value='Month'  position='Bottom' offset={55}/></XAxis>
          <YAxis ><Label value='Ticket count' angle={-90} position='insideBottomLeft'/></YAxis>
          <Tooltip />
          
          <Bar dataKey="Count" fill="#223E7F"  barSize={5}/>
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
        </div>
        </div>
        
      </div>
      <div>
     <div className="pm-bc">
      <div style={{ height: 500, width: '95%' }} className="tl-table">
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
    </div>
    );
  }

export default ticketList;