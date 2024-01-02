import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login=()=>{

    const navigate = useNavigate();

    const [getdata, setGetdata] = useState({
        name: "",
        pass: ""
    })

    const handledataClick=()=>{
        if(localStorage.getItem("userData")){
            const local = JSON.parse(localStorage.getItem("userData") || []);

            const datas =local.find((lst)=>lst.name === getdata.name && lst.pass === getdata.pass);

            if(datas) {
                alert("login sucess")
                navigate('/Home')

            } else {
                alert("password wrong")
            }

        }
    }
    
    return(
        <>
        <h2>Login Account</h2>
            <form onSubmit={handledataClick}>
                <label><b>UserName</b></label>
                <input type="text" value={getdata.name} onChange={(e)=>setGetdata({...getdata, name: e.target.value})}/><br/>
                <label><b>Password</b></label>
                <input type="password" value={getdata.pass} onChange={(e)=>setGetdata({...getdata, pass: e.target.value})}/><br/>
                <button>Login</button><br/>
                <Link to="">Forget password</Link><br/>
                <a href="/Regiser">Create Account</a>
            </form>
        </>
    )
}