
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Logs } from './Component/Logs';
import { Reg } from './Component/Reg';
import { Home } from './Component/Home';

function App() {
  return (
    <div className="App">

      {/* <Logs/> */}
      <Routes>
          <Route path='/' element={<Logs/>} />
          <Route path='/Reg' element={<Reg/>} />
          <Route path='/Home' element={<Home/>} />
    </Routes>
    </div>


  );
}

export default App;
