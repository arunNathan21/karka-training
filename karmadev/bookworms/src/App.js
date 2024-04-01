import './App.css';
import { Home } from './Components/Home';
import { Footer } from './Components/Layouts/Footer';
import { Header } from './Components/Layouts/Header';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { HelmetProvider} from 'react-helmet-async';
// import { Navbar } from './Components/Layouts/Navbar';
import { Viewproduct } from './Components/Viewproduct';
import { Cart } from './Components/Cart';
import { Recent } from './Components/Recent';
import { RecentProvider } from "./Components/RecentContext";
import { useState } from 'react';
import { About } from './Components/About';
import { Author } from './Components/Author';



function App() {

  const [cartCount, setCartCount] = useState(0);
  const updateCartCount = () => {
    setCartCount(prevCount => prevCount + 1);
  };
  return (
    <>
    <Router>
    <RecentProvider>
          <div className="App">
            <HelmetProvider>
                <Header cartCount={cartCount}/>
                {/* <Navbar/> */}
                  <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/product/:id' element={<Viewproduct updateCartCount={updateCartCount}/>}/>
                    <Route path='/Cart' element={<Cart/>}/>
                    <Route path="/recent" element={<Recent />} />
                    <Route path='/RecentProvider' element = {<RecentProvider/>}/>
                    <Route path='/Author' element={<Author/>}/>
                    <Route path='/About' element={<About/>}/>
                  </Routes>
                <Footer/>
            </HelmetProvider>
          </div>
          </RecentProvider>
    </Router>
  
    </>
    
  );
}

export default App;
