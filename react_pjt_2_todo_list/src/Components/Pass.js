import React, { useState } from "react";

export const Pass = () => {
  const [obj1, setObj] = useState([
    {
      name: "",
      pass: ""
    }
  ]);

  const [data, setData] = useState({
    name: "",
    pass: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setObj([...obj1, data]);
    setData({
      name: "",
      pass: ""
    });
  };

  const handleDelete = (index) => {
    const updatedObj = obj1.filter((_, i) => i !== index);
    setObj(updatedObj);
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <label>password</label>
        <input
          type="password"
          name="pass"
          value={data.pass}
          onChange={handleChange}
        />
        <button type="submit">add</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>s.n</th>
            <th>name</th>
            <th>password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {obj1.map((val, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{val.name}</td>
              <td>{val.pass}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
