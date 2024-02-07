import React from "react";

const products = [
    { title: 'Cabbage', isFruit: true, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

export const Map=()=>{

    const dv = products.map(item =>(
        <>
            <ul>
                <li key={item.id} style ={{color: item.isFruit ? 'magenta' : 'green'}}>   
                    
                {item.title}</li>
            </ul>
        </>
    ))
    return(
        <>
        <div><h2>map</h2></div>

            <div>{dv}</div>
        </>
    )
}