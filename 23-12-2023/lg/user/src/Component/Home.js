// import React from "react";


// export const Home =()=>{
//     return (
//         <>
//             <div>
//                 <h2>hello world</h2>
//             </div>
//         </>
//     )
// }


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userName: '',
    password: '',
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    const currentUser = userData.find((item) => item.userName === 'username');
    setUser(currentUser);
  }, []);

  const handleDelete = () => {
    localStorage.removeItem('userData');
    // window.location.href = '/';
    navigate('/');
  };

  const handleEdit = () => {
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    const userIndex = userData.findIndex((item) => item.userName === user.userName);

    if (userIndex !== -1) {
      userData[userIndex] = user;

      localStorage.setItem('userData', JSON.stringify(userData));

      navigate('/Reg');
    }
  };

  const handleLogout = () => {

    window.location.href = '/';
  };

  return (
    <div>
      {/* <h1>Welcome {user.userName}</h1> */}
      <p onClick={handleDelete}>Delete my account</p>
      <p onClick={handleEdit}>Edit my profile</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};