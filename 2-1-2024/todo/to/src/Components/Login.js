import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login=()=>{

    const navigate = useNavigate();

    const [getdata, setGetdata] = useState({
        // name: "",
        // pass: ""
    })
    console.log(getdata);
    const handledataClick=()=>{
        if(localStorage.getItem("userData")){
            const local = JSON.parse(localStorage.getItem("userData") || []);

            const datas =local.find((lst)=>lst.name === getdata.name && lst.pass === getdata.pass);

            if(datas) {
                localStorage.setItem("loggedInUser", datas.name);
                localStorage.setItem("loggedInPass", datas.pass);
                alert("login sucess")
                navigate('/Home')

            } else {
                alert("password wrong")
            }

        }
    }
    
    return(
        <>
        <div className="todo_input_item login">
        <h2>Login Account</h2>
        
            <form onSubmit={handledataClick}>
                <label><b>UserName : </b></label>
                <input type="text" value={getdata.name} onChange={(e)=>setGetdata({...getdata, name: e.target.value})}/> <br/> <br/>
                <label><b>Password :    </b></label>
                <input type="password" value={getdata.pass} onChange={(e)=>setGetdata({...getdata, pass: e.target.value})}/> <br/>
                <button className="log">Login</button><br/>
                <Link to="">Forget password</Link><br/>
                <Link to="/Regiser" className="createAcc">Create Account</Link>
            </form>
            </div>
        </>
    )
}