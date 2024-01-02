import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Register =()=>{
    const navigate = useNavigate();
    const[regis,setRegis] = useState([])
    const[register,setRegister] = useState({
        name : "",
        pass : ""
    })

    const handleClick=(e)=>{
        e.preventDefault()
        setRegis([...regis,register])

        console.log(register);
        if (register.name && register.pass) {
            const local = JSON.parse(localStorage.getItem("userData")) || [];
            local.push(register);
            localStorage.setItem("userData", JSON.stringify(local));
            setRegister({
                name: "",
                pass: ""
            });
            alert("register sucess")
            navigate('/')

        } else {
            alert("Please enter your username and password");
        }
        
        
    }

    
    return(
        <>
        <h2>Registered Account </h2>
            <form onSubmit={handleClick}>
                <label>UserName</label>
                <input type='text' value={register.name} onChange={(e)=>setRegister({...register,name:e.target.value})}/><br/>
                <label>Password</label>
                <input type='password' value={register.pass} onChange={(e)=>setRegister({...register,pass:e.target.value})}/><br/>
                <button>Register</button>
            </form>
           {/* <table>
            <tr>
                <td>Sino</td>
                <td>UserName</td>
                <td>Password</td>
            </tr>
                {regis.map((val,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{val.name}</td>
                        <td>{val.pass}</td>
                    </tr>
                ))}
           
           </table> */}

           {/* <Home mapdata={regis}/> */}
        </>

        
    )
}

