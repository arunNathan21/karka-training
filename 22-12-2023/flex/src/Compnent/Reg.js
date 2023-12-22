import React, { useState } from "react";

export const Reg = () => {
  const [students, setStudents] = useState([]);

  const [insert, setInsert] = useState({
    name: "",
    pass: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudents = [...students, insert];

    setStudents(newStudents);

    localStorage.setItem('students', JSON.stringify(newStudents));

    setInsert({
      name: "",
      pass: ""
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          type="text"
          value={insert.name}
          onChange={(e) => setInsert({ ...insert, name: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          value={insert.pass}
          onChange={(e) => setInsert({ ...insert, pass: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};
