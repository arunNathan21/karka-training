// import React, { useState } from "react";

// export const Reg = () => {
//   const [students, setStudents] = useState([]);

//   const [insert, setInsert] = useState({
//     name: "",
//     pass: ""
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newStudents = [...students, insert];

//     setStudents(newStudents);

//     localStorage.setItem('students', JSON.stringify(newStudents));

//     setInsert({
//       name: "",
//       pass: ""
//     });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>UserName</label>
//         <input
//           type="text"
//           value={insert.name}
//           onChange={(e) => setInsert({ ...insert, name: e.target.value })}
//         /><br/>
//         <label>Password</label>
//         <input
//           type="password"
//           value={insert.pass}
//           onChange={(e) => setInsert({ ...insert, pass: e.target.value })}
//         /><br/>
//         <button type="submit">Register</button>
//       </form>
//     </>
//   );
// };
import React, { useState } from 'react'

export const Reg = () => {
    const [register, setRegister] = useState({
        userName: "",
        password: "",
    })
    const handleClick = () => {
        console.log(register)
        if(register.userName&&register.password){
                const local=JSON.parse(localStorage.getItem("userData"))||[];
                local.push(register);
                localStorage.setItem("userData",JSON.stringify(local))
                setRegister({
                    userName: "",
                    password: "",
                })
        }else{
            alert("please enter username and password")
        }
    }
  return (
    <div>
      <form onClick={handleClick}>
        <label>UserName</label>
        <input type="text" value={register.userName} onChange={(e) => setRegister({...register, userName: e.target.value})}/>
        <label>Password</label>
        <input type="password" value={register.password} onChange={(e) => setRegister({...register, password: e.target.value})}/>
        <button >Register</button>
        </form>
    </div>
  )
}