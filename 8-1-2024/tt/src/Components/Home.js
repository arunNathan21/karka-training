// import React, { useState } from 'react';

// export const Home = () => {
//   const [data, setData] = useState(null);

//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const jsonData = await response.json();
//         console.log(jsonData);
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   ;

//   return (
//     <>
//       <div>
//             <table>
//                     <tr>
//                         <th>id</th>
//                         <th>title</th>
//                         <th>userId</th>
//                     </tr>
                  
//                         {
//                             data.map((val)=>(
//                                 <tr>
//                                 <td>{val.id}</td>
//                                 <td>{val.title}</td>
//                                 <td>{val.userId}</td>
//                                 </tr>
//                             ))
//                         }
                   
    
//         </table>
//       </div>
     
//     </>
//   );
// };







import React, { useState } from "react";

export const Home = () => {
  const [user, setUser] = useState({});

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 
  fetchUserData();

  console.log(user);

  return (
    <div>
    


    {user.length > 0 && (
        <table>
                    <tr>
                        <th>id</th>
                        <th>userid</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                    {user.map((user, index) => {
              if (user.completed === true && user.id % 2==0 ) {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.userId}</td>
                    <td>{user.title}</td>
                    <td>{user.completed.toString()}</td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
        </table>
      )}



    </div>
  );
};
