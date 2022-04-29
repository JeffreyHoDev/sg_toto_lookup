import { useEffect, useState } from 'react';
import './App.css';
import List from './components/numberList/List'
import NavBar from './components/navbar/Nav-bar'
import CopyrightIcon from '@mui/icons-material/Copyright';
import { queryData } from './firebase/firebase.util'

const App = () => {

  let [fetchedData, setData] = useState([])

  useEffect(() => {
    queryData()
    .then(data => {
        const JSONObject = []
        for(const unit in data){
            JSONObject.push({
                "number": unit,
                "occurence": data[unit]
            })
        }
        return JSONObject
    })
    .then(data => setData(data))
    .catch(console.log)    
  }, [])

  return (
    <div className="App">
      {/* <Input /> */}
      <NavBar position="fixed" content={<>This website is just for fun and merely references. It is not sponsored by any parties, just personal hobby project. All data are recorded manually by myself, might have a bit error. All the information provided on this website is provided on an “as is” and “as available” basis and you agree that you use such information entirely at your own risk. <p>Support the Lottery Provider: <a target="_blank" rel="noreferrer" href="https://www.singaporepools.com.sg/landing/en/Pages/index.html">To SG Pool Real Website</a></p>
      </>}/>
      <div className="body-section">
        <h1>TOTO Number Analysis</h1>
        <List fetchedData={fetchedData} setData={setData} />
      </div>
      <NavBar position="" content={<><CopyrightIcon/>2022 Ho Kah Wai (aka Jeffrey Ho). All rights reserved. Any feedback can email: <a href="mailto:jeffreyhodev@gmail.com">Jeffrey</a> </>} />
    </div>
  );
}

export default App;
