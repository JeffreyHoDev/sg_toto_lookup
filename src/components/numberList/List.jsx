import './list.css'
import {useState, useEffect} from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import BarChart from '../chart/BarChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import Button from '@mui/material/Button';
import TableChartIcon from '@mui/icons-material/TableChart';


const List = () => {
    let [fetchedData, setData] = useState([])
    let [occurenceStat, setOccurence] = useState("default")
    let [numberStat, setNumber] = useState("default")
    let [dataView, setDataView] = useState("table")
  
    useEffect(() => {
      fetch('http://localhost:9999/data')
      .then(response => response.json())
      .then(data => setData([].concat(data)))
      .catch(console.log)
    },[]);

    let sortOccurence = (data, stat) => {
        switch(stat) {
            case "default":
                data.sort((a,b) => {
                    return a.occurence - b.occurence
                })
                setOccurence("ascending")
                setData([].concat(data))
                break
            case "descending":
                data.sort((a,b) => {
                    return a.occurence - b.occurence
                })
                setOccurence("ascending")
                setData([].concat(data))
                break
            case "ascending":
                data.sort((a,b) => {
                    return b.occurence - a.occurence
                })
                setOccurence("descending")
                setData([].concat(data))
                break
            default:
                break             
        }
    }

    let sortNumber = (data, stat) => {
        switch(stat) {
            case "default":
                data.sort((a,b) => {
                    return a.number - b.number
                })
                setNumber("ascending")
                setData([].concat(data))
                break
            case "descending":
                data.sort((a,b) => {
                    return a.number - b.number
                })
                setNumber("ascending")
                setData([].concat(data))
                break
            case "ascending":
                data.sort((a,b) => {
                    return b.number - a.number
                })
                setNumber("descending")
                setData([].concat(data))
                break
            default:
                break             
        }
    }


    return (
        <>
        {
            dataView === "table" ? (   
                <div className="List-div">
                <Button variant="outlined" className="view-button" onClick={() => setDataView("barchart")}>Chart View <BarChartIcon/></Button>
                <h3>Number-Occurence Table (Data started from 1st Jan 2021)</h3>
                <table>
                    <thead>
                        <tr>
                            <th onClick={(e) => sortNumber(fetchedData,numberStat)}>Number {numberStat === "ascending" ? <ArrowDownwardIcon/>: <ArrowUpwardIcon/>}</th>
                            <th onClick={(e) => sortOccurence(fetchedData,occurenceStat)}>Occurence (Count) {occurenceStat === "ascending" ? <ArrowDownwardIcon/>: <ArrowUpwardIcon/>}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        fetchedData.length > 0 ? 
                        fetchedData.map((item,index) => {
                            return <tr key={`item_${index}`}>
                                <td>{item.number}</td>
                                <td>{item.occurence}</td>
                            </tr>
                        })
                        : <tr><td>Loading</td></tr>
                    }
                    </tbody>
                </table>
                
            </div>
            ):
            <div className='barchart-section'>
                <Button  variant="outlined" className="view-button" onClick={() => setDataView("table")}>Table View <TableChartIcon/></Button>
                <div className='barchart'>
                    <BarChart data={fetchedData}/>
                </div>
            </div>
        }


        </>
    )
}

export default List