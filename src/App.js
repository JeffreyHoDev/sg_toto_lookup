import './App.css';

import Input from './components/input/Input'
import List from './components/numberList/List'
import Topbar from './components/topbar/Topbar'

const App = () => {

  return (
    <div className="App">
      {/* <Input /> */}
      <Topbar />
      <div className="body-section">
        <h1>SG TOTO</h1>
        <List />
      </div>
    </div>
  );
}

export default App;
