import React, { useState } from "react";

export const Todolist = () => {
    const [item, setItem] = useState([]);
    const [name, setName] = useState("");

    const add = () => {
        setItem([...item, name])
        setName("")
    }
    const delt =(index)=>{
        const updateItm = item.filter((_,i)=> i !== index);
        setItem(updateItm)
    }

    return (
        <>

            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={add}>Add</button>
            <table>
                <tr>
                    <td>s.n</td>
                    <td>nam</td>
                    <td>dlt</td>
                </tr>
{item.map((val,index)=>(
    <tr key={index}>
        <td>{index+1}</td>
        <td>{val}</td>
        <td><button onClick={()=>delt(index)}>Delete</button></td>
    </tr>
))}
            </table>

        </>
    )
}