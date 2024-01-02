import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Register } from './Components/Register';
import { Login } from './Components/Login';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Regiser' element={<Register/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
