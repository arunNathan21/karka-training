import React from "react";
import jsonData from './Data.json'
import { useState } from "react";


export const Home = (props)=>{

    const [counter,setCount] = useState(0)

    const addTocart =()=>{
        setCount(counter +1)
    }
    const data = jsonData;

    // const [item, settem] = useState([]);
    const [addc, setAddc] = useState([]);

    const addToCart = (item) => {
        setAddc([...addc,item])
        // alert('Product added to cart!');
      };


      
    let filteredData = props.prp==null?data.data:data.data.filter((item)=>{return item.size === props.prp});

    return(
        <>
            <div>
                {filteredData.map((item,index)=>(
                    <div className="all" key={index}>
                        <p>
                            <img src={item.image} height='200px' alt={item.name} />
                        </p>
                        <p>{item.name}</p>
                        <p>{item.size}</p>
                        <p>₹ {item.prize}</p>
                        <p><button  onClick={()=>addToCart()}>addToCart</button></p>
                        </div>
                ))}
            </div>
        </>
    );
};
