import { useState } from "react";
import { Home } from "./Home";
import { Link } from 'react-router-dom';
import { Cart } from "./Cart";


export const  Button = () => {
    
        
    let [setdata, setvalue] = useState(null)

    let b1 = () => {
        setvalue("L")
    }
    let b2 = () => {
        setvalue("XL")
    }
    let b3 = () => {
        setvalue("XXL")
    }
    return (
        <>
            <div class="header">
                <a href="#default" class="logo">Products</a>
                <div class="header-right">
                    <a class="" href="#home">Home</a>
                    <a href="#contact">Products</a>
                    <a href="#about">Login/Register</a>
                    <Link to="/cart"> cart</Link>
                </div>
            </div>
            <div className="button">
                <p> SIZES</p><br></br>
                <p ><button onClick={b1} className="btn">L</button></p>
                <p ><button onClick={b2} className="btn">XL</button></p>
                <p ><button onClick={b3} className="btn">XXL</button></p>
            </div>
            {/* <Cart cmc={l}/> */}
            <Home prp={setdata}/>

        </>
    )

}
