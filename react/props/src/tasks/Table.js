import React from "react";

export const Table = (props) => {
    const item=props.data1
    // console.log(item);
    return(
        <>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Place</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {item.map((data,index)=>
                    data.age > 18 ? 
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.place}</td>
                        </tr>: null
                    )}
           
                </tbody>
            </table>
        </>
    )
}