import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement,Legend,Tooltip} from 'chart.js';
import './pm.css';
Chart.register(ArcElement,Legend,Tooltip);
const options = {
  legend: {
    display: true,
    position: 'bottom'
  },
  elements: {
    arc: {
      borderWidth: 5
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

const pm = () => {

  return (
    <div>
      <h1>Predictive maintainance</h1>
      <div className="pm-doughnut">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  )
}

export default pm