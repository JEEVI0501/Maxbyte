import '../Pages/dashboard.css';
import Card from 'react-bootstrap/Card';
import { Doughnut } from 'react-chartjs-2';
import './tl.css';
import {Chart, ArcElement,Legend,Tooltip} from 'chart.js';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,  ResponsiveContainer ,Label} from 'recharts';
Chart.register(ArcElement,Legend,Tooltip);

const dashboard = () => {
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
  labels: ["Less than a week", "2 to 3 weeks", "More than 3 weeks"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        "#FF6384",
        "#36A2EB", 
        "#FFCE56"]
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
  return (
    <div  className='dashBoard-main'>
      <div className="dashBoard-wholeCard">
      <Card style={{width: '13rem', height:'8rem'}} className="dashBoard-cards">
        <Card.Body>
          <Card.Text className="dashBoard-cardHeader">Total Tickets</Card.Text>
          <Card.Title className="dashBoard-cardtext">23</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{width: '13rem', height:'8rem'}} className="dashBoard-cards">
        <Card.Body>
         <Card.Text className="dashBoard-cardHeader">Total Tickets</Card.Text>
          <Card.Title className="dashBoard-cardtext">23</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{width: '13rem', height:'8rem'}} className="dashBoard-cards">
        <Card.Body>
          <Card.Text className="dashBoard-cardHeader">Total Tickets</Card.Text>
          <Card.Title className="dashBoard-cardtext">23</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{width: '13rem', height:'8rem'}} className="dashBoard-cards">
        <Card.Body>
          <Card.Text className="dashBoard-cardHeader">Total Tickets</Card.Text>
          <Card.Title className="dashBoard-cardtext">23</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{width: '13rem', height:'8rem'}} className="dashBoard-cards">
        <Card.Body>
          <Card.Text className="dashBoard-cardHeader">Total Tickets</Card.Text>
          <Card.Title className="dashBoard-cardtext">23</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{width: '13rem', height:'8rem'}} className="dashBoard-cards">
        <Card.Body>
          <Card.Text className="dashBoard-cardHeader">Total Tickets</Card.Text>
          <Card.Title className="dashBoard-cardtext">23</Card.Title>
        </Card.Body>
      </Card>
      </div>
        <div>
        <div className='dashBoardgraph-container'>
          <div className='dashBoardchild-donut'>
          <div className='doughnut-graph-label-container'>
          Aging Of Ticket
        </div>
        <div className='dashBoarddonut-container'>
        <Doughnut data={data2} options={options} />
        </div>
        
        </div>
        </div>
      <div>

        <div className='dashBoardgraph-container'>
          <div className='dashBoardchild-donut'>
          <div className='doughnut-graph-label-container'>
          Aging Of Ticket
        </div>
        <div className='dashBoarddonut-container'>
        <Doughnut data={data2} options={options} />
        </div>
        
        </div>
        </div>
      </div>
    </div>
    <div>
      <div className='bar-container'>
        <div>
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
        <div>
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
    </div>
</div>
  )
}

export default dashboard