// import React,{useEffect,useState} from "react";
// import { Link } from "react-router-dom";

// export const Logs=()=>{
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
  
//     useEffect(() => {
//       // Retrieve username and password from localStorage
//       const storedUsername = localStorage.getItem('username');
//       const storedPassword = localStorage.getItem('password');
  
//       // Update state with retrieved data
//       if (storedUsername) {
//         setUsername(storedUsername);
//       }
  
//       if (storedPassword) {
//         setPassword(storedPassword);
//       }
//     }, []);

//     return(
//         <>
//             <div>
//             <form>
//         <label>
//           UserName
//           <input type="text" value={username} readOnly />
//         </label>
//         <label>
//           Password
//           <input type="password" value={password} readOnly />
//         </label>
//         <button type="submit">Submit</button>
//         <Link to="/Reg">Register</Link>
//       </form>
//             </div>
//         </>
//     )
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Logs = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleClick = () => {
    console.log(user);

    if (localStorage.getItem("userData")) {

      const local = JSON.parse(localStorage.getItem("userData")) || [];

      const foundUser = local.find(
        (item) =>
          item.userName === user.userName && item.password === user.password
      );

      if (foundUser) {
        alert("Login success");
        navigate("/Home");
      } else {
        alert("Login failed");
      }
    }
  };

  return (
    <div>
      <form onClick={handleClick}>
      <label>userName</label>
      <input
        type={"text"}
        value={user.userName}
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
      />
      <label>password</label>
      <input
        type={"password"}
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button >submit</button>
      </form>
      <a href="/Reg">create account</a>
    </div>
  );
};