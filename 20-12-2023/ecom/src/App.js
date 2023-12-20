
import './App.css';
import { Button } from './Components/Button';
import { Routes,Route } from 'react-router-dom';
// import { Cart } from './Components/Cart';
import { Header } from './Components/Header';

function App() {
  return (
    <div className="App">
<Header/>
      
        <Routes>
          
            <Route path='/'element={<Button/>}/>
            {/* <Route path='cart' element={<Cart/>}/> */}
        </Routes>

    </div>
  );
}

export default App;
