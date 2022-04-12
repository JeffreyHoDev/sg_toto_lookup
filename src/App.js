import './App.css';

import Input from './components/input/Input'
import List from './components/numberList/List'
import Topbar from './components/topbar/Topbar'
import CopyrightIcon from '@mui/icons-material/Copyright';

const App = () => {

  return (
    <div className="App">
      {/* <Input /> */}
      <Topbar position="fixed" content={<>This website is just for fun and merely references. It is not sponsored by any parties, just personal hobby project. All data are recorded manually by myself, might have a bit error. All the information provided on this website is provided on an “as is” and “as available” basis and you agree that you use such information entirely at your own risk. <p>Support the Lottery Provider: <a target="_blank" rel="noreferrer" href="https://www.singaporepools.com.sg/landing/en/Pages/index.html">To SG Pool Real Website</a></p>
      </>}/>
      <div className="body-section">
        <h1>TOTO Number Analysis</h1>
        <List />
      </div>
      <Topbar position="" content={<><CopyrightIcon/>2022 Ho Kah Wai (aka Jeffrey Ho). All rights reserved. Any feedback can email: <a href="mailto:jeffreyhodev@gmail.com">Jeffrey</a> </>} />
    </div>
  );
}

export default App;
