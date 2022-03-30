import './list.css'
import {useState, useEffect} from 'react'


const List = () => {
    let [fetchedData, setData] = useState([])
    let [occurenceStat, setOccurence] = useState("default")
    let [numberStat, setNumber] = useState("default")
  
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
        <div className="List-div">
            <table >
                <thead>
                    <tr>
                        <th onClick={(e) => sortNumber(fetchedData,numberStat)}>Number</th>
                        <th onClick={(e) => sortOccurence(fetchedData,occurenceStat)}>Occurence (Count)</th>
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
    )
}

export default List