import './input.css'
import { useState } from 'react'

const Input = () => {

    const [first, setFirst] = useState(1)
    const [second, setSecond] = useState(1)
    const [third, setThird] = useState(1)
    const [fourth, setFourth] = useState(1)
    const [fifth, setFifth] = useState(1)
    const [sixth, setSixth] = useState(1)
    const [additional, setAdditional] = useState(1)

    const submitInput = () => {
        let listofInput = []
        listofInput.push(parseInt(first))
        listofInput.push(parseInt(second))
        listofInput.push(parseInt(third))
        listofInput.push(parseInt(fourth))
        listofInput.push(parseInt(fifth))
        listofInput.push(parseInt(sixth))
        listofInput.push(parseInt(additional))

        let data = JSON.stringify(listofInput)
        fetch('http://localhost:9999/update', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })
        .then(response => response.json())
        .then(console.log)
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Numbers</th>
                        <th>Inputs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1st</td>
                        <td><input type="number" max={50} min={1} onChange={(e) => setFirst(e.target.value)} value={parseInt(first)}></input></td>
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td><input type="number" max={50} min={1} onChange={(e) => setSecond(e.target.value)} value={second}></input></td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><input type="number" max={50} min={1} onChange={(e) => setThird(e.target.value)} value={third}></input></td>
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td><input type="number" max={50} min={1} onChange={(e) => setFourth(e.target.value)} value={fourth}></input></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><input type="number" max={50} min={1} onChange={(e) => setFifth(e.target.value)} value={fifth}></input></td>
                    </tr>
                    <tr>
                        <td>6th</td>
                        <td><input type="number" max={50} min={1} onChange={(e) => setSixth(e.target.value)} value={sixth}></input></td>
                    </tr>
                    <tr>
                        <td>Additional</td>
                        <td><input type="number" max={50} min={1} onChange={(e) => setAdditional(e.target.value)} value={additional}></input></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => submitInput()}>Update</button>
        </>
    )
}

export default Input