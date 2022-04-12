import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



const BarChart = (props) => {
  console.log(props)
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Number-Occurence Chart',
      },
    },
  };

  const labels = props.data.map(item => {
    return item.number
  }).sort((a,b) =>{ 
    
    return a-b
  })

  const sortedData = props.data.sort((a,b) => {
    return a.number - b.number
  })

  console.log(sortedData)
  
  

  const data = {
    labels,
    datasets: [
      {
        label: 'Occurence',
        data: sortedData.map((item) => item.occurence),
        backgroundColor: '#2980b9',
      }
    ],
  };
  return <Bar options={options} data={data} />;
}

export default BarChart;