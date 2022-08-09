import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement,Legend,Tooltip} from 'chart.js';
import { BarChart, Bar, XAxis, YAxis ,Label} from 'recharts';
import './tl.css';
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

const data = {
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

const data2 = [
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
const ticketList = () => {
  return (
    <div>
      
      <div className='graph-container'>
        <div className='doughnut-graph-label-container'>
          Ticket Count
        </div>
      
        <Doughnut data={data} options={options} />
      </div>
      
      <div className='graph-container'>
        <div className='barchart-graph-label-container'>
            Ticket Count
        </div>
        <BarChart
          width={500}
          height={300}
          data={data2}
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
  )
}

export default ticketList;
